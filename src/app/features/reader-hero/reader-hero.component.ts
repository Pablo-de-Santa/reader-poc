import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

@Component({
  selector: 'app-reader-hero',
  standalone: true,
  templateUrl: './reader-hero.component.html',
  styleUrl: './reader-hero.component.scss',
})
export class ReaderHeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasHost', { static: true }) private canvasHost!: ElementRef<HTMLDivElement>;
  @ViewChild('hero', { static: true }) private hero!: ElementRef<HTMLElement>;
  @ViewChild('readerCopy', { static: true }) private readerCopy!: ElementRef<HTMLElement>;
  @ViewChild('deviceStage', { static: true }) private deviceStage!: ElementRef<HTMLElement>;
  @ViewChild('sensorCta', { static: true }) private sensorCta!: ElementRef<HTMLElement>;
  @ViewChild('analysisOverlay', { static: true }) private analysisOverlay!: ElementRef<SVGSVGElement>;
  @ViewChild('connectionLine', { static: true }) private connectionLine!: ElementRef<SVGPathElement>;
  @ViewChild('confirmationCircle', { static: true }) private confirmationCircle!: ElementRef<SVGCircleElement>;
  @ViewChild('confirmationCheck', { static: true }) private confirmationCheck!: ElementRef<SVGPathElement>;
  @ViewChildren('phrase') private phraseElements!: QueryList<ElementRef<HTMLElement>>;

  readonly phrases = [
    'cancer markers',
    'TB indicators',
    'cortisol',
    'inflammation',
    'hormone balance',
    'vitamin gaps',
    'kidney stress',
    'liver signals',
    'metabolic health',
    'immune response',
  ];

  private readonly initialModelPosition = new THREE.Vector3(0.7, -0.05, 0);
  private readonly initialModelRotation = new THREE.Euler(0.26, -0.48, 0);
  private readonly scrollModelPosition = new THREE.Vector3(0.62, -0.08, 0);
  private readonly scrollModelRotation = new THREE.Euler(0.36, -0.08, 0);
  private readonly cartridgeInsertedX = 1.33;
  private readonly cartridgePulledX = 2.48;
  private readonly cartridgeSlotY = 0.24;
  private readonly cartridgeSlotZ = 0.285;
  private readonly cartridgeWidthScale = 1.75;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private frameId = 0;
  private scrollTimeline?: gsap.core.Timeline;
  private scrollTriggerInstance?: ScrollTrigger;
  private phraseTimeline?: gsap.core.Timeline;
  private topRotationRig?: THREE.Group;
  private model?: THREE.Group;
  private readerFallbackParts: THREE.Object3D[] = [];
  private readerMaterials: THREE.Material[] = [];
  private readerFade = { opacity: 1 };
  private sensorGroup?: THREE.Group;
  private sensorFallbackParts: THREE.Object3D[] = [];
  private pipetteGroup?: THREE.Group;
  private dropletGroup?: THREE.Group;
  private dropMesh?: THREE.Mesh;
  private puddleMesh?: THREE.Mesh;
  private dnaGroup?: THREE.Group;
  private dnaMaterials: THREE.MeshStandardMaterial[] = [];
  private dnaReveal = { blur: 28 };
  private dnaDisplayScale = 1;
  private confirmation = { line: 0, circle: 0, check: 0, opacity: 0 };
  private isDnaSpinning = false;
  private isDnaSolid = false;
  private particles?: THREE.Points;
  private sensorConstellation?: THREE.Points;
  private sensorConstellationGeometry?: THREE.BufferGeometry;
  private sensorConstellationMaterial?: THREE.PointsMaterial;
  private sensorStarStartPositions?: Float32Array;
  private sensorStarTargetPositions?: Float32Array;
  private sensorStarFallPositions?: Float32Array;
  private sensorStarMotion = { progress: 0, fall: 0 };
  private sensorFieldReveal = { progress: 0 };
  private sensorFillCard?: THREE.Mesh;
  private sensorFillMaterial?: THREE.MeshStandardMaterial;
  private centerSensor?: THREE.Group;
  private centerSensorMaterials: THREE.Material[] = [];
  private sensorField?: THREE.Group;
  private sensorFieldItems: THREE.Group[] = [];
  private sensorFieldMaterialGroups: THREE.Material[][] = [];
  private sensorFieldMaterials: THREE.Material[] = [];
  private sensorFieldIsOpaque = false;
  private scrollProgressCurrent = 0;
  private scrollProgressTarget = 0;
  private scrollHandoff = { x: 0, y: 0, z: 0 };
  private isPointerDown = false;
  private isTopInteractive = true;
  private resizeRefreshId = 0;
  private resizeObserver?: ResizeObserver;
  private pointerStart = new THREE.Vector2();
  private dragStartRotation = new THREE.Euler();
  private scrollStartRigRotation?: THREE.Euler;
  private raycaster = new THREE.Raycaster();
  private selectedFieldSensor?: THREE.Group;
  private resizeHandler = () => this.onResize();
  private viewportResizeHandler = () => this.onResize();
  private scrollHandler = () => this.syncInteractionMode();
  private pointerDownHandler = (event: PointerEvent) => this.onPointerDown(event);
  private pointerMoveHandler = (event: PointerEvent) => this.onPointerMove(event);
  private pointerUpHandler = () => this.onPointerUp();

  ngAfterViewInit(): void {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    ScrollTrigger.normalizeScroll(true);

    this.initScene();
    this.createParticles();
    this.createReaderModel();
    this.createPipetteAndDroplet();
    this.createDnaModel();
    this.createSensorConstellationScene();
    this.buildScrollAnimation();
    this.setupPhraseAnimation();
    this.animate();
    window.addEventListener('resize', this.resizeHandler);
    window.visualViewport?.addEventListener('resize', this.viewportResizeHandler);
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.renderer.domElement.addEventListener('pointerdown', this.pointerDownHandler);
    window.addEventListener('pointermove', this.pointerMoveHandler);
    window.addEventListener('pointerup', this.pointerUpHandler);
    this.syncInteractionMode();
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(this.hero.nativeElement);
    this.resizeObserver.observe(this.canvasHost.nativeElement);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      this.onResize();
      this.syncInteractionMode();
      ScrollTrigger.refresh();
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
    window.clearTimeout(this.resizeRefreshId);
    this.resizeObserver?.disconnect();
    window.removeEventListener('resize', this.resizeHandler);
    window.visualViewport?.removeEventListener('resize', this.viewportResizeHandler);
    window.removeEventListener('scroll', this.scrollHandler);
    this.renderer?.domElement.removeEventListener('pointerdown', this.pointerDownHandler);
    window.removeEventListener('pointermove', this.pointerMoveHandler);
    window.removeEventListener('pointerup', this.pointerUpHandler);
    this.scrollTriggerInstance?.kill();
    this.scrollTimeline?.kill();
    this.phraseTimeline?.kill();
    ScrollTrigger.normalizeScroll(false);
    this.renderer?.dispose();
  }

  private initScene(): void {
    const host = this.canvasHost.nativeElement;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#050507');

    const viewport = this.getViewportSize();
    this.camera = new THREE.PerspectiveCamera(34, viewport.width / viewport.height, 0.1, 100);
    this.camera.position.set(0, 0.72, 6.7);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(this.getRenderPixelRatio());
    this.renderer.setSize(viewport.width, viewport.height, false);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.domElement.style.cursor = 'grab';
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.touchAction = 'pan-y';
    this.canvasHost.nativeElement.style.cursor = 'grab';
    this.hero.nativeElement.style.cursor = 'grab';
    host.appendChild(this.renderer.domElement);

    this.scene.add(new THREE.AmbientLight('#ffffff', 0.16));

    const topLight = new THREE.SpotLight('#f4e5c4', 82, 15, Math.PI / 6.5, 0.52, 1.25);
    topLight.position.set(0, 5.6, 2.6);
    topLight.target.position.set(0, 0, 0);
    this.scene.add(topLight, topLight.target);

    const rimLight = new THREE.DirectionalLight('#9fb1ff', 1.08);
    rimLight.position.set(-3, 2, -4);
    this.scene.add(rimLight);

    const frontFill = new THREE.DirectionalLight('#ffffff', 0.48);
    frontFill.position.set(4, 1, 4);
    this.scene.add(frontFill);
  }

  private createParticles(): void {
    const count = window.innerWidth < 900 ? 460 : 920;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = Math.random() * 5 - 1.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: '#f7efe2',
      size: 0.012,
      transparent: true,
      opacity: 0.58,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    particles.name = 'dust_particles';
    this.particles = particles;
    this.scene.add(particles);
  }

  private createReaderModel(): void {
    const shell = this.createMaterial('#f4efe2', 0.38, 0.18);
    const warmWhite = this.createMaterial('#fff7e8', 0.34, 0.16);
    const gray = this.createMaterial('#8f9ba0', 0.45, 0.1);
    const charcoal = this.createMaterial('#22282d', 0.58, 0.08);
    const black = this.createMaterial('#0d0e10', 0.7, 0.05);
    const purple = this.createMaterial('#5b2393', 0.42, 0.18);
    const blue = this.createMaterial('#1d7396', 0.3, 0.08);

    this.topRotationRig = new THREE.Group();
    this.topRotationRig.name = 'top_interaction_rotation_rig';
    this.topRotationRig.position.copy(this.getInitialModelPosition());
    this.scene.add(this.topRotationRig);

    this.model = new THREE.Group();
    this.model.name = 'reader_model';
    this.model.rotation.copy(this.initialModelRotation);
    this.topRotationRig.add(this.model);

    this.model.add(this.roundedBox('reader_body_shell', [4.35, 0.72, 1.28], [0, 0, 0], shell, 0.33));
    this.model.add(this.roundedBox('reader_top_gray_panel', [2.25, 0.08, 1.02], [-0.54, 0.38, 0], gray, 0.23));
    this.model.add(this.roundedBox('reader_front_white_collar', [0.72, 0.82, 1.38], [1.56, 0.02, 0], warmWhite, 0.24));
    this.model.add(this.roundedBox('reader_front_dark_cap', [0.42, 0.54, 0.92], [1.87, 0.2, 0], charcoal, 0.22));
    this.model.add(this.roundedBox('reader_front_slot_shadow', [0.08, 0.32, 0.74], [2.12, 0.02, 0], black, 0.12));
    this.model.add(this.roundedBox('reader_purple_socket', [0.1, 0.36, 0.76], [2.08, 0.01, 0], purple, 0.1));

    this.model.add(this.roundedBox('reader_purple_center_band', [0.28, 0.86, 1.42], [0.58, 0.02, 0], purple, 0.11));
    this.model.add(this.roundedBox('reader_side_purple_rail', [2.45, 0.18, 0.08], [-0.46, -0.08, -0.68], purple, 0.09));
    this.model.add(this.roundedBox('reader_side_logo_plate', [1.02, 0.2, 0.09], [-1.04, -0.1, -0.72], purple, 0.08));
    this.model.add(this.createLogoPlane());

    const aperture = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.025, 28), black);
    aperture.name = 'reader_status_aperture';
    aperture.rotation.x = Math.PI / 2;
    aperture.position.set(0.58, 0.47, -0.18);
    this.model.add(aperture);

    this.sensorGroup = this.createSensorGroup({ white: warmWhite, charcoal, blue });
    this.sensorGroup.position.set(this.cartridgeInsertedX, this.cartridgeSlotY, 0);
    this.model.add(this.sensorGroup);
    this.sensorFallbackParts = [...this.sensorGroup.children];
    this.setFallbackSensorVisibility(false);
    this.readerFallbackParts = this.model.children.filter((child) => child !== this.sensorGroup);
    this.setFallbackReaderVisibility(false);
    this.readerMaterials = this.collectMaterials(this.model);
    this.loadReaderAsset();
    this.loadCartridgeAsset();
  }

  private loadReaderAsset(): void {
    if (!this.model) return;

    const manager = new THREE.LoadingManager();
    manager.setURLModifier((url) => {
      if (url.endsWith('Case%20r12.bin') || url.endsWith('Case r12.bin')) {
        return '/assets/models/reader/reader.bin';
      }

      return url;
    });

    const loader = new GLTFLoader(manager);
    loader.load(
      '/assets/models/reader/reader.gltf',
      (gltf) => {
        if (!this.model) return;

        const readerAsset = this.prepareReaderAsset(gltf.scene);
        this.readerFallbackParts.forEach((child) => this.model?.remove(child));
        this.readerFallbackParts = [];
        this.model.add(readerAsset);
        this.readerMaterials = this.collectMaterials(this.model);
        this.setReaderOpacity(this.readerFade.opacity);
      },
      undefined,
      (error) => {
        console.error('Unable to load reader model asset', error);
        this.setFallbackReaderVisibility(true);
      },
    );
  }

  private setFallbackReaderVisibility(isVisible: boolean): void {
    this.readerFallbackParts.forEach((part) => {
      part.visible = isVisible;
    });
  }

  private prepareReaderAsset(scene: THREE.Group): THREE.Group {
    const asset = scene;
    asset.name = 'fusion_reader_model';
    asset.rotation.set(-Math.PI / 2, 0, -Math.PI / 2);
    asset.rotateY(Math.PI);
    asset.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), Math.PI);
    asset.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(asset);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const longestSide = Math.max(size.x, size.y, size.z);
    const targetLongestSide = 4.35;
    const scale = longestSide > 0 ? targetLongestSide / longestSide : 1;

    asset.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
    asset.scale.setScalar(scale);
    this.prepareAssetMaterials(asset);

    return asset;
  }

  private prepareAssetMaterials(asset: THREE.Object3D): void {
    asset.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (!mesh.isMesh) return;
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      materials.forEach((material) => {
        material.depthTest = true;
        material.depthWrite = true;
        material.needsUpdate = true;
      });
    });
  }

  private loadCartridgeAsset(): void {
    if (!this.sensorGroup) return;

    const loader = new GLTFLoader();
    loader.load(
      '/assets/models/cartridge/Cartridge Base.gltf',
      (gltf) => {
        if (!this.sensorGroup) return;

        const cartridgeAsset = this.prepareCartridgeAsset(gltf.scene);
        this.sensorFallbackParts.forEach((child) => this.sensorGroup?.remove(child));
        this.sensorFallbackParts = [];
        this.sensorGroup.add(cartridgeAsset);
        this.readerMaterials = this.collectMaterials(this.model ?? this.sensorGroup);
        this.setReaderOpacity(this.readerFade.opacity);
      },
      undefined,
      (error) => {
        console.error('Unable to load cartridge model asset', error);
        this.setFallbackSensorVisibility(true);
      },
    );
  }

  private prepareCartridgeAsset(scene: THREE.Group): THREE.Group {
    const asset = scene;
    asset.name = 'fusion_cartridge_model';
    asset.rotation.set(-Math.PI / 2, 0, 0);
    asset.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(asset);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const longestSide = Math.max(size.x, size.y, size.z);
    const targetLongestSide = 1.62;
    const scale = longestSide > 0 ? targetLongestSide / longestSide : 1;

    asset.position.set(0.55 - center.x * scale, -0.02 - center.y * scale, this.cartridgeSlotZ - center.z * scale);
    asset.scale.set(scale, scale * this.cartridgeWidthScale, scale);
    this.prepareAssetMaterials(asset);

    return asset;
  }

  private setFallbackSensorVisibility(isVisible: boolean): void {
    this.sensorFallbackParts.forEach((part) => {
      part.visible = isVisible;
    });
  }

  private buildScrollAnimation(): void {
    if (!this.model || !this.sensorGroup || !this.topRotationRig) return;

    const tl = gsap.timeline({ paused: true });
    this.scrollTimeline = tl;
    this.scrollTriggerInstance = ScrollTrigger.create({
      trigger: this.hero.nativeElement,
      start: 'top top',
      end: '+=11800',
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onEnter: () => {
        if (window.scrollY > 2) this.disableTopInteraction();
      },
      onEnterBack: () => this.syncInteractionMode(),
    });

    const pipette = this.pipetteGroup;
    const droplet = this.dropletGroup;
    const drop = this.dropMesh;
    const puddle = this.puddleMesh;
    const readerCopy = this.readerCopy.nativeElement;
    const deviceStage = this.deviceStage.nativeElement;
    const sensorCta = this.sensorCta.nativeElement;
    const deviceCopy = deviceStage.querySelectorAll('.device-copy');
    const deviceCopyItems = Array.from(deviceStage.querySelectorAll<HTMLElement>('[data-copy-row]')).sort(
      (first, second) => {
        const rowDifference = Number(first.dataset['copyRow']) - Number(second.dataset['copyRow']);
        if (rowDifference !== 0) return rowDifference;

        return first.closest('.device-copy-left') ? -1 : 1;
      },
    );
    const dna = this.dnaGroup;
    const dustMaterial = this.particles?.material as THREE.PointsMaterial | undefined;

    if (dna) {
      gsap.set(dna.position, {
        x: this.getDnaModelPosition().x,
        y: this.getDnaModelPosition().y,
        z: this.getDnaModelPosition().z,
      });
      gsap.set(dna.scale, { x: 1, y: 1, z: 1 });
      gsap.set(dna.rotation, { x: 0.18, y: 0, z: 0 });
      dna.visible = true;
    }
    this.dnaReveal.blur = 28;
    this.dnaDisplayScale = 1;
    this.confirmation.line = 0;
    this.confirmation.circle = 0;
    this.confirmation.check = 0;
    this.confirmation.opacity = 0;
    this.sensorStarMotion.progress = 0;
    this.sensorStarMotion.fall = 0;
    this.sensorFieldReveal.progress = 0;
    gsap.set(this.topRotationRig, { visible: true });
    this.isDnaSpinning = false;
    this.isDnaSolid = false;
    this.setDnaOpacity(0);
    gsap.set(deviceStage, {
      autoAlpha: 0,
      '--device-w': '62vw',
      '--device-h': '58vh',
      '--device-r': '1rem',
      '--device-x': '0vw',
      '--device-y': '0vh',
      '--stand-o': 1,
      '--keyboard-o': 0,
      '--home-o': 0,
    });
    gsap.set(deviceCopy, { autoAlpha: 1, filter: 'blur(0px)', y: '-10vh' });
    gsap.set(deviceCopyItems, { autoAlpha: 0, filter: 'blur(12px)', y: 18 });
    gsap.set(sensorCta, { autoAlpha: 0, filter: 'blur(18px)', y: 20 });
    this.sensorFieldIsOpaque = false;
    this.readerFade.opacity = 1;
    this.setReaderOpacity(1);
    this.centerSensor?.position.set(-0.82, 0, 0.09);
    this.centerSensor?.rotation.set(Math.PI / 2, 0, 0);
    this.centerSensor?.scale.setScalar(1.48);
    if (this.sensorConstellationMaterial) {
      gsap.set(this.sensorConstellationMaterial, { opacity: 0, size: 0.023 });
    }
    if (this.sensorFillMaterial) {
      gsap.set(this.sensorFillMaterial, { opacity: 0 });
    }
    this.setMaterialsOpacity(this.centerSensorMaterials, 0);
    this.setMaterialsOpacity(this.sensorFieldMaterials, 0);
    this.updateAnalysisOverlay();

    tl.to(this.topRotationRig.position, this.vectorTweenDynamic(() => this.getScrollModelPosition(), 0.34), 0)
      .to(
        this.model.rotation,
        {
          x: this.scrollModelRotation.x,
          y: this.scrollModelRotation.y,
          z: this.scrollModelRotation.z,
          duration: 0.34,
        },
        0,
      )
      .to(this.sensorGroup.position, { x: this.cartridgePulledX, y: this.cartridgeSlotY, z: 0, duration: 0.28 }, 0.38)
      .to(this.sensorGroup.rotation, { x: 0, y: 0, z: 0, duration: 0.28 }, 0.38)
      .set(pipette ?? {}, { visible: true }, 0.62)
      .to(pipette?.position ?? {}, { y: 0.88, duration: 0.28, ease: 'power2.out' }, 0.62)
      .set(droplet ?? {}, { visible: true }, 0.92)
      .set(drop ?? {}, { visible: true }, 0.92)
      .to(drop?.scale ?? {}, { x: 0.68, y: 0.68, z: 0.68, duration: 0.04 }, 0.92)
      .to(drop?.position ?? {}, { y: 0.055, duration: 0.18, ease: 'power1.in' }, 0.94)
      .set(puddle ?? {}, { visible: true }, 1.04)
      .to(drop?.scale ?? {}, { x: 0.24, y: 0.18, z: 0.24, duration: 0.07 }, 1.05)
      .to(puddle?.scale ?? {}, { x: 1, y: 1, z: 1, duration: 0.1 }, 1.05)
      .set(drop ?? {}, { visible: false }, 1.11)
      .to(pipette?.position ?? {}, { y: 3.6, duration: 0.22, ease: 'power2.in' }, 1.14)
      .set(pipette ?? {}, { visible: false }, 1.36)
      .to(puddle?.scale ?? {}, { x: 0, y: 0, z: 0, duration: 0.08 }, 1.22)
      .set(puddle ?? {}, { visible: false }, 1.32)
      .set(droplet ?? {}, { visible: false }, 1.32)
      .to(this.sensorGroup.position, { x: this.cartridgeInsertedX, y: this.cartridgeSlotY, z: 0, duration: 0.28 }, 1.34)
      .to(this.model.rotation, { x: 0.24, y: -0.62, z: 0, duration: 0.24 }, 1.62)
      .to(
        this.topRotationRig.position,
        this.vectorTweenDynamic(() => this.getAnalysisModelPosition(), 0.56),
        1.86,
      )
      .to(
        this.topRotationRig.scale,
        {
          x: () => this.getAnalysisModelScale(),
          y: () => this.getAnalysisModelScale(),
          z: () => this.getAnalysisModelScale(),
          duration: 0.56,
          ease: 'power2.inOut',
        },
        1.86,
      )
      .to(
        this.model.rotation,
        { x: Math.PI / 2, y: -Math.PI / 2, z: 0, duration: 0.56, ease: 'power2.inOut' },
        1.86,
      )
      .to(this.sensorGroup.rotation, { x: 0, y: 0, z: 0, duration: 0.56, ease: 'power2.inOut' }, 1.86)
      .to(readerCopy, { x: '-38vw', autoAlpha: 0, filter: 'blur(18px)', duration: 0.42, ease: 'power2.in' }, 1.92)
      .to(
        this.dnaMaterials,
        {
          opacity: 1,
          duration: 1.22,
          ease: 'none',
        },
        2.5,
      )
      .to(this.dnaReveal, { blur: 0, duration: 1.22, ease: 'none' }, 2.5)
      .call(() => {
        this.isDnaSpinning = true;
      }, undefined, 3.78)
      .to(this.confirmation, { opacity: 1, duration: 0.08, ease: 'none' }, 3.88)
      .to(
        this.confirmation,
        {
          line: 1,
          circle: 1,
          check: 1,
          duration: 0.48,
          ease: 'power2.inOut',
        },
        3.88,
      )
      .call(() => {
        this.isDnaSpinning = false;
      }, undefined, 4.42)
      .to(this.confirmation, { opacity: 0, duration: 0.28, ease: 'power2.inOut' }, 4.42)
      .to(this.dnaMaterials, { opacity: 0, duration: 0.36, ease: 'power2.inOut' }, 4.42)
      .to(this.dnaReveal, { blur: 18, duration: 0.36, ease: 'power2.inOut' }, 4.42)
      .to(this.topRotationRig.position, this.vectorTweenDynamic(() => this.getDeviceModelPosition('desktop'), 0.58), 4.42)
      .to(this.topRotationRig.rotation, { x: 0, y: 0, z: 0, duration: 0.58, ease: 'power2.inOut' }, 4.42)
      .to(
        this.model.rotation,
        {
          x: this.initialModelRotation.x,
          y: this.initialModelRotation.y,
          z: this.initialModelRotation.z,
          duration: 0.58,
          ease: 'power2.inOut',
        },
        4.42,
      )
      .to(
        this.topRotationRig.scale,
        {
          x: () => this.getDeviceModelScale('desktop'),
          y: () => this.getDeviceModelScale('desktop'),
          z: () => this.getDeviceModelScale('desktop'),
          duration: 0.58,
          ease: 'power2.inOut',
        },
        4.42,
      )
      .to(deviceStage, { autoAlpha: 1, duration: 0.28, ease: 'power2.out' }, 4.86)
      .to(
        deviceCopyItems,
        {
          autoAlpha: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.45,
          stagger: (index: number) => Math.floor(index / 2) * 0.28,
          ease: 'power2.out',
        },
        5.02,
      )
      .to(
        deviceStage,
        {
          '--device-w': () => this.getDeviceFrame('desktop').width,
          '--device-h': () => this.getDeviceFrame('desktop').height,
          '--device-r': '0.9rem',
          '--device-x': '0vw',
          '--device-y': '-1vh',
          '--stand-o': 1,
          '--keyboard-o': 0,
          '--home-o': 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        4.86,
      )
      .to(
        deviceStage,
        {
          '--device-w': () => this.getDeviceFrame('laptop').width,
          '--device-h': () => this.getDeviceFrame('laptop').height,
          '--device-r': '0.75rem',
          '--device-y': '-3vh',
          '--stand-o': 0,
          '--keyboard-o': 1,
          '--home-o': 0,
          duration: 0.7,
          ease: 'power2.inOut',
        },
        5.12,
      )
      .to(this.topRotationRig.position, this.vectorTweenDynamic(() => this.getDeviceModelPosition('laptop'), 0.7), 5.12)
      .to(
        this.model.rotation,
        {
          x: () => this.getDeviceModelRotation('laptop').x,
          y: () => this.getDeviceModelRotation('laptop').y,
          z: () => this.getDeviceModelRotation('laptop').z,
          duration: 0.7,
          ease: 'power2.inOut',
        },
        5.12,
      )
      .to(
        this.topRotationRig.scale,
        {
          x: () => this.getDeviceModelScale('laptop'),
          y: () => this.getDeviceModelScale('laptop'),
          z: () => this.getDeviceModelScale('laptop'),
          duration: 0.7,
          ease: 'power2.inOut',
        },
        5.12,
      )
      .to(dna?.position ?? {}, this.vectorTweenDynamic(() => this.getDeviceDnaPosition('laptop'), 0.7), 5.12)
      .to(this, { dnaDisplayScale: () => this.getDeviceDnaScale('laptop'), duration: 0.7, ease: 'power2.inOut' }, 5.12)
      .to(deviceCopy, { y: '16vh', duration: 2.5, ease: 'none' }, 5.12)
      .to(
        deviceStage,
        {
          '--device-w': () => this.getDeviceFrame('tablet').width,
          '--device-h': () => this.getDeviceFrame('tablet').height,
          '--device-r': '1.35rem',
          '--device-y': '0vh',
          '--stand-o': 0,
          '--keyboard-o': 0,
          '--home-o': 1,
          duration: 0.7,
          ease: 'power2.inOut',
        },
        5.98,
      )
      .to(this.topRotationRig.position, this.vectorTweenDynamic(() => this.getDeviceModelPosition('tablet'), 0.7), 5.98)
      .to(
        this.model.rotation,
        {
          x: () => this.getDeviceModelRotation('tablet').x,
          y: () => this.getDeviceModelRotation('tablet').y,
          z: () => this.getDeviceModelRotation('tablet').z,
          duration: 0.7,
          ease: 'power2.inOut',
        },
        5.98,
      )
      .to(
        this.topRotationRig.scale,
        {
          x: () => this.getDeviceModelScale('tablet'),
          y: () => this.getDeviceModelScale('tablet'),
          z: () => this.getDeviceModelScale('tablet'),
          duration: 0.7,
          ease: 'power2.inOut',
        },
        5.98,
      )
      .to(dna?.position ?? {}, this.vectorTweenDynamic(() => this.getDeviceDnaPosition('tablet'), 0.7), 5.98)
      .to(this, { dnaDisplayScale: () => this.getDeviceDnaScale('tablet'), duration: 0.7, ease: 'power2.inOut' }, 5.98)
      .to(
        deviceStage,
        {
          '--device-w': () => this.getDeviceFrame('phone').width,
          '--device-h': () => this.getDeviceFrame('phone').height,
          '--device-r': '1.5rem',
          '--device-y': '0vh',
          '--stand-o': 0,
          '--keyboard-o': 0,
          '--home-o': 1,
          duration: 0.75,
          ease: 'power2.inOut',
        },
        6.86,
      )
      .to(this.topRotationRig.position, this.vectorTweenDynamic(() => this.getDeviceModelPosition('phone'), 0.75), 6.86)
      .to(
        this.model.rotation,
        {
          x: () => this.getDeviceModelRotation('phone').x,
          y: () => this.getDeviceModelRotation('phone').y,
          z: () => this.getDeviceModelRotation('phone').z,
          duration: 0.75,
          ease: 'power2.inOut',
        },
        6.86,
      )
      .to(
        this.topRotationRig.scale,
        {
          x: () => this.getDeviceModelScale('phone'),
          y: () => this.getDeviceModelScale('phone'),
          z: () => this.getDeviceModelScale('phone'),
          duration: 0.75,
          ease: 'power2.inOut',
        },
        6.86,
      )
      .to(dna?.position ?? {}, this.vectorTweenDynamic(() => this.getDeviceDnaPosition('phone'), 0.75), 6.86)
      .to(this, { dnaDisplayScale: () => this.getDeviceDnaScale('phone'), duration: 0.75, ease: 'power2.inOut' }, 6.86)
      .to(deviceStage, { autoAlpha: 0, filter: 'blur(18px)', duration: 0.44, ease: 'power2.in' }, 7.7)
      .to(
        this.readerFade,
        {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onUpdate: () => this.setReaderOpacity(this.readerFade.opacity),
          onComplete: () => this.setReaderOpacity(0),
          onReverseComplete: () => this.setReaderOpacity(1),
        },
        7.7,
      )
      .to(this.topRotationRig.scale, { x: 0.1, y: 0.1, z: 0.1, duration: 0.5, ease: 'power2.in' }, 7.7)
      .set(this.topRotationRig, { visible: false }, 8.22)
      .to(dustMaterial ?? {}, { opacity: 0.88, size: 0.018, duration: 0.5, ease: 'power2.out' }, 7.86)
      .to(
        this.sensorConstellationMaterial ?? {},
        { opacity: 0.96, size: 0.025, duration: 0.45, ease: 'power2.out' },
        7.92,
      )
      .to(this.sensorStarMotion, { progress: 1, duration: 0.95, ease: 'none' }, 8.05)
      .to(this.sensorFillMaterial ?? {}, { opacity: 1, duration: 0.28, ease: 'power2.out' }, 8.9)
      .to(this.sensorConstellationMaterial ?? {}, { opacity: 0.2, size: 0.012, duration: 0.34, ease: 'power2.inOut' }, 9.02)
      .call(() => this.prepareMaterialsForReveal(this.centerSensorMaterials), undefined, 9.0)
      .to(this.centerSensorMaterials, { opacity: 1, duration: 0.34, ease: 'power2.out' }, 9.02)
      .to(this.sensorFillMaterial ?? {}, { opacity: 0, duration: 0.26, ease: 'power2.in' }, 9.42)
      .to(this.sensorConstellationMaterial ?? {}, { opacity: 0, duration: 0.22, ease: 'power2.in' }, 9.42)
      .to(this.centerSensor?.position ?? {}, this.vectorTweenDynamic(() => this.centerSensor?.userData['fieldPosition'] ?? new THREE.Vector3(), 0.52), 9.72)
      .to(
        this.centerSensor?.rotation ?? {},
        {
          x: () => (this.centerSensor?.userData['fieldRotation'] as THREE.Euler | undefined)?.x ?? 0,
          y: () => (this.centerSensor?.userData['fieldRotation'] as THREE.Euler | undefined)?.y ?? 0,
          z: () => (this.centerSensor?.userData['fieldRotation'] as THREE.Euler | undefined)?.z ?? 0,
          duration: 0.52,
          ease: 'power2.inOut',
        },
        9.72,
      )
      .to(
        this.centerSensor?.scale ?? {},
        {
          x: () => this.centerSensor?.userData['fieldScale'] ?? 0.34,
          y: () => this.centerSensor?.userData['fieldScale'] ?? 0.34,
          z: () => this.centerSensor?.userData['fieldScale'] ?? 0.34,
          duration: 0.52,
          ease: 'power2.inOut',
        },
        9.72,
      )
      .call(() => this.prepareMaterialsForReveal(this.sensorFieldMaterials), undefined, 10.12)
      .to(this.sensorFieldReveal, { progress: 1, duration: 0.72, ease: 'none' }, 10.18)
      .to(this.sensorStarMotion, { fall: 1, duration: 0.9, ease: 'none' }, 10.92)
      .to(sensorCta, { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.62, ease: 'power3.out' }, 11.36);
  }

  private setupPhraseAnimation(): void {
    const phraseNodes = this.phraseElements.toArray().map((item) => item.nativeElement);
    if (!phraseNodes.length) return;

    gsap.set(phraseNodes, {
      autoAlpha: 0,
      clipPath: 'inset(0 100% 0 0)',
      filter: 'blur(18px)',
      x: '-0.55em',
    });

    const tl = gsap.timeline({ delay: 0.55, repeat: -1, repeatDelay: 0.12 });
    this.phraseTimeline = tl;

    phraseNodes.forEach((phraseNode) => {
      tl.set(phraseNode, {
        autoAlpha: 1,
        clipPath: 'inset(0 100% 0 0)',
        filter: 'blur(18px)',
        x: '-0.55em',
      })
        .to(phraseNode, {
          clipPath: 'inset(0 0% 0 0)',
          filter: 'blur(0px)',
          x: 0,
          duration: 0.72,
          ease: 'power3.out',
        })
        .to(phraseNode, { duration: 2.85 })
        .to(phraseNode, {
          clipPath: 'inset(0 0 0 100%)',
          filter: 'blur(16px)',
          x: '0.45em',
          duration: 0.54,
          ease: 'power3.in',
        })
        .set(phraseNode, { autoAlpha: 0 });
    });
  }

  private createSensorGroup(materials: {
    white: THREE.MeshStandardMaterial;
    charcoal: THREE.MeshStandardMaterial;
    blue: THREE.MeshStandardMaterial;
  }): THREE.Group {
    const group = new THREE.Group();
    group.name = 'sensor_group';

    const strip = this.roundedBox('sensor_strip', [1.62, 0.045, 0.42], [0.55, -0.02, 0], materials.white, 0.045);
    group.add(strip);

    const sampleDot = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.012, 28), materials.blue);
    sampleDot.name = 'sensor_sample_dot';
    sampleDot.rotation.x = Math.PI / 2;
    sampleDot.position.set(0.7, 0.012, 0);
    group.add(sampleDot);

    for (let i = 0; i < 7; i++) {
      const contact = this.roundedBox(
        `sensor_contact_${i}`,
        [0.035, 0.014, 0.13],
        [1.26, 0.012, -0.18 + i * 0.06],
        materials.charcoal,
        0.01,
      );
      group.add(contact);
    }

    const label = this.createSensorLabelPlane();
    label.position.set(0.18, 0.02, 0);
    group.add(label);

    return group;
  }

  private createPipetteAndDroplet(): void {
    if (!this.sensorGroup) return;

    const glass = new THREE.MeshStandardMaterial({
      color: '#dff7ff',
      transparent: true,
      opacity: 0.38,
      roughness: 0.1,
      metalness: 0,
    });
    const liquid = new THREE.MeshStandardMaterial({
      color: '#d8ffff',
      transparent: true,
      opacity: 0.68,
      roughness: 0.04,
      metalness: 0,
    });

    this.pipetteGroup = new THREE.Group();
    this.pipetteGroup.name = 'pipette_group';
    this.pipetteGroup.position.set(0.18, 3.6, 0);
    this.pipetteGroup.rotation.set(0, 0, 0);
    this.pipetteGroup.visible = false;
    this.sensorGroup.add(this.pipetteGroup);

    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.68, 28), glass);
    barrel.name = 'pipette_barrel';
    barrel.position.set(0, 0.08, 0);
    this.pipetteGroup.add(barrel);

    const liquidCore = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.036, 0.5, 24), liquid);
    liquidCore.name = 'pipette_liquid_core';
    liquidCore.position.set(0, 0.1, 0);
    this.pipetteGroup.add(liquidCore);

    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.11, 28, 18), glass);
    bulb.name = 'pipette_bulb';
    bulb.scale.set(0.82, 1.42, 0.82);
    bulb.position.set(0, 0.56, 0);
    this.pipetteGroup.add(bulb);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.05, 0.18, 24), glass);
    neck.name = 'pipette_neck';
    neck.position.set(0, -0.34, 0);
    this.pipetteGroup.add(neck);

    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.28, 28), glass);
    tip.name = 'pipette_tip';
    tip.rotation.x = Math.PI;
    tip.position.set(0, -0.57, 0);
    this.pipetteGroup.add(tip);

    this.dropletGroup = new THREE.Group();
    this.dropletGroup.name = 'solution_droplet';
    this.dropletGroup.position.set(0.18, 0, 0);
    this.dropletGroup.visible = false;
    this.sensorGroup.add(this.dropletGroup);

    const drop = new THREE.Mesh(this.createDropletGeometry(), liquid);
    drop.name = 'transparent_solution_drop';
    drop.position.set(0, 0.17, 0);
    drop.scale.setScalar(0);
    drop.visible = false;
    this.dropMesh = drop;
    this.dropletGroup.add(drop);

    const puddle = new THREE.Mesh(new THREE.CircleGeometry(0.075, 40), liquid);
    puddle.name = 'solution_contact_puddle';
    puddle.rotation.x = -Math.PI / 2;
    puddle.position.set(0, 0.034, 0);
    puddle.scale.setScalar(0);
    puddle.visible = false;
    this.puddleMesh = puddle;
    this.dropletGroup.add(puddle);
  }

  private createDnaModel(): void {
    const group = new THREE.Group();
    group.name = 'analysis_dna_model';
    group.position.copy(this.getDnaModelPosition());
    group.rotation.set(0.18, 0, 0);
    group.visible = true;

    const strandA = this.createMaterial('#61d7ff', 0.25, 0.12);
    const strandB = this.createMaterial('#9a6cff', 0.28, 0.12);
    const rungMaterial = this.createMaterial('#d7fff1', 0.34, 0.08);
    const nodeMaterial = this.createMaterial('#f7efe2', 0.42, 0.05);
    this.dnaMaterials = [strandA, strandB, rungMaterial, nodeMaterial];
    this.setDnaOpacity(0);

    const height = 2.55;
    const radius = 0.36;
    const turns = 2.15;
    const segments = 36;
    const pointsA: THREE.Vector3[] = [];
    const pointsB: THREE.Vector3[] = [];

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const angle = t * Math.PI * 2 * turns;
      const y = -height / 2 + t * height;
      pointsA.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
      pointsB.push(new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius));
    }

    const strandCurveA = new THREE.CatmullRomCurve3(pointsA);
    const strandCurveB = new THREE.CatmullRomCurve3(pointsB);
    group.add(new THREE.Mesh(new THREE.TubeGeometry(strandCurveA, 110, 0.026, 16, false), strandA));
    group.add(new THREE.Mesh(new THREE.TubeGeometry(strandCurveB, 110, 0.026, 16, false), strandB));

    for (let i = 0; i <= segments; i += 3) {
      const nodeA = new THREE.Mesh(new THREE.SphereGeometry(0.06, 18, 12), i % 2 === 0 ? strandA : nodeMaterial);
      nodeA.position.copy(pointsA[i]);
      group.add(nodeA);

      const nodeB = new THREE.Mesh(new THREE.SphereGeometry(0.06, 18, 12), i % 2 === 0 ? strandB : nodeMaterial);
      nodeB.position.copy(pointsB[i]);
      group.add(nodeB);

      group.add(this.cylinderBetween(pointsA[i], pointsB[i], 0.012, rungMaterial));
    }

    this.dnaGroup = group;
    this.scene.add(group);
  }

  private createSensorConstellationScene(): void {
    const starCount = this.getViewportSize().width < 760 ? 1800 : 3400;
    const startPositions = new Float32Array(starCount * 3);
    const targetPositions = new Float32Array(starCount * 3);
    const fallPositions = new Float32Array(starCount * 3);
    const shape = this.createSensorStarTargets(starCount);

    for (let i = 0; i < starCount; i++) {
      const startIndex = i * 3;
      const offscreen = Math.random() < 0.18;
      if (offscreen) {
        const side = Math.floor(Math.random() * 4);
        startPositions[startIndex] = side < 2 ? (Math.random() < 0.5 ? -4.5 : 4.5) : (Math.random() - 0.5) * 8.4;
        startPositions[startIndex + 1] = side >= 2 ? (Math.random() < 0.5 ? -2.8 : 2.8) : (Math.random() - 0.5) * 5.1;
      } else {
        startPositions[startIndex] = (Math.random() - 0.5) * 7.6;
        startPositions[startIndex + 1] = (Math.random() - 0.5) * 4.4;
      }
      startPositions[startIndex + 2] = -0.28 + Math.random() * 0.56;

      targetPositions[startIndex] = shape[startIndex];
      targetPositions[startIndex + 1] = shape[startIndex + 1];
      targetPositions[startIndex + 2] = shape[startIndex + 2];

      fallPositions[startIndex] = targetPositions[startIndex] + (Math.random() - 0.5) * 0.18;
      fallPositions[startIndex + 1] = -2.85 - Math.random() * 0.55;
      fallPositions[startIndex + 2] = targetPositions[startIndex + 2] + (Math.random() - 0.5) * 0.14;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(startPositions.slice(), 3));

    const material = new THREE.PointsMaterial({
      color: '#f7efe2',
      size: 0.023,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });

    this.sensorConstellation = new THREE.Points(geometry, material);
    this.sensorConstellation.name = 'sensor_constellation';
    this.sensorConstellationGeometry = geometry;
    this.sensorConstellationMaterial = material;
    this.sensorStarStartPositions = startPositions;
    this.sensorStarTargetPositions = targetPositions;
    this.sensorStarFallPositions = fallPositions;
    this.scene.add(this.sensorConstellation);

    this.sensorFillMaterial = this.createTransparentMaterial('#f7f1df', 0.34, 0.08);
    this.sensorFillMaterial.opacity = 0;
    this.sensorFillCard = this.roundedBox('sensor_fill_card', [2.42, 0.6, 0.025], [0, 0, 0.035], this.sensorFillMaterial, 0.035);
    this.scene.add(this.sensorFillCard);

    this.centerSensor = this.createStandaloneSensorModel(1.48);
    this.centerSensor.name = 'center_revealed_sensor';
    this.centerSensor.position.set(-0.82, 0, 0.09);
    this.centerSensor.rotation.set(Math.PI / 2, 0, 0);
    this.centerSensor.userData['fieldPosition'] = new THREE.Vector3(-3.7, -1.62, 0.02);
    this.centerSensor.userData['fieldRotation'] = new THREE.Euler(Math.PI / 2.12, -0.42, -0.26);
    this.centerSensor.userData['fallRotation'] = new THREE.Euler(Math.PI / 2.12 + 2.4, -0.42 - 1.8, -0.26 + 2.8);
    this.centerSensor.userData['fieldScale'] = 0.34;
    this.centerSensor.userData['fallY'] = -3.15;
    this.centerSensor.visible = true;
    this.centerSensorMaterials = this.collectMaterials(this.centerSensor);
    this.setMaterialsOpacity(this.centerSensorMaterials, 0);
    this.scene.add(this.centerSensor);

    this.sensorField = new THREE.Group();
    this.sensorField.name = 'sensor_field';
    const compact = this.getViewportSize().width < 760;
    const columns = compact ? 6 : 11;
    const rows = compact ? 6 : 7;
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        if (row === 0 && column === 0) continue;

        const sensor = this.createStandaloneSensorModel(compact ? 0.28 : 0.34);
        const x = (column - (columns - 1) / 2) * (compact ? 0.7 : 0.74);
        const y = (row - (rows - 1) / 2) * (compact ? 0.5 : 0.54);
        sensor.position.set(x, y, -0.04 + Math.random() * 0.08);
        const faceForward = Math.random() > 0.52;
        sensor.rotation.set(
          faceForward ? Math.PI / 2 + (Math.random() - 0.5) * 0.5 : (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 1.35,
          (Math.random() - 0.5) * 0.7,
        );
        sensor.userData['baseRotation'] = sensor.rotation.clone();
        sensor.userData['fallRotation'] = new THREE.Euler(
          sensor.rotation.x + (Math.random() - 0.5) * 4.6,
          sensor.rotation.y + (Math.random() - 0.5) * 5.2,
          sensor.rotation.z + (Math.random() - 0.5) * 4.8,
        );
        sensor.userData['startY'] = y;
        sensor.userData['fallY'] = -2.9 - Math.random() * 0.9;
        const sensorMaterials = this.collectMaterials(sensor);
        this.setMaterialsOpacity(sensorMaterials, 0);
        this.sensorFieldMaterialGroups.push(sensorMaterials);
        this.sensorFieldItems.push(sensor);
        this.sensorField.add(sensor);
      }
    }
    this.sensorField.visible = true;
    this.sensorFieldMaterials = this.collectMaterials(this.sensorField);
    this.scene.add(this.sensorField);
  }

  private createSensorStarTargets(count: number): Float32Array {
    const positions = new Float32Array(count * 3);
    const width = 2.42;
    const height = 0.58;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    for (let i = 0; i < count; i++) {
      const index = i * 3;
      const isOutline = i < count * 0.08;
      let x = 0;
      let y = 0;

      if (isOutline) {
        const edge = Math.floor(Math.random() * 4);
        if (edge === 0) {
          x = -halfWidth + Math.random() * width;
          y = -halfHeight;
        } else if (edge === 1) {
          x = -halfWidth + Math.random() * width;
          y = halfHeight;
        } else if (edge === 2) {
          x = -halfWidth;
          y = -halfHeight + Math.random() * height;
        } else {
          x = halfWidth;
          y = -halfHeight + Math.random() * height;
        }
      } else {
        x = (Math.random() - 0.5) * width * 0.96;
        y = (Math.random() - 0.5) * height * 0.86;
      }

      const sampleDot = i % 31 === 0;
      if (sampleDot) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 0.1;
        x = 0.34 + Math.cos(angle) * radius;
        y = Math.sin(angle) * radius;
      }

      positions[index] = x;
      positions[index + 1] = y;
      positions[index + 2] = (Math.random() - 0.5) * 0.02;
    }

    return positions;
  }

  private createStandaloneSensorModel(scale: number): THREE.Group {
    const white = this.createTransparentMaterial('#f7f1df', 0.38, 0.08);
    const charcoal = this.createTransparentMaterial('#20262b', 0.52, 0.06);
    const blue = this.createTransparentMaterial('#1d8bb2', 0.28, 0.06);
    const group = this.createSensorGroup({ white, charcoal, blue });
    group.scale.setScalar(scale);
    return group;
  }

  private createTransparentMaterial(color: string, roughness: number, metalness: number): THREE.MeshStandardMaterial {
    const material = this.createMaterial(color, roughness, metalness);
    material.transparent = true;
    material.depthWrite = false;
    material.depthTest = true;
    material.side = THREE.DoubleSide;
    return material;
  }

  private collectMaterials(root: THREE.Object3D): THREE.Material[] {
    const materials = new Set<THREE.Material>();
    root.traverse((object) => {
      const mesh = object as THREE.Mesh;
      const meshMaterial = mesh.material;
      if (!meshMaterial) return;
      if (Array.isArray(meshMaterial)) {
        meshMaterial.forEach((material) => materials.add(material));
      } else {
        materials.add(meshMaterial);
      }
    });
    return Array.from(materials);
  }

  private setMaterialsOpacity(materials: THREE.Material[], opacity: number): void {
    materials.forEach((material) => {
      material.transparent = opacity < 1;
      material.opacity = opacity;
      material.depthWrite = opacity >= 1;
      material.depthTest = true;
      material.needsUpdate = true;
    });
  }

  private setReaderOpacity(opacity: number): void {
    const isSolid = opacity >= 0.999;
    const isHidden = opacity <= 0.001;

    this.readerMaterials.forEach((material) => {
      material.opacity = opacity;
      material.transparent = !isSolid;
      material.depthWrite = isSolid;
      material.depthTest = true;
      material.visible = !isHidden;
      material.needsUpdate = true;
    });
  }

  private prepareMaterialsForReveal(materials: THREE.Material[]): void {
    materials.forEach((material) => {
      material.transparent = true;
      material.depthWrite = true;
      material.depthTest = true;
      material.needsUpdate = true;
    });
  }

  private lockSensorFieldOpacity(): void {
    this.sensorFieldMaterials.forEach((material) => {
      material.transparent = false;
      material.opacity = 1;
      material.depthWrite = true;
      material.depthTest = true;
      material.needsUpdate = true;
    });
  }

  private setDnaOpacity(opacity: number): void {
    this.dnaMaterials.forEach((material) => {
      material.transparent = true;
      material.opacity = opacity;
      material.depthWrite = false;
      material.needsUpdate = true;
    });
    this.isDnaSolid = false;
  }

  private solidifyDnaMaterials(): void {
    if (this.isDnaSolid) return;

    this.dnaMaterials.forEach((material) => {
      material.opacity = 1;
      material.transparent = false;
      material.depthWrite = true;
      material.needsUpdate = true;
    });
    this.isDnaSolid = true;
  }

  private softenDnaMaterials(): void {
    if (!this.isDnaSolid) return;

    this.dnaMaterials.forEach((material) => {
      material.transparent = true;
      material.depthWrite = false;
      material.needsUpdate = true;
    });
    this.isDnaSolid = false;
  }

  private cylinderBetween(
    start: THREE.Vector3,
    end: THREE.Vector3,
    radius: number,
    material: THREE.Material,
  ): THREE.Mesh {
    const direction = new THREE.Vector3().subVectors(end, start);
    const length = direction.length();
    const geometry = new THREE.CylinderGeometry(radius, radius, length, 16);
    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.copy(start).add(end).multiplyScalar(0.5);
    cylinder.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    return cylinder;
  }

  private createDropletGeometry(): THREE.BufferGeometry {
    const points = [
      new THREE.Vector2(0, -0.085),
      new THREE.Vector2(0.04, -0.06),
      new THREE.Vector2(0.055, -0.008),
      new THREE.Vector2(0.038, 0.045),
      new THREE.Vector2(0.014, 0.09),
      new THREE.Vector2(0, 0.125),
    ];

    const geometry = new THREE.LatheGeometry(points, 36);
    return geometry;
  }

  private roundedBox(
    name: string,
    size: [number, number, number],
    position: [number, number, number],
    material: THREE.Material,
    radius: number,
  ): THREE.Mesh {
    const geometry = new RoundedBoxGeometry(size[0], size[1], size[2], 10, radius);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;
    mesh.position.set(...position);
    return mesh;
  }

  private createMaterial(color: string, roughness: number, metalness: number): THREE.MeshStandardMaterial {
    return new THREE.MeshStandardMaterial({ color, roughness, metalness });
  }

  private createLogoPlane(): THREE.Mesh {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#ffffff';
      context.font = 'bold 76px Arial';
      context.fillText('trax', 84, 88);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const logo = new THREE.Mesh(new THREE.PlaneGeometry(0.96, 0.24), material);
    logo.name = 'reader_side_logo';
    logo.position.set(-1.04, -0.08, -0.773);
    logo.rotation.set(0, Math.PI, 0);
    return logo;
  }

  private createSensorLabelPlane(): THREE.Mesh {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    if (context) {
      context.fillStyle = '#f9f7ef';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#293039';
      context.font = 'bold 34px Arial';
      context.fillText('SAMPLE', 38, 58);
      context.font = '22px Arial';
      context.fillText('Reader test sensor', 38, 102);
      context.fillText('ID 2048', 38, 140);
      context.fillRect(38, 174, 168, 14);
      context.fillRect(38, 198, 238, 10);
      context.strokeStyle = '#c7c2b8';
      context.lineWidth = 5;
      context.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const label = new THREE.Mesh(new THREE.PlaneGeometry(0.64, 0.32), material);
    label.name = 'sensor_label';
    label.rotation.x = -Math.PI / 2;
    return label;
  }

  private animate(): void {
    this.frameId = requestAnimationFrame(() => this.animate());

    if (this.particles) {
      this.particles.rotation.y += this.isPointerDown ? 0.0014 : 0.0007;
    }

    this.updateSensorConstellation();
    this.updateSensorField();

    if (this.topRotationRig && this.isTopInteractive && !this.isPointerDown) {
      this.topRotationRig.rotation.y += 0.0013;
      this.topRotationRig.rotation.y = this.shortestAngle(this.topRotationRig.rotation.y);
    }

    if (this.dnaGroup) {
      const revealSoftness = this.dnaReveal.blur;
      const revealBlurScale = 1 + revealSoftness * 0.0025;
      this.dnaGroup.scale.setScalar(revealBlurScale * this.dnaDisplayScale);
      this.dnaMaterials.forEach((material) => {
        material.roughness = THREE.MathUtils.clamp(0.22 + revealSoftness * 0.025, 0.22, 0.92);
      });
    }

    if (this.dnaGroup && this.dnaMaterials.every((material) => material.opacity >= 0.98)) {
      this.solidifyDnaMaterials();
    } else {
      this.softenDnaMaterials();
    }

    if (this.dnaGroup && this.isDnaSpinning && this.dnaMaterials.every((material) => material.opacity >= 0.98)) {
      this.dnaGroup.rotation.y += 0.012;
    }

    this.syncScrollTimelineWithNativeScroll();
    this.updateAnalysisOverlay();
    this.renderer.render(this.scene, this.camera);
  }

  private updateSensorConstellation(): void {
    if (
      !this.sensorConstellationGeometry ||
      !this.sensorStarStartPositions ||
      !this.sensorStarTargetPositions ||
      !this.sensorStarFallPositions
    ) {
      return;
    }

    const position = this.sensorConstellationGeometry.getAttribute('position') as THREE.BufferAttribute;
    const values = position.array as Float32Array;
    const shapeEase = gsap.parseEase('power2.inOut')(this.sensorStarMotion.progress);
    const fallEase = gsap.parseEase('power2.in')(this.sensorStarMotion.fall);

    for (let i = 0; i < values.length; i += 3) {
      const shapeX = THREE.MathUtils.lerp(this.sensorStarStartPositions[i], this.sensorStarTargetPositions[i], shapeEase);
      const shapeY = THREE.MathUtils.lerp(this.sensorStarStartPositions[i + 1], this.sensorStarTargetPositions[i + 1], shapeEase);
      const shapeZ = THREE.MathUtils.lerp(this.sensorStarStartPositions[i + 2], this.sensorStarTargetPositions[i + 2], shapeEase);

      values[i] = THREE.MathUtils.lerp(shapeX, this.sensorStarFallPositions[i], fallEase);
      values[i + 1] = THREE.MathUtils.lerp(shapeY, this.sensorStarFallPositions[i + 1], fallEase);
      values[i + 2] = THREE.MathUtils.lerp(shapeZ, this.sensorStarFallPositions[i + 2], fallEase);
    }

    position.needsUpdate = true;
  }

  private updateSensorField(): void {
    this.syncSensorFieldMaterialMode();
    this.updateSensorFieldReveal();

    this.sensorFieldItems.forEach((sensor, index) => {
      if (sensor === this.selectedFieldSensor) return;

      const baseRotation = sensor.userData['baseRotation'] as THREE.Euler | undefined;
      const fallRotation = sensor.userData['fallRotation'] as THREE.Euler | undefined;
      const startY = sensor.userData['startY'] as number | undefined;
      const fallY = sensor.userData['fallY'] as number | undefined;
      const fall = gsap.parseEase('power2.in')(this.sensorStarMotion.fall);

      if (baseRotation && fallRotation) {
        sensor.rotation.set(
          THREE.MathUtils.lerp(baseRotation.x, fallRotation.x, fall),
          THREE.MathUtils.lerp(baseRotation.y, fallRotation.y, fall) + Math.sin(Date.now() * 0.0008 + index) * 0.04 * (1 - fall),
          THREE.MathUtils.lerp(baseRotation.z, fallRotation.z, fall),
        );
      }

      if (typeof startY === 'number' && typeof fallY === 'number') {
        sensor.position.y = THREE.MathUtils.lerp(startY, fallY, fall);
      }
    });

    this.updateCenterSensorFall();
  }

  private updateCenterSensorFall(): void {
    if (!this.centerSensor) return;

    const fieldPosition = this.centerSensor.userData['fieldPosition'] as THREE.Vector3 | undefined;
    const fieldRotation = this.centerSensor.userData['fieldRotation'] as THREE.Euler | undefined;
    const fallRotation = this.centerSensor.userData['fallRotation'] as THREE.Euler | undefined;
    const fallY = this.centerSensor.userData['fallY'] as number | undefined;
    if (!fieldPosition || !fieldRotation || !fallRotation || typeof fallY !== 'number') return;

    const fall = gsap.parseEase('power2.in')(this.sensorStarMotion.fall);
    if (fall <= 0.001) return;

    this.centerSensor.position.x = fieldPosition.x;
    this.centerSensor.position.y = THREE.MathUtils.lerp(fieldPosition.y, fallY, fall);
    this.centerSensor.position.z = fieldPosition.z;
    this.centerSensor.rotation.set(
      THREE.MathUtils.lerp(fieldRotation.x, fallRotation.x, fall),
      THREE.MathUtils.lerp(fieldRotation.y, fallRotation.y, fall),
      THREE.MathUtils.lerp(fieldRotation.z, fallRotation.z, fall),
    );
  }

  private updateSensorFieldReveal(): void {
    const revealCount = this.sensorFieldMaterialGroups.length;
    if (!revealCount) return;

    this.sensorFieldMaterialGroups.forEach((materials, index) => {
      const start = index / revealCount;
      const localProgress = THREE.MathUtils.clamp((this.sensorFieldReveal.progress - start) * 8.5, 0, 1);
      const opacity = gsap.parseEase('power2.out')(localProgress);
      materials.forEach((material) => {
        if (this.sensorFieldIsOpaque) return;
        material.transparent = opacity < 0.999;
        material.opacity = opacity;
        material.depthWrite = opacity > 0.02;
        material.depthTest = true;
        material.needsUpdate = true;
      });
    });
  }

  private syncSensorFieldMaterialMode(): void {
    const shouldBeOpaque = this.sensorStarMotion.fall > 0.01;
    if (shouldBeOpaque === this.sensorFieldIsOpaque) return;

    this.sensorFieldIsOpaque = shouldBeOpaque;
    [...this.sensorFieldMaterials, ...this.centerSensorMaterials].forEach((material) => {
      material.transparent = !shouldBeOpaque;
      material.depthWrite = shouldBeOpaque || material.opacity > 0.02;
      material.depthTest = true;
      material.needsUpdate = true;
    });
  }

  private updateAnalysisOverlay(): void {
    if (!this.topRotationRig || !this.dnaGroup || !this.camera || !this.renderer) return;

    const overlay = this.analysisOverlay.nativeElement;
    const connectionLine = this.connectionLine.nativeElement;
    const circle = this.confirmationCircle.nativeElement;
    const check = this.confirmationCheck.nativeElement;
    const viewport = this.getViewportSize();
    const opacity = this.confirmation.opacity;

    overlay.setAttribute('viewBox', `0 0 ${viewport.width} ${viewport.height}`);

    if (opacity <= 0.001) {
      connectionLine.style.opacity = '0';
      circle.style.opacity = '0';
      check.style.opacity = '0';
      return;
    }

    this.scene.updateMatrixWorld(true);

    const readerWorld = new THREE.Vector3();
    const dnaWorld = new THREE.Vector3();
    this.topRotationRig.getWorldPosition(readerWorld);
    this.dnaGroup.getWorldPosition(dnaWorld);

    const readerPoint = this.projectWorldToScreen(readerWorld);
    const dnaPoint = this.projectWorldToScreen(dnaWorld);
    const direction = dnaPoint.x >= readerPoint.x ? 1 : -1;
    const gap = Math.max(1, Math.abs(dnaPoint.x - readerPoint.x));
    const viewportBase = Math.min(viewport.width, viewport.height);
    const lineY = readerPoint.y + (dnaPoint.y - readerPoint.y) * 0.5;
    const readerClearance = THREE.MathUtils.clamp(viewportBase * 0.16, 70, 180);
    const dnaClearance = THREE.MathUtils.clamp(viewportBase * 0.15, 66, 170);
    const rawStartX = readerPoint.x + direction * readerClearance;
    const rawEndX = dnaPoint.x - direction * dnaClearance;
    const hasUsableGap = direction * (rawEndX - rawStartX) > 28;
    const fallbackHalfLength = Math.min(gap * 0.22, viewportBase * 0.1);
    const fallbackCenter = readerPoint.x + (dnaPoint.x - readerPoint.x) * 0.5;
    const start = {
      x: hasUsableGap ? rawStartX : fallbackCenter - direction * fallbackHalfLength,
      y: lineY,
    };
    const end = {
      x: hasUsableGap ? rawEndX : fallbackCenter + direction * fallbackHalfLength,
      y: lineY,
    };
    const mid = {
      x: start.x + (end.x - start.x) * 0.5,
      y: lineY,
    };
    const lineLength = Math.abs(end.x - start.x);
    const responsiveRadius = THREE.MathUtils.clamp(viewportBase * 0.052, 26, 52);
    const checkRadius = Math.min(responsiveRadius, lineLength * 0.24);
    const connectionStroke = THREE.MathUtils.clamp(viewportBase * 0.0036, 1.6, 2.4);
    const circleStroke = THREE.MathUtils.clamp(viewportBase * 0.0062, 2.4, 4.4);
    const checkStroke = THREE.MathUtils.clamp(viewportBase * 0.0072, 2.8, 5.2);
    const checkCenter = {
      x: mid.x,
      y: mid.y - checkRadius * 1.8,
    };

    connectionLine.setAttribute('d', `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} L ${end.x.toFixed(1)} ${end.y.toFixed(1)}`);
    connectionLine.setAttribute('stroke-width', connectionStroke.toFixed(2));
    connectionLine.style.opacity = `${opacity}`;
    connectionLine.style.strokeDasharray = '1';
    connectionLine.style.strokeDashoffset = `${1 - this.confirmation.line}`;

    circle.setAttribute('cx', checkCenter.x.toFixed(1));
    circle.setAttribute('cy', checkCenter.y.toFixed(1));
    circle.setAttribute('r', checkRadius.toFixed(1));
    circle.setAttribute('stroke-width', circleStroke.toFixed(2));
    circle.style.opacity = `${opacity}`;
    circle.style.strokeDasharray = '1';
    circle.style.strokeDashoffset = `${1 - this.confirmation.circle}`;

    const checkStartX = checkCenter.x - checkRadius * 0.38;
    const checkStartY = checkCenter.y - checkRadius * 0.02;
    const checkMidX = checkCenter.x - checkRadius * 0.08;
    const checkMidY = checkCenter.y + checkRadius * 0.28;
    const checkEndX = checkCenter.x + checkRadius * 0.42;
    const checkEndY = checkCenter.y - checkRadius * 0.32;
    check.setAttribute(
      'd',
      `M ${checkStartX.toFixed(1)} ${checkStartY.toFixed(1)} L ${checkMidX.toFixed(1)} ${checkMidY.toFixed(1)} L ${checkEndX.toFixed(1)} ${checkEndY.toFixed(1)}`,
    );
    check.setAttribute('stroke-width', checkStroke.toFixed(2));
    check.style.opacity = `${opacity}`;
    check.style.strokeDasharray = '1';
    check.style.strokeDashoffset = `${1 - this.confirmation.check}`;
  }

  private projectWorldToScreen(point: THREE.Vector3): { x: number; y: number } {
    const viewport = this.getViewportSize();
    const projected = point.clone().project(this.camera);

    return {
      x: (projected.x * 0.5 + 0.5) * viewport.width,
      y: (-projected.y * 0.5 + 0.5) * viewport.height,
    };
  }


  private onPointerDown(event: PointerEvent): void {
    if (!this.topRotationRig) return;

    if (!this.isTopInteractive) {
      this.trySelectSensorFieldItem(event);
      return;
    }

    this.topRotationRig.rotation.y = this.shortestAngle(this.topRotationRig.rotation.y);
    this.isPointerDown = true;
    this.pointerStart.set(event.clientX, event.clientY);
    this.dragStartRotation.copy(this.topRotationRig.rotation);
    this.renderer.domElement.setPointerCapture(event.pointerId);
    this.renderer.domElement.style.cursor = 'grabbing';
    this.canvasHost.nativeElement.style.cursor = 'grabbing';
    this.hero.nativeElement.style.cursor = 'grabbing';
  }

  private onPointerMove(event: PointerEvent): void {
    if (this.selectedFieldSensor) {
      const dx = event.clientX - this.pointerStart.x;
      const dy = event.clientY - this.pointerStart.y;
      this.selectedFieldSensor.rotation.y = this.dragStartRotation.y + dx * 0.012;
      this.selectedFieldSensor.rotation.x = this.dragStartRotation.x + dy * 0.008;
      this.selectedFieldSensor.rotation.z = this.dragStartRotation.z + dx * 0.003;
      return;
    }

    if (!this.topRotationRig || !this.isPointerDown || !this.isTopInteractive) return;

    const dx = event.clientX - this.pointerStart.x;
    const dy = event.clientY - this.pointerStart.y;
    this.topRotationRig.rotation.y = this.dragStartRotation.y + dx * 0.008;
    this.topRotationRig.rotation.x = THREE.MathUtils.clamp(
      this.dragStartRotation.x + dy * 0.004,
      -0.35,
      0.55,
    );

    if (this.particles) {
      this.particles.rotation.y += dx * 0.000002;
      this.particles.rotation.x += dy * 0.000001;
    }
  }

  private onPointerUp(): void {
    if (!this.isPointerDown) return;

    this.isPointerDown = false;
    this.selectedFieldSensor = undefined;
    this.setInteractionCursor(this.isTopInteractive ? 'grab' : 'default');

    if (!this.model || !this.topRotationRig || !this.isTopInteractive) return;

    this.topRotationRig.rotation.y = this.shortestAngle(this.topRotationRig.rotation.y);
    gsap.to(this.topRotationRig.position, {
      x: this.getInitialModelPosition().x,
      y: this.getInitialModelPosition().y,
      z: this.getInitialModelPosition().z,
      duration: 0.75,
      ease: 'power3.out',
    });
    gsap.to(this.topRotationRig.rotation, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.75,
      ease: 'power3.out',
    });
  }

  private trySelectSensorFieldItem(event: PointerEvent): void {
    if (!this.sensorField || !this.sensorFieldItems.length || this.sensorStarMotion.fall > 0.02) return;

    const materialOpacity = this.sensorFieldMaterials[0]?.opacity ?? 0;
    if (materialOpacity < 0.2) return;

    const viewport = this.getViewportSize();
    const pointer = new THREE.Vector2(
      (event.clientX / viewport.width) * 2 - 1,
      -(event.clientY / viewport.height) * 2 + 1,
    );
    this.raycaster.setFromCamera(pointer, this.camera);

    const intersections = this.raycaster.intersectObjects(this.sensorFieldItems, true);
    const hit = intersections[0]?.object;
    if (!hit) return;

    let root: THREE.Object3D | null = hit;
    while (root?.parent && root.parent !== this.sensorField) {
      root = root.parent;
    }

    if (!root || root.parent !== this.sensorField) return;

    this.selectedFieldSensor = root as THREE.Group;
    this.isPointerDown = true;
    this.pointerStart.set(event.clientX, event.clientY);
    this.dragStartRotation.copy(this.selectedFieldSensor.rotation);
    this.renderer.domElement.setPointerCapture(event.pointerId);
    this.setInteractionCursor('grabbing');
  }

  private syncInteractionMode(): void {
    const isAtTop = window.scrollY <= 2;
    this.isTopInteractive = isAtTop;
    this.setInteractionCursor(isAtTop ? 'grab' : 'default');
    if (!isAtTop) this.disableTopInteraction();
  }

  private enableTopInteraction(): void {
    if (window.scrollY > 2) return;
    this.scrollStartRigRotation = undefined;
    this.isTopInteractive = true;
    this.setInteractionCursor('grab');
  }

  private disableTopInteraction(): void {
    this.isTopInteractive = false;
    this.isPointerDown = false;
    this.setInteractionCursor('default');
  }

  private setInteractionCursor(cursor: 'grab' | 'grabbing' | 'default'): void {
    this.renderer.domElement.style.cursor = cursor;
    this.canvasHost.nativeElement.style.cursor = cursor;
    this.hero.nativeElement.style.cursor = cursor;
  }

  private vectorTweenDynamic(getVector: () => THREE.Vector3, duration: number): gsap.TweenVars {
    return {
      x: () => getVector().x,
      y: () => getVector().y,
      z: () => getVector().z,
      duration,
    };
  }

  private syncScrollHandoffRotation(progress: number): void {
    if (!this.topRotationRig) return;

    if (progress <= 0.001) {
      this.scrollStartRigRotation = undefined;
      this.scrollHandoff.x = 0;
      this.scrollHandoff.y = 0;
      this.scrollHandoff.z = 0;
      return;
    }

    if (!this.scrollStartRigRotation) {
      const compactY = this.shortestAngle(this.topRotationRig.rotation.y);
      this.topRotationRig.rotation.y = compactY;
      this.scrollStartRigRotation = new THREE.Euler(
        this.topRotationRig.rotation.x,
        compactY,
        this.topRotationRig.rotation.z,
      );
      this.scrollHandoff.x = this.scrollStartRigRotation.x;
      this.scrollHandoff.y = compactY;
      this.scrollHandoff.z = this.scrollStartRigRotation.z;
    }

    if (this.isTopInteractive) return;

    const settleProgress = THREE.MathUtils.clamp(progress / 0.34, 0, 1);
    const remaining = 1 - gsap.parseEase('power2.out')(settleProgress);
    this.scrollHandoff.x = this.scrollStartRigRotation.x * remaining;
    this.scrollHandoff.y = this.scrollStartRigRotation.y * remaining;
    this.scrollHandoff.z = this.scrollStartRigRotation.z * remaining;
    this.topRotationRig.rotation.set(this.scrollHandoff.x, this.scrollHandoff.y, this.scrollHandoff.z);
  }

  private syncScrollTimelineWithNativeScroll(): void {
    if (!this.scrollTimeline || !this.scrollTriggerInstance) return;

    const start = this.scrollTriggerInstance.start;
    const end = this.scrollTriggerInstance.end;
    this.scrollProgressTarget = end > start ? THREE.MathUtils.clamp((window.scrollY - start) / (end - start), 0, 1) : 0;

    const distance = this.scrollProgressTarget - this.scrollProgressCurrent;
    const smoothing = Math.abs(distance) > 0.08 ? 0.2 : 0.115;
    this.scrollProgressCurrent += distance * smoothing;

    if (Math.abs(distance) < 0.00008) {
      this.scrollProgressCurrent = this.scrollProgressTarget;
    }

    const visualProgress = THREE.MathUtils.clamp(this.scrollProgressCurrent, 0, 1);
    this.scrollTimeline.progress(visualProgress);
    this.hero.nativeElement.style.setProperty('--scroll-progress', visualProgress.toFixed(4));

    if (this.scrollProgressTarget > 0.001) {
      this.disableTopInteraction();
    } else {
      this.enableTopInteraction();
    }

    this.syncScrollHandoffRotation(visualProgress);
  }

  private shortestAngle(angle: number): number {
    return Math.atan2(Math.sin(angle), Math.cos(angle));
  }

  private onResize(): void {
    const viewport = this.getViewportSize();
    this.camera.aspect = viewport.width / viewport.height;
    this.camera.position.z = viewport.width < 900 ? 7.65 : 6.7;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(this.getRenderPixelRatio());
    this.renderer.setSize(viewport.width, viewport.height, false);
    if (this.topRotationRig && window.scrollY <= 2) {
      this.topRotationRig.position.copy(this.getInitialModelPosition());
    }
    if (this.dnaGroup) {
      this.dnaGroup.position.copy(this.getDnaModelPosition());
    }
    window.clearTimeout(this.resizeRefreshId);
    this.resizeRefreshId = window.setTimeout(() => {
      ScrollTrigger.refresh(true);
      ScrollTrigger.update();
    }, 120);
  }

  private getRenderPixelRatio(): number {
    return Math.min(window.devicePixelRatio, window.innerWidth < 900 ? 1 : 1.5);
  }

  private getViewportSize(): { width: number; height: number } {
    return {
      width: Math.max(320, Math.round(window.visualViewport?.width ?? window.innerWidth)),
      height: Math.max(480, Math.round(window.visualViewport?.height ?? window.innerHeight)),
    };
  }

  private getInitialModelPosition(): THREE.Vector3 {
    const width = this.getViewportSize().width;
    if (width < 760) return new THREE.Vector3(1.55, -0.18, 0);
    if (width < 1100) return new THREE.Vector3(1.42, -0.12, 0);
    if (width < 1400) return new THREE.Vector3(1.05, -0.08, 0);
    return this.initialModelPosition;
  }

  private getScrollModelPosition(): THREE.Vector3 {
    const width = this.getViewportSize().width;
    if (width < 760) return new THREE.Vector3(1.22, -0.14, 0);
    if (width < 1100) return new THREE.Vector3(1.2, -0.12, 0);
    if (width < 1400) return new THREE.Vector3(0.9, -0.1, 0);
    return this.scrollModelPosition;
  }

  private getAnalysisModelPosition(): THREE.Vector3 {
    const width = this.getViewportSize().width;
    if (width < 760) return new THREE.Vector3(-0.74, -0.1, 0);
    if (width < 1100) return new THREE.Vector3(-0.72, -0.08, 0);
    if (width < 1400) return new THREE.Vector3(-0.78, -0.06, 0);
    return new THREE.Vector3(-0.9, -0.04, 0);
  }

  private getAnalysisModelScale(): number {
    const width = this.getViewportSize().width;
    if (width < 760) return 0.52;
    if (width < 1100) return 0.56;
    return 0.62;
  }

  private getDnaModelPosition(): THREE.Vector3 {
    const width = this.getViewportSize().width;
    if (width < 760) return new THREE.Vector3(0.72, 0, 0);
    if (width < 1100) return new THREE.Vector3(0.88, 0, 0);
    if (width < 1400) return new THREE.Vector3(0.96, 0, 0);
    return new THREE.Vector3(1.08, 0, 0);
  }

  private getDeviceFrame(kind: 'desktop' | 'laptop' | 'tablet' | 'phone'): { width: string; height: string } {
    const viewport = this.getViewportSize();
    const compact = viewport.width < 760;
    const short = viewport.height < 680;

    if (kind === 'desktop') {
      return {
        width: compact ? '82vw' : '54vw',
        height: short ? '64vh' : '70vh',
      };
    }

    if (kind === 'laptop') {
      return {
        width: compact ? '74vw' : '46vw',
        height: short ? '50vh' : '54vh',
      };
    }

    if (kind === 'tablet') {
      return {
        width: compact ? '42vw' : '26vw',
        height: short ? '62vh' : '66vh',
      };
    }

    return {
      width: compact ? '29vw' : '17vw',
      height: short ? '54vh' : '58vh',
    };
  }

  private getDeviceModelPosition(kind: 'desktop' | 'laptop' | 'tablet' | 'phone'): THREE.Vector3 {
    const width = this.getViewportSize().width;
    const compactOffset = width < 760 ? 0.02 : 0;
    const positions = {
      desktop: new THREE.Vector3(-0.18 + compactOffset, -0.04, 0),
      laptop: new THREE.Vector3(-0.18 + compactOffset, 0.02, 0),
      tablet: new THREE.Vector3(-0.06 + compactOffset, 0.07, 0),
      phone: new THREE.Vector3(-0.05 + compactOffset, 0.09, 0),
    };

    return positions[kind];
  }

  private getDeviceModelRotation(kind: 'desktop' | 'laptop' | 'tablet' | 'phone'): THREE.Euler {
    if (kind === 'tablet' || kind === 'phone') {
      return new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
    }

    return this.initialModelRotation;
  }

  private getDeviceDnaPosition(kind: 'desktop' | 'laptop' | 'tablet' | 'phone'): THREE.Vector3 {
    const width = this.getViewportSize().width;
    const compactOffset = width < 760 ? 0.06 : 0;
    const positions = {
      desktop: new THREE.Vector3(0.88 + compactOffset, 0, 0),
      laptop: new THREE.Vector3(0.64 + compactOffset, 0, 0),
      tablet: new THREE.Vector3(0.38 + compactOffset, 0, 0),
      phone: new THREE.Vector3(0.2 + compactOffset, 0, 0),
    };

    return positions[kind];
  }

  private getDeviceModelScale(kind: 'desktop' | 'laptop' | 'tablet' | 'phone'): number {
    const compact = this.getViewportSize().width < 760;
    const base = compact ? 0.84 : 1;
    const scales = {
      desktop: 0.58 * base,
      laptop: 0.48 * base,
      tablet: 0.34 * base,
      phone: 0.24 * base,
    };

    return scales[kind];
  }

  private getDeviceDnaScale(kind: 'desktop' | 'laptop' | 'tablet' | 'phone'): number {
    const compact = this.getViewportSize().width < 760;
    const base = compact ? 0.9 : 1;
    const scales = {
      desktop: 0.76 * base,
      laptop: 0.62 * base,
      tablet: 0.48 * base,
      phone: 0.36 * base,
    };

    return scales[kind];
  }
}
