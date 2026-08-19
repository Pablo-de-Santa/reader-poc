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
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
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
  @ViewChild('captureFade', { static: true }) private captureFade!: ElementRef<HTMLDivElement>;
  @ViewChild('readerCopy', { static: true }) private readerCopy!: ElementRef<HTMLElement>;
  @ViewChild('sampleCopy', { static: true }) private sampleCopy!: ElementRef<HTMLElement>;
  @ViewChild('deviceStage', { static: true }) private deviceStage!: ElementRef<HTMLElement>;
  @ViewChild('sensorCta', { static: true }) private sensorCta!: ElementRef<HTMLElement>;
  @ViewChild('analysisOverlay', { static: true }) private analysisOverlay!: ElementRef<SVGSVGElement>;
  @ViewChild('connectionLine', { static: true }) private connectionLine!: ElementRef<SVGPathElement>;
  @ViewChild('confirmationCircle', { static: true }) private confirmationCircle!: ElementRef<SVGCircleElement>;
  @ViewChild('confirmationCheck', { static: true }) private confirmationCheck!: ElementRef<SVGPathElement>;
  @ViewChildren('phrase') private phraseElements!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('sampleFluid') private sampleFluidElements!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('instructionFluid') private instructionFluidElements!: QueryList<ElementRef<HTMLElement>>;

  readonly phrases = [
    'Healthier Lives',
  ];

  readonly sampleFluids = ['Whole blood', 'Serum', 'Urine', 'Saliva', 'Water', 'Most liquids'];

  private readonly initialModelPosition = new THREE.Vector3(0.7, -0.05, 0);
  private readonly initialModelRotation = new THREE.Euler(0.26, -0.48, 0);
  private readonly scrollModelPosition = new THREE.Vector3(0, -0.08, 0);
  private readonly scrollModelRotation = new THREE.Euler(0.36, -0.08, 0);
  private readonly cartridgeInsertedX = 1.6;
  private readonly cartridgePulledX = 2.48;
  private readonly cartridgeSlotY = 0.14;
  private readonly cartridgeSlotZ = 0.015;
  private readonly cartridgeLengthScale = 1.4;
  private readonly cartridgeWidthScale = 1.7;
  private readonly cartridgeHeightScale = 1.6;
  // Shared sample-well target for the pipette and droplet on Cartridge Base_V2.
  private readonly cartridgeSampleX = 0.60;
  private readonly cartridgeSampleZ = 0.15;
  private readonly sampleDropPairCenterX = -0.72;
  private readonly scrollSpinBackProgress = 0.055;
  private readonly centerSensorDisplayRotation = new THREE.Euler(Math.PI / 2 - 0.4, 0.5, 0);

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private nebulaBackground?: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private nebulaUniforms?: {
    uProgress: { value: number };
    uTime: { value: number };
    uAspect: { value: number };
  };
  private topLight?: THREE.SpotLight;
  private frontFill?: THREE.DirectionalLight;
  private frameId = 0;
  private scrollTimeline?: gsap.core.Timeline;
  private scrollTriggerInstance?: ScrollTrigger;
  private phraseTimeline?: gsap.core.Timeline;
  private openingOrientationTimeline?: gsap.core.Timeline;
  private topRotationRig?: THREE.Group;
  private model?: THREE.Group;
  private readerFallbackParts: THREE.Object3D[] = [];
  private readerMaterials: THREE.Material[] = [];
  private readerFade = { opacity: 1 };
  private optimizedCartridgeTemplate?: THREE.Group;
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
  private centerSensorReveal = { opacity: 0 };
  private sensorMessage?: THREE.Points;
  private sensorMessageGeometry?: THREE.BufferGeometry;
  private sensorMessageMaterial?: THREE.PointsMaterial;
  private sensorMessageTextMaterial?: THREE.MeshBasicMaterial;
  private sensorMessageStartPositions?: Float32Array;
  private sensorMessageTargetPositions?: Float32Array;
  private sensorMessageMotion = { progress: 0 };
  private sensorFieldReveal = { progress: 0 };
  private sensorFillCard?: THREE.Mesh;
  private sensorFillMaterial?: THREE.MeshStandardMaterial;
  private centerSensor?: THREE.Group;
  private centerSensorMaterials: THREE.Material[] = [];
  private sensorField?: THREE.Group;
  private sensorFieldItems: THREE.Group[] = [];
  private sensorFieldMaterialGroups: THREE.Material[][] = [];
  private sensorFieldRevealStarts: number[] = [];
  private sensorFieldMaterials: THREE.Material[] = [];
  private sensorFieldIsOpaque = false;
  private scrollProgressCurrent = 0;
  private scrollProgressTarget = 0;
  private readonly scrollFollowStrength = 0.22;
  private readonly scrollSnapThreshold = 0.00028;
  private readonly scrollMaxLag = 0.032;
  private scrollHandoff = { x: 0, y: 0, z: 0 };
  private isPointerDown = false;
  private isTopInteractive = true;
  private resizeRefreshId = 0;
  private initialScrollResetId = 0;
  private captureFrameId = 0;
  private captureTimeoutIds: number[] = [];
  private resizeObserver?: ResizeObserver;
  private pointerStart = new THREE.Vector2();
  private dragStartRotation = new THREE.Euler();
  private scrollStartRigRotation?: THREE.Euler;
  private raycaster = new THREE.Raycaster();
  private selectedFieldSensor?: THREE.Group;
  private resizeHandler = () => this.onResize();
  private scrollHandler = () => this.syncInteractionMode();
  private pageShowHandler = () => this.resetScrollPosition();
  private pointerDownHandler = (event: PointerEvent) => this.onPointerDown(event);
  private pointerMoveHandler = (event: PointerEvent) => this.onPointerMove(event);
  private pointerUpHandler = () => this.onPointerUp();

  ngAfterViewInit(): void {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    this.resetScrollPosition();
    ScrollTrigger.normalizeScroll(true);

    this.initScene();
    // The banner video should stay clean against the family background.
    // Keep the particle factory available for a future interactive treatment, but do not add it here.
    this.createReaderModel();
    this.createPipetteAndDroplet();
    this.createSensorConstellationScene();
    this.createSensorMessageScene();
    this.buildScrollAnimation();
    this.setupPhraseAnimation();
    this.animate();
    window.addEventListener('pageshow', this.pageShowHandler);
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.renderer.domElement.addEventListener('pointerdown', this.pointerDownHandler);
    window.addEventListener('pointermove', this.pointerMoveHandler);
    window.addEventListener('pointerup', this.pointerUpHandler);
    this.syncInteractionMode();
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(this.hero.nativeElement);
    this.resizeObserver.observe(this.canvasHost.nativeElement);
    requestAnimationFrame(() => {
      this.resetScrollPosition();
      this.onResize();
      this.syncInteractionMode();
      ScrollTrigger.refresh();
      this.runOpeningOrientationAnimation();
    });
    this.initialScrollResetId = window.setTimeout(() => this.resetScrollPosition(), 90);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
    cancelAnimationFrame(this.captureFrameId);
    this.captureTimeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    window.clearTimeout(this.resizeRefreshId);
    window.clearTimeout(this.initialScrollResetId);
    this.resizeObserver?.disconnect();
    window.removeEventListener('pageshow', this.pageShowHandler);
    window.removeEventListener('resize', this.resizeHandler);
    window.removeEventListener('scroll', this.scrollHandler);
    this.renderer?.domElement.removeEventListener('pointerdown', this.pointerDownHandler);
    window.removeEventListener('pointermove', this.pointerMoveHandler);
    window.removeEventListener('pointerup', this.pointerUpHandler);
    this.scrollTriggerInstance?.kill();
    this.scrollTimeline?.kill();
    this.phraseTimeline?.kill();
    this.openingOrientationTimeline?.kill();
    ScrollTrigger.normalizeScroll(false);
    this.renderer?.dispose();
  }

  private resetScrollPosition(): void {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    this.scrollProgressCurrent = 0;
    this.scrollProgressTarget = 0;
    this.scrollTimeline?.progress(0);
    this.hero?.nativeElement.style.setProperty('--scroll-progress', '0');
    if (this.nebulaUniforms) {
      this.nebulaUniforms.uProgress.value = 0;
    }
  }

  private initScene(): void {
    const host = this.canvasHost.nativeElement;

    this.scene = new THREE.Scene();

    const viewport = this.getViewportSize();
    this.camera = new THREE.PerspectiveCamera(34, viewport.width / viewport.height, 0.1, 100);
    this.camera.position.set(0, 0.72, 6.7);
    this.camera.lookAt(0, 0, 0);
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0x000000, 0);
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

    // The banner uses the family photo as its complete background. A nebula
    // plane here would tint and darken that image, so keep it out of this scene.
    this.scene.add(new THREE.AmbientLight('#ffffff', 0.16));

    const topLight = new THREE.SpotLight('#f4e5c4', 82, 15, Math.PI / 6.5, 0.52, 1.25);
    topLight.position.set(0, 5.6, 2.6);
    topLight.target.position.set(0, 0, 0);
    this.topLight = topLight;
    this.scene.add(topLight, topLight.target);

    const rimLight = new THREE.DirectionalLight('#9fb1ff', 1.08);
    rimLight.position.set(-3, 2, -4);
    this.scene.add(rimLight);

    const frontFill = new THREE.DirectionalLight('#ffffff', 0.48);
    frontFill.position.set(4, 1, 4);
    this.frontFill = frontFill;
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
      size: 0.014,
      transparent: true,
      opacity: 0.74,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    particles.name = 'dust_particles';
    this.particles = particles;
    this.scene.add(particles);
  }

  private runOpeningOrientationAnimation(): void {
    if (!this.model || !this.topRotationRig || window.scrollY > 2) return;

    this.openingOrientationTimeline?.kill();

    const endPosition = this.getInitialModelPosition();
    const endScale = this.getInitialModelScale();
    const endRotation = this.getInitialModelRotation();
    const startPosition = endPosition.clone().add(new THREE.Vector3(-0.16, 0.08, 0));
    const startScale = endScale * 1.18;

    this.topRotationRig.position.copy(startPosition);
    this.topRotationRig.scale.setScalar(startScale);
    this.topRotationRig.rotation.set(0, 0, 0);
    this.model.rotation.set(0.48, -1.42, -0.08);

    this.openingOrientationTimeline = gsap
      .timeline({
        defaults: { ease: 'power2.inOut' },
        onComplete: () => {
          this.model?.rotation.copy(endRotation);
          this.topRotationRig?.position.copy(endPosition);
          this.topRotationRig?.scale.setScalar(endScale);
          this.syncInteractionMode();
        },
      })
      .to(this.model.rotation, { x: endRotation.x, y: endRotation.y, z: endRotation.z, duration: 1.18 }, 0)
      .to(this.topRotationRig.position, { x: endPosition.x, y: endPosition.y, z: endPosition.z, duration: 1.18 }, 0)
      .to(this.topRotationRig.scale, { x: endScale, y: endScale, z: endScale, duration: 1.18 }, 0);
  }

  private createNebulaBackground(): void {
    const viewport = this.getViewportSize();
    this.nebulaUniforms = {
      uProgress: { value: 0 },
      uTime: { value: 0 },
      uAspect: { value: viewport.width / viewport.height },
    };

    const material = new THREE.ShaderMaterial({
      uniforms: this.nebulaUniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        uniform float uProgress;
        uniform float uTime;
        uniform float uAspect;
        varying vec2 vUv;

        float softBlob(vec2 uv, vec2 center, vec2 radius, float rotation) {
          vec2 p = uv - center;
          float c = cos(rotation);
          float s = sin(rotation);
          p = mat2(c, -s, s, c) * p;
          p.x *= uAspect;
          float d = dot(p / radius, p / radius);
          return exp(-d * 1.45);
        }

        float wave(vec2 uv, float shift) {
          return sin((uv.x * 4.8 + uv.y * 2.2 + shift) * 3.14159) * 0.5 + 0.5;
        }

        void main() {
          vec2 uv = vUv;
          float p = smoothstep(0.0, 1.0, uProgress);
          float early = smoothstep(0.0, 0.38, p);
          float late = smoothstep(0.52, 1.0, p);
          float middle = smoothstep(0.16, 0.48, p) * (1.0 - smoothstep(0.7, 1.0, p));
          float beatA = sin(p * 110.84956) * 0.5 + 0.5;
          float beatB = sin(p * 31.41593 + 1.7) * 0.5 + 0.5;
          float beatC = sin(p * 25.13274 + 3.2) * 0.5 + 0.5;
          beatA = smoothstep(0.12, 0.88, beatA);
          beatB = smoothstep(0.16, 0.84, beatB);
          beatC = smoothstep(0.18, 0.82, beatC);
          float t = uTime * 0.05;

          vec3 baseA = vec3(0.027, 0.018, 0.052);
          vec3 baseB = vec3(0.014, 0.020, 0.040);
          vec3 colorPink = mix(vec3(0.78, 0.25, 0.48), vec3(0.94, 0.41, 0.28), p);
          vec3 colorViolet = mix(vec3(0.30, 0.15, 0.58), vec3(0.20, 0.12, 0.48), p);
          vec3 colorCyan = mix(vec3(0.20, 0.66, 0.72), vec3(0.46, 0.86, 0.64), p);
          vec3 colorGold = mix(vec3(0.85, 0.67, 0.28), vec3(0.68, 0.86, 0.35), p);

          vec2 leftStart = vec2(0.06, 0.32);
          vec2 leftMid = vec2(0.58, 0.48);
          vec2 leftEnd = vec2(0.18, 0.64);
          vec2 rightStart = vec2(0.94, 0.42);
          vec2 rightMid = vec2(0.38, 0.3);
          vec2 rightEnd = vec2(0.82, 0.25);
          vec2 lowerStart = vec2(0.68, 0.74);
          vec2 lowerMid = vec2(0.28, 0.58);
          vec2 lowerEnd = vec2(0.62, 0.82);

          vec2 sideSweep = vec2((sin(p * 12.56637 - 0.55) * 0.5 + 0.5 - 0.5) * 0.22, 0.0);
          vec2 scrollDrift = vec2((beatA - 0.5) * 0.14, (beatB - 0.5) * 0.06);
          vec2 counterDrift = vec2((beatC - 0.5) * -0.13, (beatA - 0.5) * 0.045);
          vec2 leftCenter = mix(mix(leftStart, leftMid, early), leftEnd, late) + scrollDrift + vec2(sin(t) * 0.018, cos(t * 0.8) * 0.012);
          vec2 rightCenter = mix(mix(rightStart, rightMid, early), rightEnd, late) + counterDrift + vec2(cos(t * 0.9) * 0.014, sin(t * 0.7) * 0.014);
          vec2 lowerCenter = mix(mix(lowerStart, lowerMid, early), lowerEnd, late) + vec2((beatB - 0.5) * 0.1, (beatC - 0.5) * 0.045);
          leftCenter += sideSweep;
          rightCenter -= sideSweep * 0.72;
          lowerCenter += sideSweep * 0.44;
          vec2 bridgeCenter = mix(vec2(0.42, 0.49), vec2(0.62, 0.39), middle) + sideSweep * 0.28 + vec2((beatA - beatC) * 0.07, (beatB - 0.5) * -0.035);

          vec2 leftRadius = mix(mix(vec2(0.44, 0.36), vec2(0.34, 0.5), early), vec2(0.64, 0.34), late) + vec2((beatB - 0.5) * 0.09, (beatC - 0.5) * 0.055);
          vec2 rightRadius = mix(mix(vec2(0.5, 0.34), vec2(0.36, 0.44), early), vec2(0.58, 0.28), late) + vec2((beatA - 0.5) * 0.075, (beatB - 0.5) * 0.05);
          vec2 lowerRadius = mix(mix(vec2(0.58, 0.28), vec2(0.44, 0.34), early), vec2(0.72, 0.24), late) + vec2((beatC - 0.5) * 0.08, (beatA - 0.5) * 0.045);
          vec2 bridgeRadius = mix(vec2(0.34, 0.18), vec2(0.46, 0.15), middle) + vec2((beatB - 0.5) * 0.06, (beatC - 0.5) * 0.035);

          float left = softBlob(uv, leftCenter, leftRadius, -0.58 + p * 1.35 + (beatA - 0.5) * 0.28);
          float right = softBlob(uv, rightCenter, rightRadius, 0.42 - p * 1.05 + (beatB - 0.5) * -0.22);
          float lower = softBlob(uv, lowerCenter, lowerRadius, 0.22 + p * 0.72 + (beatC - 0.5) * 0.18);
          float bridge = softBlob(uv, bridgeCenter, bridgeRadius, -0.08 + p * 0.58 + (beatA - beatB) * 0.16);
          float upperMist = softBlob(
            uv,
            mix(vec2(0.32, 0.2), vec2(0.78, 0.16), late) + sideSweep * 0.36 + vec2((beatB - 0.5) * 0.1, (beatA - 0.5) * -0.035),
            mix(vec2(0.62, 0.18), vec2(0.48, 0.24), middle) + vec2((beatC - 0.5) * 0.07, 0.0),
            -0.35 + p * 0.44 + (beatC - 0.5) * 0.2
          );

          float texture = wave(uv, p * 0.8 + t) * 0.08 + wave(uv.yx, p * 1.3 - t * 0.7) * 0.05;
          vec3 color = mix(baseA, baseB, uv.y);
          color += colorPink * left * 0.20;
          color += colorCyan * right * 0.18;
          color += colorGold * lower * 0.08;
          color += colorViolet * bridge * 0.16;
          color += mix(colorViolet, colorPink, p) * upperMist * 0.08;
          color += (colorPink + colorCyan) * bridge * texture;

          float vignette = smoothstep(0.92, 0.24, distance(uv, vec2(0.5, 0.52)));
          color *= 0.62 + vignette * 0.58;

          gl_FragColor = vec4(color, 0.38);
        }
      `,
    });

    const background = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
    background.name = 'scroll_shift_nebula_background';
    background.position.set(0, 0, -24);
    background.renderOrder = -1000;
    this.nebulaBackground = background;
    this.camera.add(background);
    this.updateNebulaBackgroundSize();
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
    this.topRotationRig.scale.setScalar(this.getInitialModelScale());
    this.scene.add(this.topRotationRig);

    this.model = new THREE.Group();
    this.model.name = 'reader_model';
    this.model.rotation.copy(this.getInitialModelRotation());
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
    this.sensorGroup.position.set(this.cartridgePulledX, this.cartridgeSlotY, 0);
    this.sensorGroup.visible = false;
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
      const normalizedUrl = decodeURIComponent(url);
      if (normalizedUrl.endsWith('Case r12.bin') || normalizedUrl.endsWith('reader.bin')) {
        return this.getAssetUrl('assets/models/reader/Case r12 white with logo.bin');
      }

      return url;
    });

    const loader = new GLTFLoader(manager);
    loader.load(
      this.getAssetUrl('assets/models/reader/Case r12 white with logo.gltf'),
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
      this.getAssetUrl('assets/models/cartridge/Cartridge Base_V2.gltf'),
      (gltf) => {
        if (!this.sensorGroup) return;

        const cartridgeAsset = this.prepareCartridgeAsset(gltf.scene);
        this.sensorFallbackParts.forEach((child) => this.sensorGroup?.remove(child));
        this.sensorFallbackParts = [];
        this.sensorGroup.add(cartridgeAsset);
        this.optimizedCartridgeTemplate = this.createOptimizedCartridgeTemplate(cartridgeAsset);
        this.refreshStandaloneSensorsFromTemplate();
        this.updateSensorStarTargetsFromTemplate();
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
    const longestSide = Math.max(size.x, size.y, size.z);
    const targetLongestSide = 1.62;
    const scale = longestSide > 0 ? targetLongestSide / longestSide : 1;

    asset.scale.set(
      scale * this.cartridgeLengthScale,
      scale * this.cartridgeWidthScale,
      scale * this.cartridgeHeightScale,
    );
    asset.updateMatrixWorld(true);

    const scaledBox = new THREE.Box3().setFromObject(asset);
    const scaledCenter = scaledBox.getCenter(new THREE.Vector3());
    asset.position.set(0.55 - scaledCenter.x, -0.02 - scaledCenter.y, this.cartridgeSlotZ - scaledCenter.z);
    this.prepareAssetMaterials(asset);

    return asset;
  }

  private setFallbackSensorVisibility(isVisible: boolean): void {
    this.sensorFallbackParts.forEach((part) => {
      part.visible = isVisible;
    });
  }

  private getAssetUrl(path: string): string {
    return new URL(path, document.baseURI).toString();
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
    const readerCopyText = Array.from(readerCopy.children);
    const sampleCopy = this.sampleCopy.nativeElement;
    const sampleFluidNodes = this.sampleFluidElements.toArray().map((item) => item.nativeElement);
    const instructionFluidNodes = this.instructionFluidElements.toArray().map((item) => item.nativeElement);
    const deviceStage = this.deviceStage.nativeElement;
    const sensorCta = this.sensorCta.nativeElement;
    const deviceCopy = deviceStage.querySelectorAll('.device-copy');
    const screenPage = deviceStage.querySelector<HTMLElement>('[data-screen-page]');
    const screenPanels = Array.from(deviceStage.querySelectorAll<HTMLElement>('.screen-panel'));
    const progressOrb = deviceStage.querySelector<HTMLElement>('.app-progress-orb');
    const progressCheck = deviceStage.querySelector<SVGPathElement>('.app-progress-check path');
    const progressCheckLength = progressCheck?.getTotalLength() ?? 1;
    const resultTime = deviceStage.querySelector<HTMLElement>('[data-result-time]');
    const bluetoothSignal = deviceStage.querySelector<HTMLElement>('[data-bluetooth-signal]');
    const bluetoothRings = bluetoothSignal ? Array.from(bluetoothSignal.querySelectorAll('span:not(.bluetooth-core)')) : [];
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
    this.sensorMessageMotion.progress = 0;
    this.sensorFieldReveal.progress = 0;
    this.hero.nativeElement.classList.remove('is-product-cta');
    this.sensorGroup.position.set(this.getSensorEntryX(), this.cartridgeSlotY, 0);
    this.sensorGroup.rotation.set(0, 0, 0);
    this.sensorGroup.visible = false;
    gsap.set(this.topRotationRig, { visible: true });
    gsap.set(this.model, { visible: true });
    this.isDnaSpinning = false;
    this.isDnaSolid = false;
    this.setDnaOpacity(0);
    gsap.set(deviceStage, {
      autoAlpha: 0,
      filter: 'blur(0px)',
      y: '0vh',
      '--device-w': () => this.getBannerPhoneFrame().width,
      '--device-h': () => this.getBannerPhoneFrame().height,
      '--screen-type-scale': () => this.getDeviceContentScale('phone'),
      '--device-r': '1.85rem',
      '--device-x': '0vw',
      '--device-y': () => this.getBannerPhoneOffsetY(),
      '--stand-o': 0,
      '--keyboard-o': 0,
      '--home-o': 0,
      '--screen-r': '1.25rem',
      '--screen-bg': '#eee8ef',
      '--device-shell-bg': 'rgba(38, 42, 52, 0.96)',
      '--device-frame-border': 'rgba(38, 42, 52, 0.96)',
      '--device-shadow-o': 0.42,
      '--device-inner-shadow-o': 0.18,
    });
    gsap.set(deviceCopy, { autoAlpha: 0, filter: 'blur(0px)', y: '-10vh' });
    gsap.set(deviceCopyItems, { autoAlpha: 0, filter: 'blur(12px)', y: 18 });
    gsap.set(screenPage, { autoAlpha: 0, filter: 'blur(10px)' });
    gsap.set(screenPanels, { autoAlpha: 0, filter: 'blur(14px)' });
    if (screenPanels[0]) {
      gsap.set(screenPanels[0], { autoAlpha: 1, filter: 'blur(0px)' });
    }
    gsap.set(progressOrb, { '--analysis-progress': '0deg' });
    if (progressCheck) {
      progressCheck.setAttribute('stroke-dasharray', `${progressCheckLength}`);
      progressCheck.setAttribute('stroke-dashoffset', `${progressCheckLength}`);
    }
    gsap.set(progressCheck, { autoAlpha: 0 });
    gsap.set(bluetoothSignal, { autoAlpha: 0, scale: 0.84 });
    gsap.set(bluetoothRings, { opacity: 0, scale: 0.42 });
    gsap.set(sensorCta, { autoAlpha: 0, filter: 'blur(18px)', '--cta-y': '20px' });
    gsap.set(readerCopy, { autoAlpha: 1, filter: 'none', x: 0, y: 0 });
    gsap.set(readerCopyText, { autoAlpha: 1, filter: 'blur(0px)' });
    gsap.set(sampleCopy, { autoAlpha: 0, filter: 'blur(14px)', y: 18 });
    gsap.set(sampleFluidNodes, { autoAlpha: 0, filter: 'blur(10px)', yPercent: 36 });
    if (sampleFluidNodes[0]) {
      gsap.set(sampleFluidNodes[0], { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0 });
    }
    gsap.set(instructionFluidNodes, { autoAlpha: 0, filter: 'blur(10px)', yPercent: 36 });
    if (instructionFluidNodes[0]) {
      gsap.set(instructionFluidNodes[0], { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0 });
    }
    this.sensorFieldIsOpaque = false;
    this.readerFade.opacity = 1;
    this.setReaderOpacity(1);
    this.centerSensorReveal.opacity = 0;
    this.centerSensor?.position.set(0, 0, 0.09);
    this.centerSensor?.rotation.copy(this.centerSensorDisplayRotation);
    this.centerSensor?.scale.setScalar(1.48);
    if (this.sensorConstellationMaterial) {
      gsap.set(this.sensorConstellationMaterial, { opacity: 0, size: 0.023 });
    }
    if (this.sensorFillMaterial) {
      gsap.set(this.sensorFillMaterial, { opacity: 0 });
    }
    if (this.sensorMessageMaterial) {
      gsap.set(this.sensorMessageMaterial, { opacity: 0, size: 0.014 });
    }
    if (this.sensorMessageTextMaterial) {
      gsap.set(this.sensorMessageTextMaterial, { opacity: 0 });
    }
    this.setMaterialsOpacity(this.centerSensorMaterials, 0);
    this.setMaterialsOpacity(this.sensorFieldMaterials, 0);
    this.updateAnalysisOverlay();

    tl.to(this.topRotationRig.position, this.vectorTweenDynamic(() => this.getSensorSequenceModelPosition(), 0.34), 0)
      .to(
        this.model.rotation,
        {
          x: () => this.getSensorSequenceModelRotation().x,
          y: () => this.getSensorSequenceModelRotation().y,
          z: () => this.getSensorSequenceModelRotation().z,
          duration: 0.34,
        },
        0,
      )
      .to(
        this.topRotationRig.scale,
        {
          x: () => this.getSensorSequenceModelScale(),
          y: () => this.getSensorSequenceModelScale(),
          z: () => this.getSensorSequenceModelScale(),
          duration: 0.34,
        },
        0,
      )
      // Keep the primary banner message visible on the left throughout the product sequence.
      // Hiding it during the device transition caused the captured sequence to feel like a
      // different page and created overlaps on narrow views.
      .set(readerCopy, { autoAlpha: 1, x: 0, y: 0, filter: 'none' }, 0)
      .set(readerCopyText, { autoAlpha: 1, filter: 'blur(0px)' }, 0)
      .to(deviceStage, { autoAlpha: 1, duration: 0.28, ease: 'power2.out' }, 0.62)
      .to(
        deviceStage,
        {
          '--device-w': () => this.getBannerPhoneFrame().width,
          '--device-h': () => this.getBannerPhoneFrame().height,
          '--screen-type-scale': () => this.getDeviceContentScale('phone'),
          '--device-r': '1.85rem',
          '--device-x': '0vw',
          '--device-y': () => this.getBannerPhoneOffsetY(),
          '--stand-o': 0,
          '--keyboard-o': 0,
          '--home-o': 0,
          '--screen-r': '1.25rem',
          '--screen-bg': '#eee8ef',
          '--device-shell-bg': 'rgba(38, 42, 52, 0.96)',
          duration: 0.4,
          ease: 'power2.out',
        },
        0.62,
      )
      .to(screenPage, { autoAlpha: 0.96, filter: 'blur(0px)', duration: 0.34, ease: 'power2.out' }, 0.74)
      .to(bluetoothSignal, { autoAlpha: 1, scale: 1, duration: 0.18, ease: 'power2.out' }, 0.98)
      .to(
        bluetoothRings,
        { opacity: 0.8, scale: 1.2, duration: 0.52, stagger: 0.16, ease: 'power2.out' },
        1.02,
      )
      .to(bluetoothRings, { opacity: 0, duration: 0.2, stagger: 0.16, ease: 'power2.in' }, 1.42)
      .to(bluetoothSignal, { autoAlpha: 0, scale: 1.12, duration: 0.18, ease: 'power2.in' }, 1.64)
      .set(this.sensorGroup, { visible: true }, 1.68)
      .set(this.sensorGroup.position, { x: () => this.getSensorEntryX(), y: this.cartridgeSlotY, z: 0 }, 1.68)
      .to(this.sensorGroup.position, { x: this.cartridgeInsertedX, y: this.cartridgeSlotY, z: 0, duration: 1.12, ease: 'power1.inOut' }, 1.68)
      .to(this.topRotationRig.position, this.vectorTweenDynamic(() => this.getSampleDropModelPosition(this.cartridgeInsertedX), 1.12), 1.68)
      .to(this.sensorGroup.rotation, { x: 0, y: 0, z: 0, duration: 0.28 }, 1.68)
      .to(sampleCopy, { autoAlpha: 1, filter: 'blur(0px)', y: 0, duration: 0.42, ease: 'power2.out' }, 2.9)
      .to(sampleFluidNodes[0] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.28, ease: 'power2.out' }, 3.16)
      .to(sampleFluidNodes[1] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.28, ease: 'power2.out' }, 3.48)
      .to(sampleFluidNodes[2] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.28, ease: 'power2.out' }, 3.8)
      .to(sampleFluidNodes[3] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.28, ease: 'power2.out' }, 4.12)
      .to(sampleFluidNodes[4] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.28, ease: 'power2.out' }, 4.44)
      .to(sampleFluidNodes[5] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.28, ease: 'power2.out' }, 4.76)
      .to(screenPanels[0] ?? {}, { autoAlpha: 0, filter: 'blur(12px)', duration: 0.2, ease: 'power2.in' }, 2.92)
      .to(screenPanels[1] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', duration: 0.3, ease: 'power2.out' }, 3.02)
      // Cycle through all six sample types within the existing instruction scene.
      .to(instructionFluidNodes[0] ?? {}, { autoAlpha: 0, filter: 'blur(10px)', yPercent: -32, duration: 0.1 }, 3.5)
      .to(instructionFluidNodes[1] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.12 }, 3.6)
      .to(instructionFluidNodes[1] ?? {}, { autoAlpha: 0, filter: 'blur(10px)', yPercent: -32, duration: 0.1 }, 3.72)
      .to(instructionFluidNodes[2] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.12 }, 3.82)
      .to(instructionFluidNodes[2] ?? {}, { autoAlpha: 0, filter: 'blur(10px)', yPercent: -32, duration: 0.1 }, 3.94)
      .to(instructionFluidNodes[3] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.12 }, 4.04)
      .to(instructionFluidNodes[3] ?? {}, { autoAlpha: 0, filter: 'blur(10px)', yPercent: -32, duration: 0.1 }, 4.16)
      .to(instructionFluidNodes[4] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.12 }, 4.26)
      .to(instructionFluidNodes[4] ?? {}, { autoAlpha: 0, filter: 'blur(10px)', yPercent: -32, duration: 0.1 }, 4.38)
      .to(instructionFluidNodes[5] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', yPercent: 0, duration: 0.12 }, 4.48)
      .set(pipette?.position ?? {}, { y: 9.5 }, 3.5)
      .set(pipette ?? {}, { visible: true }, 3.5)
      .to(pipette?.position ?? {}, { y: 0.88, duration: 1.02, ease: 'power2.out' }, 3.5)
      .to(this.topLight ?? {}, { intensity: 44, duration: 0.28, ease: 'power2.out' }, 3.7)
      .to(this.frontFill ?? {}, { intensity: 0.22, duration: 0.28, ease: 'power2.out' }, 3.7)
      .set(droplet ?? {}, { visible: true }, 4.56)
      .set(drop ?? {}, { visible: true }, 4.56)
      .to(drop?.scale ?? {}, { x: 0.68, y: 0.68, z: 0.68, duration: 0.04 }, 4.56)
      .to(drop?.position ?? {}, { y: 0.055, duration: 0.2, ease: 'power1.in' }, 4.58)
      .set(puddle ?? {}, { visible: true }, 4.7)
      .to(drop?.scale ?? {}, { x: 0.24, y: 0.18, z: 0.24, duration: 0.07 }, 4.7)
      .to(puddle?.scale ?? {}, { x: 1, y: 1, z: 1, duration: 0.1 }, 4.7)
      .set(drop ?? {}, { visible: false }, 4.77)
      .to(pipette?.position ?? {}, { y: 5.8, duration: 0.52, ease: 'power2.in' }, 4.86)
      .set(pipette ?? {}, { visible: false }, 5.38)
      .to(puddle?.scale ?? {}, { x: 0, y: 0, z: 0, duration: 0.08 }, 5.02)
      .set(puddle ?? {}, { visible: false }, 5.12)
      .set(droplet ?? {}, { visible: false }, 5.12)
      .to(screenPanels[1] ?? {}, { autoAlpha: 0, filter: 'blur(12px)', duration: 0.2, ease: 'power2.in' }, 5.3)
      .to(screenPanels[2] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', duration: 0.3, ease: 'power2.out' }, 5.4)
      .to(progressOrb ?? {}, { '--analysis-progress': '360deg', duration: 0.98, ease: 'power1.inOut' }, 5.42)
      .call(() => this.updateResultTimestamp(resultTime), undefined, 6.4)
      .to(progressCheck ?? {}, { autoAlpha: 1, duration: 0.01, ease: 'none' }, 6.4)
      .to(
        progressCheck ?? {},
        { attr: { 'stroke-dashoffset': 0 }, duration: 0.72, ease: 'power1.inOut' },
        6.42,
      )
      .to(this.topLight ?? {}, { intensity: 82, duration: 0.26, ease: 'power2.inOut' }, 5.58)
      .to(this.frontFill ?? {}, { intensity: 0.48, duration: 0.26, ease: 'power2.inOut' }, 5.58)
      .to(screenPanels[2] ?? {}, { autoAlpha: 0, filter: 'blur(12px)', duration: 0.2, ease: 'power2.in' }, 7.22)
      .to(screenPanels[3] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', duration: 0.3, ease: 'power2.out' }, 7.32)
      .to(screenPanels[3] ?? {}, { autoAlpha: 0, filter: 'blur(12px)', duration: 0.24, ease: 'power2.in' }, 7.78)
      .to(screenPanels[4] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', duration: 0.34, ease: 'power2.out' }, 7.88)
      .to(screenPanels[4] ?? {}, { autoAlpha: 0, filter: 'blur(12px)', duration: 0.24, ease: 'power2.in' }, 8.42)
      .to(sampleCopy, { autoAlpha: 0, filter: 'blur(10px)', duration: 0.34, ease: 'power2.in' }, 8.5)
      .to(
        deviceStage,
        {
          '--device-shell-bg': 'rgba(241, 236, 224, 0)',
          '--device-frame-border': 'rgba(241, 236, 224, 0)',
          '--frame-edge-opacity': 0,
          '--screen-bg': 'rgba(238, 232, 239, 0)',
          '--keyboard-o': 0,
          '--stand-o': 0,
          '--device-shadow-o': 0,
          '--device-inner-shadow-o': 0,
          duration: 0.38,
          ease: 'power2.inOut',
        },
        8.5,
      )
      .call(() => {
        this.hero.nativeElement.classList.toggle('is-product-cta', (tl.scrollTrigger?.direction ?? 1) > 0);
      }, undefined, 8.9)
      .to(screenPanels[5] ?? {}, { autoAlpha: 1, filter: 'blur(0px)', duration: 0.34, ease: 'power2.out' }, 8.96)
      .to(this.topRotationRig.position, this.vectorTweenDynamic(() => this.getCenteredInsertedModelPosition(), 0.58), 3.56)
      .to(this.topRotationRig.rotation, { x: 0, y: 0, z: 0, duration: 0.58, ease: 'power2.inOut' }, 3.56)
      .to(
        this.model.rotation,
        {
          x: () => this.getSensorSequenceModelRotation().x,
          y: () => this.getSensorSequenceModelRotation().y,
          z: () => this.getSensorSequenceModelRotation().z,
          duration: 0.58,
          ease: 'power2.inOut',
        },
        3.56,
      )
      .to(
        this.topRotationRig.scale,
        {
          x: () => this.getSensorSequenceModelScale(),
          y: () => this.getSensorSequenceModelScale(),
          z: () => this.getSensorSequenceModelScale(),
          duration: 0.58,
          ease: 'power2.inOut',
        },
        3.56,
      )
      .to(deviceStage, { autoAlpha: 1, duration: 0.28, ease: 'power2.out' }, 2.24)
      .to(screenPage, { autoAlpha: 0.96, filter: 'blur(0px)', duration: 0.38, ease: 'power2.out' }, 2.36)
      .to(
        deviceCopyItems,
        {
          autoAlpha: 0,
          duration: 0.01,
        },
        2.42,
      )
      .to(
        deviceStage,
        {
          '--device-w': () => this.getBannerPhoneFrame().width,
          '--device-h': () => this.getBannerPhoneFrame().height,
          '--screen-type-scale': () => this.getDeviceContentScale('phone'),
          '--device-r': '1.85rem',
          '--device-x': '0vw',
          '--device-y': () => this.getBannerPhoneOffsetY(),
          '--stand-o': 0,
          '--keyboard-o': 0,
          '--home-o': 0,
          '--screen-r': '1.25rem',
          '--screen-bg': '#eee8ef',
          '--device-shell-bg': 'rgba(38, 42, 52, 0.96)',
          '--device-frame-border': 'rgba(38, 42, 52, 0.96)',
          '--device-shadow-o': 0.42,
          '--device-inner-shadow-o': 0.18,
          duration: 0.4,
          ease: 'power2.out',
        },
        2.24,
      )
      .to(
        deviceStage,
        {
          '--device-w': () => this.getBannerPhoneFrame().width,
          '--device-h': () => this.getBannerPhoneFrame().height,
          '--screen-type-scale': () => this.getDeviceContentScale('phone'),
          '--device-r': '1.85rem',
          '--device-y': () => this.getBannerPhoneOffsetY(),
          '--stand-o': 0,
          '--keyboard-o': 0,
          '--home-o': 0,
          '--screen-r': '1.25rem',
          '--screen-bg': '#eee8ef',
          '--device-shell-bg': 'rgba(38, 42, 52, 0.96)',
          '--device-frame-border': 'rgba(38, 42, 52, 0.96)',
          '--device-shadow-o': 0.42,
          '--device-inner-shadow-o': 0.18,
          duration: 0.01,
          ease: 'power2.inOut',
        },
        3.62,
      )
      .to(this.topRotationRig.position, this.vectorTweenDynamic(() => this.getCenteredInsertedModelPosition(), 0.01), 3.62)
      .to(
        this.model.rotation,
        {
          x: () => this.getSensorSequenceModelRotation().x,
          y: () => this.getSensorSequenceModelRotation().y,
          z: () => this.getSensorSequenceModelRotation().z,
          duration: 0.01,
          ease: 'power2.inOut',
        },
        3.62,
      )
      .to(
        this.topRotationRig.scale,
        {
          x: () => this.getSensorSequenceModelScale(),
          y: () => this.getSensorSequenceModelScale(),
          z: () => this.getSensorSequenceModelScale(),
          duration: 0.01,
          ease: 'power2.inOut',
        },
        3.62,
      )
      .to(dna?.position ?? {}, this.vectorTweenDynamic(() => this.getDeviceDnaPosition('tablet'), 0.7), 3.62)
      .to(this, { dnaDisplayScale: () => this.getDeviceDnaScale('tablet'), duration: 0.7, ease: 'power2.inOut' }, 3.62)
      .to(deviceCopy, { y: '-10vh', duration: 3.6, ease: 'none' }, 3.18)
      .to(
        deviceStage,
        {
          '--device-w': () => this.getDeviceFrame('laptop').width,
          '--device-h': () => this.getDeviceFrame('laptop').height,
          '--screen-type-scale': () => this.getDeviceContentScale('laptop'),
          '--device-r': '0.75rem',
          '--device-y': '-3vh',
          '--stand-o': 0,
          '--keyboard-o': 1,
          '--home-o': 0,
          '--screen-r': '0.12rem',
          '--screen-bg': '#eee8ef',
          '--device-shell-bg': 'rgba(38, 42, 52, 0.96)',
          '--device-frame-border': 'rgba(38, 42, 52, 0.96)',
          '--device-shadow-o': 0.42,
          '--device-inner-shadow-o': 0.18,
          duration: 0.7,
          ease: 'power2.inOut',
        },
        7.55,
      )
      .to(this.topRotationRig.position, this.vectorTweenDynamic(() => this.getDeviceModelPosition('laptop'), 0.7), 7.55)
      .to(
        this.model.rotation,
        {
          x: () => this.getDeviceModelRotation('laptop').x,
          y: () => this.getDeviceModelRotation('laptop').y,
          z: () => this.getDeviceModelRotation('laptop').z,
          duration: 0.7,
          ease: 'power2.inOut',
        },
        7.55,
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
        7.55,
      )
      .to(dna?.position ?? {}, this.vectorTweenDynamic(() => this.getDeviceDnaPosition('laptop'), 0.7), 7.55)
      .to(this, { dnaDisplayScale: () => this.getDeviceDnaScale('laptop'), duration: 0.7, ease: 'power2.inOut' }, 7.55)
      .to(this.topRotationRig.position, this.vectorTweenDynamic(() => this.getFinalDeviceModelPosition(), 0.72), 8.58)
      .to(
        this.topRotationRig.scale,
        {
          x: () => this.getFinalDeviceModelScale(),
          y: () => this.getFinalDeviceModelScale(),
          z: () => this.getFinalDeviceModelScale(),
          duration: 0.72,
          ease: 'power2.inOut',
        },
        8.58,
      )
      .to(deviceStage, { y: '-118vh', autoAlpha: 0, duration: 0.68, ease: 'power2.inOut' }, 10.1)
      .to(
        this.topRotationRig.position,
        { ...this.vectorTweenDynamic(() => this.getSceneExitModelPosition(), 0.68), ease: 'power2.inOut' },
        10.1,
      )
      .call(() => {
        this.hero.nativeElement.classList.toggle('is-product-cta', (tl.scrollTrigger?.direction ?? 1) < 0);
      }, undefined, 10.72)
      .call(() => this.setReaderOpacity(1), undefined, 10.16)
      .set(deviceStage, { autoAlpha: 0, y: '0vh' }, 10.8)
      .set(this.model ?? {}, { visible: false }, 10.8)
      .set(this.topRotationRig, { visible: false }, 10.8)
      .to(dustMaterial ?? {}, { opacity: 0.88, size: 0.018, duration: 0.5, ease: 'power2.out' }, 10.32)
      .to(this.topLight ?? {}, { intensity: 38, duration: 0.42, ease: 'power2.out' }, 10.32)
      .to(this.frontFill ?? {}, { intensity: 0.16, duration: 0.42, ease: 'power2.out' }, 10.32)
      .to(
        this.sensorConstellationMaterial ?? {},
        { opacity: 0.96, size: 0.025, duration: 0.45, ease: 'power2.out' },
        10.38,
      )
      .to(this.sensorStarMotion, { progress: 1, duration: 0.95, ease: 'none' }, 10.51)
      .to(this.sensorConstellationMaterial ?? {}, { opacity: 0.26, size: 0.012, duration: 0.34, ease: 'power2.inOut' }, 11.38)
      .call(() => this.prepareMaterialsForReveal(this.centerSensorMaterials), undefined, 11.36)
      .to(
        this.centerSensorReveal,
        {
          opacity: 1,
          duration: 0.34,
          ease: 'power2.out',
          onUpdate: () => this.setMaterialsOpacity(this.centerSensorMaterials, this.centerSensorReveal.opacity),
        },
        11.38,
      )
      .to(this.sensorFillMaterial ?? {}, { opacity: 0, duration: 0.01, ease: 'none' }, 11.38)
      .to(this.sensorConstellationMaterial ?? {}, { opacity: 0, duration: 0.22, ease: 'power2.in' }, 11.42)
      .to(this.sensorMessageMaterial ?? {}, { opacity: 0.92, size: 0.016, duration: 0.35, ease: 'power2.out' }, 11.48)
      .to(this.sensorMessageMotion, { progress: 1, duration: 1.02, ease: 'none' }, 11.54)
      .to(
        this.centerSensor?.rotation ?? {},
        {
          x: () => this.centerSensorDisplayRotation.x + 0.22,
          y: () => this.centerSensorDisplayRotation.y + 0.28,
          z: () => this.centerSensorDisplayRotation.z + Math.PI,
          duration: 0.86,
          ease: 'power2.inOut',
        },
        11.52,
      )
      .to(this.sensorMessageMaterial ?? {}, { opacity: 0, duration: 0.26, ease: 'power2.out' }, 12.42)
      .to(this.sensorMessageTextMaterial ?? {}, { opacity: 0.96, duration: 0.34, ease: 'power2.out' }, 12.48)
      .to(this.sensorMessageTextMaterial ?? {}, { opacity: 0, duration: 0.34, ease: 'power2.in' }, 12.9)
      .to(
        this.centerSensor?.rotation ?? {},
        {
          x: () => this.centerSensorDisplayRotation.x,
          y: () => this.centerSensorDisplayRotation.y,
          z: () => this.centerSensorDisplayRotation.z,
          duration: 0.56,
          ease: 'power2.inOut',
        },
        12.44,
      )
      .to(this.sensorMessageMaterial ?? {}, { opacity: 0.72, size: 0.014, duration: 0.14, ease: 'power2.out' }, 13.04)
      .to(this.sensorMessageMotion, { progress: 0, duration: 0.64, ease: 'power2.in' }, 13.12)
      .to(this.sensorMessageMaterial ?? {}, { opacity: 0, size: 0.011, duration: 0.42, ease: 'power2.in' }, 13.36)
      .to(this.centerSensor?.position ?? {}, this.vectorTweenDynamic(() => this.centerSensor?.userData['fieldPosition'] ?? new THREE.Vector3(), 0.6), 12.86)
      .to(
        this.centerSensor?.rotation ?? {},
        {
          x: () => (this.centerSensor?.userData['fieldRotation'] as THREE.Euler | undefined)?.x ?? 0,
          y: () => (this.centerSensor?.userData['fieldRotation'] as THREE.Euler | undefined)?.y ?? 0,
          z: () => (this.centerSensor?.userData['fieldRotation'] as THREE.Euler | undefined)?.z ?? 0,
          duration: 0.6,
          ease: 'power2.inOut',
        },
        12.86,
      )
      .to(
        this.centerSensor?.scale ?? {},
        {
          x: () => this.centerSensor?.userData['fieldScale'] ?? 0.34,
          y: () => this.centerSensor?.userData['fieldScale'] ?? 0.34,
          z: () => this.centerSensor?.userData['fieldScale'] ?? 0.34,
          duration: 0.6,
          ease: 'power2.inOut',
        },
        12.86,
      )
      .call(() => this.prepareMaterialsForReveal(this.sensorFieldMaterials), undefined, 12.9)
      .to(this.sensorFieldReveal, { progress: 1, duration: 0.9, ease: 'none' }, 12.96)
      .to(this.sensorStarMotion, { fall: 1, duration: 0.9, ease: 'none' }, 14.06)
      .to(this.topLight ?? {}, { intensity: 82, duration: 0.46, ease: 'power2.inOut' }, 14.96)
      .to(this.frontFill ?? {}, { intensity: 0.48, duration: 0.46, ease: 'power2.inOut' }, 14.96)
      .to(sensorCta, { autoAlpha: 1, filter: 'blur(0px)', '--cta-y': '0px', duration: 0.9, ease: 'none' }, 14.06)
      // Give viewers more time to read the phone screens and follow the reader movement.
      .timeScale(0.78);
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

    // Keep the rotation machinery for future multi-phrase copy, but do not
    // start a redundant loop when the current copy contains only one phrase.
    if (phraseNodes.length === 1) {
      gsap.set(phraseNodes[0], {
        autoAlpha: 1,
        clipPath: 'inset(0 0% 0 0)',
        filter: 'blur(0px)',
        x: 0,
      });
      return;
    }

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

  private updateResultTimestamp(target: HTMLElement | null): void {
    if (!target) return;

    const time = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    target.textContent = `Today at ${time}`;
  }

  private createSensorGroup(materials: {
    white: THREE.MeshStandardMaterial;
    charcoal: THREE.MeshStandardMaterial;
    blue: THREE.MeshStandardMaterial;
  }): THREE.Group {
    const group = new THREE.Group();
    group.name = 'sensor_group';

    const base = this.roundedBox('sensor_base_card', [1.88, 0.045, 0.68], [0.5, -0.02, 0], materials.white, 0.035);
    group.add(base);

    const frontPad = this.roundedBox('sensor_front_pad', [0.52, 0.052, 0.64], [1.18, -0.014, 0], materials.white, 0.03);
    group.add(frontPad);

    const blueLine = this.roundedBox('sensor_blue_readout_line', [1.48, 0.012, 0.025], [0.35, 0.012, -0.3], materials.blue, 0.006);
    group.add(blueLine);

    const sampleDot = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.012, 28), materials.blue);
    sampleDot.name = 'sensor_sample_dot';
    sampleDot.rotation.x = Math.PI / 2;
    sampleDot.position.set(0.48, 0.018, 0.06);
    group.add(sampleDot);

    for (let i = 0; i < 14; i++) {
      const contact = this.roundedBox(
        `sensor_contact_${i}`,
        [0.024, 0.018, 0.12],
        [1.22 + (i % 2) * 0.038, 0.018, -0.28 + i * 0.043],
        materials.charcoal,
        0.006,
      );
      group.add(contact);
    }

    const label = this.createSensorLabelPlane();
    label.scale.set(1.18, 1, 1);
    label.position.set(0.12, 0.024, 0.02);
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
      color: '#913ffc',
      transparent: true,
      opacity: 0.68,
      roughness: 0.04,
      metalness: 0,
    });

    this.pipetteGroup = new THREE.Group();
    this.pipetteGroup.name = 'pipette_group';
    this.pipetteGroup.position.set(this.cartridgeSampleX, 3.6, this.cartridgeSampleZ);
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
    this.dropletGroup.position.set(this.cartridgeSampleX, 0, this.cartridgeSampleZ);
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
    const starCount = this.getViewportSize().width < 760 ? 2600 : 5200;
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

    const sensorLayout = this.getSensorFieldLayout();
    const centerLayoutIndex = Math.floor(sensorLayout.length / 2);
    const centerLayout = sensorLayout[centerLayoutIndex];
    const centerFieldPosition = centerLayout?.position.clone() ?? new THREE.Vector3(0, -0.34, 0.08);
    const centerFieldRotation = centerLayout?.rotation.clone() ?? this.centerSensorDisplayRotation.clone();
    this.centerSensor = this.createStandaloneSensorModel(1.48);
    this.centerSensor.name = 'center_revealed_sensor';
    this.centerSensor.position.set(0, 0, 0.09);
    this.centerSensor.rotation.copy(this.centerSensorDisplayRotation);
    this.centerSensor.userData['fieldPosition'] = centerFieldPosition;
    this.centerSensor.userData['fieldRotation'] = centerFieldRotation;
    this.centerSensor.userData['fallRotation'] = new THREE.Euler(
      centerFieldRotation.x + 2.4,
      centerFieldRotation.y - 1.8,
      centerFieldRotation.z + 2.8,
    );
    this.centerSensor.userData['fieldScale'] = centerLayout?.scale ?? 0.38;
    this.centerSensor.userData['baseRotation'] = centerFieldRotation.clone();
    this.centerSensor.userData['fallX'] = centerFieldPosition.x;
    this.centerSensor.userData['fallY'] = -4.2;
    this.centerSensor.userData['fallZ'] = centerFieldPosition.z + 0.72;
    this.centerSensor.visible = true;
    this.centerSensorMaterials = this.collectMaterials(this.centerSensor);
    this.setMaterialsOpacity(this.centerSensorMaterials, 0);
    this.scene.add(this.centerSensor);

    this.sensorField = new THREE.Group();
    this.sensorField.name = 'sensor_field';
    this.sensorFieldRevealStarts = [];
    const sensorField = this.sensorField;
    sensorLayout.forEach((layout, index) => {
      if (index === centerLayoutIndex) return;

      const sensor = this.createStandaloneSensorModel(layout.scale);
      const gatherStartPosition = this.createSensorGatherStartPosition(layout.position, index);
      const gatherStartRotation = new THREE.Euler(
        layout.rotation.x + (Math.random() - 0.5) * 0.5,
        layout.rotation.y + (Math.random() - 0.5) * 0.42,
        layout.rotation.z + (Math.random() - 0.5) * 0.5,
      );
      sensor.position.copy(gatherStartPosition);
      sensor.rotation.copy(gatherStartRotation);
      sensor.userData['fieldPosition'] = layout.position.clone();
      sensor.userData['gatherStartPosition'] = gatherStartPosition;
      sensor.userData['gatherStartRotation'] = gatherStartRotation;
      sensor.userData['baseRotation'] = layout.rotation.clone();
      sensor.userData['fieldRotation'] = layout.rotation.clone();
      sensor.userData['floatPhase'] = Math.random() * Math.PI * 2;
      sensor.userData['fallStart'] = layout.fallStart;
      sensor.userData['fallRotation'] = new THREE.Euler(
        layout.rotation.x + (Math.random() - 0.5) * 4.6,
        layout.rotation.y + (Math.random() - 0.5) * 5.2,
        layout.rotation.z + (Math.random() - 0.5) * 4.8,
      );
      sensor.userData['startY'] = layout.position.y;
      sensor.userData['fallX'] = layout.fallPosition.x;
      sensor.userData['fallY'] = layout.fallPosition.y;
      sensor.userData['fallZ'] = layout.fallPosition.z;
      this.sensorFieldRevealStarts.push(layout.position.y > 0.46 ? 0.62 + Math.random() * 0.2 : Math.random() * 0.5);
      const sensorMaterials = this.collectMaterials(sensor);
      this.setMaterialsOpacity(sensorMaterials, 0);
      this.sensorFieldMaterialGroups.push(sensorMaterials);
      this.sensorFieldItems.push(sensor);
      sensorField.add(sensor);
    });
    this.sensorField.visible = true;
    this.sensorFieldMaterials = this.collectMaterials(this.sensorField);
    this.scene.add(this.sensorField);
  }

  private createSensorMessageScene(): void {
    const isCompact = this.getViewportSize().width < 760;
    const count = isCompact ? 3200 : 5600;
    const lines = ['Each sensor carries the chemistry', 'for a clearer reader result.'];
    const startPositions = new Float32Array(count * 3);
    const targetPositions = this.createTextStarTargets(lines, count);

    for (let index = 0; index < count; index++) {
      const offset = index * 3;
      const edge = Math.floor(Math.random() * 4);
      const horizontalSpread = isCompact ? 4.8 : 6.6;
      const verticalSpread = isCompact ? 3.2 : 4.4;

      if (edge === 0) {
        startPositions[offset] = (Math.random() - 0.5) * horizontalSpread;
        startPositions[offset + 1] = 3 + Math.random() * verticalSpread * 0.45;
      } else if (edge === 1) {
        startPositions[offset] = (Math.random() - 0.5) * horizontalSpread;
        startPositions[offset + 1] = -2.4 - Math.random() * verticalSpread * 0.45;
      } else if (edge === 2) {
        startPositions[offset] = -3.8 - Math.random() * horizontalSpread * 0.45;
        startPositions[offset + 1] = 1.3 + (Math.random() - 0.5) * verticalSpread;
      } else {
        startPositions[offset] = 3.8 + Math.random() * horizontalSpread * 0.45;
        startPositions[offset + 1] = 1.3 + (Math.random() - 0.5) * verticalSpread;
      }

      startPositions[offset + 2] = -1.6 + Math.random() * 3.2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(startPositions.slice(), 3));

    const material = new THREE.PointsMaterial({
      color: '#f7efe2',
      size: 0.014,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });

    this.sensorMessage = new THREE.Points(geometry, material);
    this.sensorMessage.name = 'sensor_message_stars';
    this.sensorMessageGeometry = geometry;
    this.sensorMessageMaterial = material;
    this.sensorMessageStartPositions = startPositions;
    this.sensorMessageTargetPositions = targetPositions;
    this.scene.add(this.sensorMessage);

    const textPlane = this.createSensorMessageTextPlane(lines);
    this.scene.add(textPlane);
  }

  private createTextStarTargets(lines: string[], count: number): Float32Array {
    const layout = this.getSensorMessageLayout();
    const canvas = document.createElement('canvas');
    canvas.width = layout.canvasWidth;
    canvas.height = layout.canvasHeight;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    const candidates: Array<{ x: number; y: number; weight: number }> = [];

    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#ffffff';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = layout.font;

      const startY = canvas.height / 2 - ((lines.length - 1) * layout.lineHeight) / 2;
      lines.forEach((line, index) => {
        context.fillText(line, canvas.width / 2, startY + index * layout.lineHeight, canvas.width * layout.maxTextWidth);
      });

      const data = context.getImageData(0, 0, canvas.width, canvas.height).data;
      const step = 3;
      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          const alpha = data[(y * canvas.width + x) * 4 + 3];
          if (alpha > 40) {
            candidates.push({ x, y, weight: alpha / 255 });
          }
        }
      }
    }

    const positions = new Float32Array(count * 3);

    for (let index = 0; index < count; index++) {
      const offset = index * 3;
      const point = candidates.length
        ? candidates[Math.floor(Math.random() * candidates.length)]
        : { x: Math.random() * canvas.width, y: Math.random() * canvas.height, weight: 1 };
      const normalizedX = point.x / canvas.width - 0.5;
      const normalizedY = 0.5 - point.y / canvas.height;

      positions[offset] = normalizedX * layout.worldWidth + (Math.random() - 0.5) * 0.006;
      positions[offset + 1] = layout.worldY + normalizedY * layout.worldHeight + (Math.random() - 0.5) * 0.006;
      positions[offset + 2] = (Math.random() - 0.5) * 0.06;
    }

    return positions;
  }

  private createSensorMessageTextPlane(lines: string[]): THREE.Mesh {
    const layout = this.getSensorMessageLayout();
    const canvas = document.createElement('canvas');
    canvas.width = layout.canvasWidth;
    canvas.height = layout.canvasHeight;
    const context = canvas.getContext('2d');

    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#f7efe2';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = layout.font;

      const startY = canvas.height / 2 - ((lines.length - 1) * layout.lineHeight) / 2;
      lines.forEach((line, index) => {
        context.fillText(line, canvas.width / 2, startY + index * layout.lineHeight, canvas.width * layout.maxTextWidth);
      });
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      depthTest: false,
      toneMapped: false,
    });

    const plane = new THREE.Mesh(new THREE.PlaneGeometry(layout.worldWidth, layout.worldHeight), material);
    plane.name = 'sensor_message_text';
    plane.position.set(0, layout.worldY, 0.18);
    plane.renderOrder = 40;
    this.sensorMessageTextMaterial = material;
    return plane;
  }

  private getSensorMessageLayout(): {
    canvasWidth: number;
    canvasHeight: number;
    font: string;
    lineHeight: number;
    maxTextWidth: number;
    worldWidth: number;
    worldHeight: number;
    worldY: number;
  } {
    const isCompact = this.getViewportSize().width < 760;

    return {
      canvasWidth: 1800,
      canvasHeight: 480,
      font: '700 126px Arial',
      lineHeight: 150,
      maxTextWidth: 0.92,
      worldWidth: isCompact ? 4.5 : 5.95,
      worldHeight: 1.58,
      worldY: isCompact ? 1.36 : 1.28,
    };
  }

  private getSensorFieldLayout(): Array<{
    position: THREE.Vector3;
    rotation: THREE.Euler;
    scale: number;
    fallStart: number;
    fallPosition: THREE.Vector3;
  }> {
    const compact = this.getViewportSize().width < 760;
    const columns = compact ? 5 : 8;
    const rows = compact ? 5 : 5;
    const gapX = compact ? 1.02 : 1.18;
    const gapY = compact ? 0.66 : 0.72;
    const baseScale = compact ? 0.28 : 0.32;
    const yBias = compact ? -0.22 : -0.08;
    const layout: Array<{
      position: THREE.Vector3;
      rotation: THREE.Euler;
      scale: number;
      fallStart: number;
      fallPosition: THREE.Vector3;
    }> = [];

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        const x = (column - (columns - 1) / 2) * gapX;
        const y = (row - (rows - 1) / 2) * gapY + yBias;
        const rowFromBottom = rows - row - 1;
        const columnFromCenter = column - (columns - 1) / 2;
        const fallStart = rowFromBottom / Math.max(1, rows - 1) * 0.34 + (column % 3) * 0.026;
        const fallX = x + columnFromCenter * 0.2 + (row % 2 === 0 ? -0.08 : 0.08);
        const fallY = -4.05 - rowFromBottom * 0.32;
        const fallZ = 0.28 + row * 0.17 + (column % 3) * 0.06;
        layout.push({
          position: new THREE.Vector3(x, y, -0.04 + ((row * columns + column) % 5) * 0.018),
          rotation: new THREE.Euler(
            this.centerSensorDisplayRotation.x - 0.08 + (row - (rows - 1) / 2) * 0.01,
            this.centerSensorDisplayRotation.y * 0.28 + columnFromCenter * 0.018,
            (row - (rows - 1) / 2) * 0.018,
          ),
          scale: baseScale,
          fallStart,
          fallPosition: new THREE.Vector3(fallX, fallY, fallZ),
        });
      }
    }

    return layout;
  }

  private createSensorGatherStartPosition(fieldPosition: THREE.Vector3, index: number): THREE.Vector3 {
    const compact = this.getViewportSize().width < 760;
    const laneJitter = compact ? 0.05 : 0.07;
    const verticalJitter = compact ? 0.08 : 0.1;
    const depthOffset = compact ? 0.9 : 1.18;

    return new THREE.Vector3(
      fieldPosition.x + (Math.random() - 0.5) * laneJitter,
      fieldPosition.y + (Math.random() - 0.5) * verticalJitter,
      fieldPosition.z - depthOffset - Math.random() * 0.42,
    );
  }

  private createSensorStarTargets(count: number): Float32Array {
    const sampled = this.createSensorStarTargetsFromTemplate(count);
    if (sampled) return sampled;

    const positions = new Float32Array(count * 3);
    const width = 3.05;
    const height = 0.92;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    for (let i = 0; i < count; i++) {
      const index = i * 3;
      const isOutline = i < count * 0.12;
      const isContact = i >= count * 0.12 && i < count * 0.28;
      const isLayerLine = i >= count * 0.28 && i < count * 0.38;
      const isLidSurface = i >= count * 0.38 && i < count * 0.74;
      let x = 0;
      let y = 0;

      if (isContact) {
        const contactIndex = i % 16;
        x = halfWidth - 0.22 + (Math.random() - 0.5) * 0.085;
        y = -halfHeight + 0.11 + contactIndex * ((height - 0.22) / 15) + (Math.random() - 0.5) * 0.012;
      } else if (isLayerLine) {
        const line = i % 3;
        x = -halfWidth + 0.18 + Math.random() * (width - 0.42);
        y = -halfHeight + 0.1 + line * 0.055 + (Math.random() - 0.5) * 0.012;
      } else if (isLidSurface) {
        const lidEase = Math.random();
        x = -halfWidth + 0.18 + lidEase * (width - 0.64);
        y = (Math.random() - 0.5) * height * 0.62;
      } else if (isOutline) {
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
        const radius = Math.random() * 0.085;
        x = 0.48 + Math.cos(angle) * radius;
        y = 0.08 + Math.sin(angle) * radius;
      }

      positions[index] = x;
      positions[index + 1] = y;
      positions[index + 2] = (Math.random() - 0.5) * 0.06;
    }

    return positions;
  }

  private createSensorStarTargetsFromTemplate(count: number): Float32Array | undefined {
    if (!this.optimizedCartridgeTemplate) return undefined;

    const triangles: Array<{ a: THREE.Vector3; b: THREE.Vector3; c: THREE.Vector3; area: number }> = [];
    const localMatrix = new THREE.Matrix4();
    const displayMatrix = new THREE.Matrix4().makeRotationFromEuler(this.centerSensorDisplayRotation);
    const center = new THREE.Vector3();
    const scale = 1.48;

    this.optimizedCartridgeTemplate.updateMatrixWorld(true);
    new THREE.Box3().setFromObject(this.optimizedCartridgeTemplate).getCenter(center);

    this.optimizedCartridgeTemplate.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (!mesh.isMesh || !mesh.geometry) return;

      const geometry = mesh.geometry;
      const position = geometry.getAttribute('position') as THREE.BufferAttribute | undefined;
      if (!position || position.count < 3) return;

      localMatrix.copy(mesh.matrixWorld);
      for (let index = 0; index < position.count - 2; index += 3) {
        const a = new THREE.Vector3().fromBufferAttribute(position, index).applyMatrix4(localMatrix).sub(center);
        const b = new THREE.Vector3().fromBufferAttribute(position, index + 1).applyMatrix4(localMatrix).sub(center);
        const c = new THREE.Vector3().fromBufferAttribute(position, index + 2).applyMatrix4(localMatrix).sub(center);
        const area = b.clone().sub(a).cross(c.clone().sub(a)).length() * 0.5;
        if (area > 0.000001) triangles.push({ a, b, c, area });
      }
    });

    if (!triangles.length) return undefined;

    const totalArea = triangles.reduce((sum, triangle) => sum + triangle.area, 0);
    const positions = new Float32Array(count * 3);
    const point = new THREE.Vector3();

    for (let index = 0; index < count; index++) {
      let pick = Math.random() * totalArea;
      let triangle = triangles[triangles.length - 1];
      for (const candidate of triangles) {
        pick -= candidate.area;
        if (pick <= 0) {
          triangle = candidate;
          break;
        }
      }

      let u = Math.random();
      let v = Math.random();
      if (u + v > 1) {
        u = 1 - u;
        v = 1 - v;
      }

      point
        .copy(triangle.a)
        .add(triangle.b.clone().sub(triangle.a).multiplyScalar(u))
        .add(triangle.c.clone().sub(triangle.a).multiplyScalar(v))
        .applyMatrix4(displayMatrix)
        .multiplyScalar(scale);

      const offset = index * 3;
      positions[offset] = point.x + (Math.random() - 0.5) * 0.015;
      positions[offset + 1] = point.y + (Math.random() - 0.5) * 0.015;
      positions[offset + 2] = point.z + 0.09 + (Math.random() - 0.5) * 0.035;
    }

    return positions;
  }

  private updateSensorStarTargetsFromTemplate(): void {
    if (!this.sensorStarTargetPositions) return;

    const targets = this.createSensorStarTargetsFromTemplate(this.sensorStarTargetPositions.length / 3);
    if (!targets) return;

    this.sensorStarTargetPositions.set(targets);
  }

  private createStandaloneSensorModel(scale: number): THREE.Group {
    if (this.optimizedCartridgeTemplate) {
      const group = this.createOptimizedCartridgeClone();
      group.scale.setScalar(scale);
      return group;
    }

    const white = this.createTransparentMaterial('#f7f1df', 0.38, 0.08);
    const charcoal = this.createTransparentMaterial('#20262b', 0.52, 0.06);
    const blue = this.createTransparentMaterial('#1d8bb2', 0.28, 0.06);
    const group = this.createSensorGroup({ white, charcoal, blue });
    group.scale.setScalar(scale);
    return group;
  }

  private createOptimizedCartridgeTemplate(asset: THREE.Object3D): THREE.Group {
    asset.updateMatrixWorld(true);
    const buckets = new Map<string, { material: THREE.Material; geometries: THREE.BufferGeometry[] }>();

    asset.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (!mesh.isMesh || !mesh.geometry || !mesh.material) return;

      const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
      const key = material.name || material.uuid;
      let geometry = mesh.geometry.clone();
      geometry.applyMatrix4(mesh.matrixWorld);
      if (geometry.index) {
        geometry = geometry.toNonIndexed();
      }

      Object.keys(geometry.attributes).forEach((attributeName) => {
        if (attributeName !== 'position' && attributeName !== 'normal') {
          geometry.deleteAttribute(attributeName);
        }
      });
      if (!geometry.getAttribute('normal')) {
        geometry.computeVertexNormals();
      }

      const bucket = buckets.get(key) ?? { material, geometries: [] };
      bucket.geometries.push(geometry);
      buckets.set(key, bucket);
    });

    const group = new THREE.Group();
    group.name = 'optimized_cartridge_template';
    buckets.forEach(({ material, geometries }) => {
      const merged = mergeGeometries(geometries, false);
      geometries.forEach((geometry) => geometry.dispose());
      if (!merged) return;

      const meshMaterial = material.clone();
      const mesh = new THREE.Mesh(merged, meshMaterial);
      mesh.name = `optimized_cartridge_${group.children.length}`;
      group.add(mesh);
    });

    const box = new THREE.Box3().setFromObject(group);
    const center = box.getCenter(new THREE.Vector3());
    group.children.forEach((child) => {
      child.position.sub(center);
    });
    this.prepareAssetMaterials(group);
    return group;
  }

  private createOptimizedCartridgeClone(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'standalone_optimized_cartridge';
    this.optimizedCartridgeTemplate?.children.forEach((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh) return;

      const clone = new THREE.Mesh(
        mesh.geometry,
        Array.isArray(mesh.material)
          ? mesh.material.map((material) => material.clone())
          : (mesh.material as THREE.Material).clone(),
      );
      clone.name = mesh.name;
      clone.position.copy(mesh.position);
      clone.rotation.copy(mesh.rotation);
      clone.scale.copy(mesh.scale);
      group.add(clone);
    });
    return group;
  }

  private refreshStandaloneSensorsFromTemplate(): void {
    if (!this.optimizedCartridgeTemplate) return;

    const sensors = [this.centerSensor, ...this.sensorFieldItems].filter((sensor): sensor is THREE.Group => !!sensor);
    sensors.forEach((sensor) => {
      const opacity = this.collectMaterials(sensor)[0]?.opacity ?? 0;
      const replacement = this.createOptimizedCartridgeClone();
      sensor.clear();
      replacement.children.forEach((child) => sensor.add(child));
      const materials = this.collectMaterials(sensor);
      this.setMaterialsOpacity(materials, opacity);

      if (sensor === this.centerSensor) {
        this.centerSensorMaterials = materials;
      } else {
        const index = this.sensorFieldItems.indexOf(sensor);
        if (index >= 0) this.sensorFieldMaterialGroups[index] = materials;
      }
    });

    this.sensorFieldMaterials = this.sensorField ? this.collectMaterials(this.sensorField) : [];
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
      this.particles.rotation.y += this.isPointerDown ? 0.002 : 0.001;
    }
    if (this.nebulaUniforms) {
      this.nebulaUniforms.uTime.value = performance.now() * 0.001;
    }

    this.updateSensorConstellation();
    this.updateSensorMessage();
    this.updateSensorField();

    if (this.topRotationRig && this.isTopInteractive && !this.isPointerDown) {
      this.topRotationRig.rotation.y += 0.00086;
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

  private updateSensorMessage(): void {
    if (!this.sensorMessageGeometry || !this.sensorMessageStartPositions || !this.sensorMessageTargetPositions) {
      return;
    }

    const position = this.sensorMessageGeometry.getAttribute('position') as THREE.BufferAttribute;
    const values = position.array as Float32Array;
    const progress = gsap.parseEase('power2.inOut')(this.sensorMessageMotion.progress);

    for (let i = 0; i < values.length; i += 3) {
      values[i] = THREE.MathUtils.lerp(this.sensorMessageStartPositions[i], this.sensorMessageTargetPositions[i], progress);
      values[i + 1] = THREE.MathUtils.lerp(
        this.sensorMessageStartPositions[i + 1],
        this.sensorMessageTargetPositions[i + 1],
        progress,
      );
      values[i + 2] = THREE.MathUtils.lerp(
        this.sensorMessageStartPositions[i + 2],
        this.sensorMessageTargetPositions[i + 2],
        progress,
      );
    }

    position.needsUpdate = true;
  }

  private updateSensorField(): void {
    this.syncSensorFieldMaterialMode();
    this.updateSensorFieldReveal();

    this.sensorFieldItems.forEach((sensor, index) => {
      if (sensor === this.selectedFieldSensor) return;

      const baseRotation = sensor.userData['baseRotation'] as THREE.Euler | undefined;
      const gatherStartRotation = sensor.userData['gatherStartRotation'] as THREE.Euler | undefined;
      const gatherStartPosition = sensor.userData['gatherStartPosition'] as THREE.Vector3 | undefined;
      const fieldPosition = sensor.userData['fieldPosition'] as THREE.Vector3 | undefined;
      const fallRotation = sensor.userData['fallRotation'] as THREE.Euler | undefined;
      const fallX = sensor.userData['fallX'] as number | undefined;
      const fallY = sensor.userData['fallY'] as number | undefined;
      const fallZ = sensor.userData['fallZ'] as number | undefined;
      const fallStart = sensor.userData['fallStart'] as number | undefined;
      const rawFall = this.getSensorFallProgress(fallStart ?? 0);
      const fall = gsap.parseEase('power2.in')(rawFall);
      const gather = this.getSensorFieldItemRevealProgress(index, this.sensorFieldItems.length);

      if (fieldPosition && gatherStartPosition && fall <= 0.001) {
        sensor.position.lerpVectors(gatherStartPosition, fieldPosition, gather);
      }

      if (baseRotation && gatherStartRotation && fall <= 0.001) {
        const float = gather > 0.995 ? Math.sin(Date.now() * 0.001 + ((sensor.userData['floatPhase'] as number | undefined) ?? index)) * 0.035 : 0;
        sensor.rotation.set(
          THREE.MathUtils.lerp(gatherStartRotation.x, baseRotation.x, gather) + float * 0.6,
          THREE.MathUtils.lerp(gatherStartRotation.y, baseRotation.y, gather) + Math.sin(Date.now() * 0.0008 + index) * 0.04 * (1 - gather),
          THREE.MathUtils.lerp(gatherStartRotation.z, baseRotation.z, gather) + float,
        );
      }

      if (baseRotation && fallRotation && fall > 0.001) {
        sensor.rotation.set(
          THREE.MathUtils.lerp(baseRotation.x, fallRotation.x, fall),
          THREE.MathUtils.lerp(baseRotation.y, fallRotation.y, fall) + Math.sin(Date.now() * 0.0008 + index) * 0.04 * (1 - fall),
          THREE.MathUtils.lerp(baseRotation.z, fallRotation.z, fall),
        );
      }

      if (
        fieldPosition &&
        typeof fallX === 'number' &&
        typeof fallY === 'number' &&
        typeof fallZ === 'number' &&
        fall > 0.001
      ) {
        sensor.position.x = THREE.MathUtils.lerp(fieldPosition.x, fallX, fall);
        sensor.position.y = THREE.MathUtils.lerp(fieldPosition.y, fallY, fall);
        sensor.position.z = THREE.MathUtils.lerp(fieldPosition.z, fallZ, fall);
      }
    });

    this.updateCenterSensorFall();
  }

  private updateCenterSensorFall(): void {
    if (!this.centerSensor) return;

    const fieldPosition = this.centerSensor.userData['fieldPosition'] as THREE.Vector3 | undefined;
    const fieldRotation = this.centerSensor.userData['fieldRotation'] as THREE.Euler | undefined;
    const fallRotation = this.centerSensor.userData['fallRotation'] as THREE.Euler | undefined;
    const fallX = this.centerSensor.userData['fallX'] as number | undefined;
    const fallY = this.centerSensor.userData['fallY'] as number | undefined;
    const fallZ = this.centerSensor.userData['fallZ'] as number | undefined;
    if (
      !fieldPosition ||
      !fieldRotation ||
      !fallRotation ||
      typeof fallX !== 'number' ||
      typeof fallY !== 'number' ||
      typeof fallZ !== 'number'
    ) return;

    const rawFall = this.getSensorFallProgress(0.18);
    const fall = gsap.parseEase('power2.in')(rawFall);
    if (fall <= 0.001) {
      if (this.sensorFieldReveal.progress > 0.98) {
        const baseRotation = this.centerSensor.userData['baseRotation'] as THREE.Euler | undefined;
        if (baseRotation) {
          const float = Math.sin(Date.now() * 0.001 + 0.7) * 0.035;
          this.centerSensor.rotation.set(baseRotation.x + float * 0.6, baseRotation.y, baseRotation.z + float);
        }
      }
      return;
    }

    this.centerSensor.position.x = THREE.MathUtils.lerp(fieldPosition.x, fallX, fall);
    this.centerSensor.position.y = THREE.MathUtils.lerp(fieldPosition.y, fallY, fall);
    this.centerSensor.position.z = THREE.MathUtils.lerp(fieldPosition.z, fallZ, fall);
    this.centerSensor.rotation.set(
      THREE.MathUtils.lerp(fieldRotation.x, fallRotation.x, fall),
      THREE.MathUtils.lerp(fieldRotation.y, fallRotation.y, fall),
      THREE.MathUtils.lerp(fieldRotation.z, fallRotation.z, fall),
    );
  }

  private getSensorFallProgress(start: number): number {
    return THREE.MathUtils.clamp((this.sensorStarMotion.fall - start) / Math.max(0.001, 1 - start), 0, 1);
  }

  private updateSensorFieldReveal(): void {
    const revealCount = this.sensorFieldMaterialGroups.length;
    if (!revealCount) return;

    this.sensorFieldMaterialGroups.forEach((materials, index) => {
      const opacity = this.getSensorFieldItemRevealProgress(index, revealCount);
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

  private getSensorFieldItemRevealProgress(index: number, count: number): number {
    if (!count) return 0;

    const start = this.sensorFieldRevealStarts[index] ?? Math.random() * 0.62;
    const localProgress = THREE.MathUtils.clamp((this.sensorFieldReveal.progress - start) * 4.2, 0, 1);
    return gsap.parseEase('power2.out')(localProgress);
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
    gsap.to(this.topRotationRig.scale, {
      x: this.getInitialModelScale(),
      y: this.getInitialModelScale(),
      z: this.getInitialModelScale(),
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

    if (progress <= 0.00001) {
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

    const settleProgress = THREE.MathUtils.clamp(progress / this.scrollSpinBackProgress, 0, 1);
    const remaining = 1 - settleProgress;
    this.scrollHandoff.x = this.scrollStartRigRotation.x * remaining;
    this.scrollHandoff.y = this.scrollStartRigRotation.y * remaining;
    this.scrollHandoff.z = this.scrollStartRigRotation.z * remaining;
    this.topRotationRig.rotation.set(this.scrollHandoff.x, this.scrollHandoff.y, this.scrollHandoff.z);
  }

  private syncScrollTimelineWithNativeScroll(): void {
    if (!this.scrollTimeline || !this.scrollTriggerInstance) return;

    const start = this.scrollTriggerInstance.start;
    const end = this.scrollTriggerInstance.end;
    this.scrollProgressTarget =
      window.scrollY <= 2 ? 0 : end > start ? THREE.MathUtils.clamp((window.scrollY - start) / (end - start), 0, 1) : 0;

    const progressDelta = this.scrollProgressTarget - this.scrollProgressCurrent;
    const isNearStart = this.scrollProgressTarget <= 0.00001 && this.scrollProgressCurrent <= 0.006;
    const isNearEnd = this.scrollProgressTarget >= 0.99999 && this.scrollProgressCurrent >= 0.994;

    if (isNearStart || isNearEnd || Math.abs(progressDelta) <= this.scrollSnapThreshold) {
      this.scrollProgressCurrent = this.scrollProgressTarget;
    } else {
      const limitedTarget =
        Math.abs(progressDelta) > this.scrollMaxLag
          ? this.scrollProgressCurrent + Math.sign(progressDelta) * this.scrollMaxLag
          : this.scrollProgressTarget;
      this.scrollProgressCurrent += (limitedTarget - this.scrollProgressCurrent) * this.scrollFollowStrength;
    }

    const visualProgress = this.scrollProgressCurrent;
    this.scrollTimeline.progress(visualProgress);
    this.hero.nativeElement.style.setProperty('--scroll-progress', visualProgress.toFixed(4));
    this.syncProductCtaLayer(visualProgress);
    if (this.nebulaUniforms) {
      this.nebulaUniforms.uProgress.value = visualProgress;
    }

    if (visualProgress > 0.0008) {
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
    const bannerLayout = this.getBannerLayout();
    this.hero.nativeElement.style.setProperty('--banner-action-shift', `${bannerLayout.phoneShiftVw}vw`);
    this.hero.nativeElement.style.setProperty('--banner-content-top', bannerLayout.contentTop);
    this.camera.aspect = viewport.width / viewport.height;
    this.camera.position.z = viewport.width < 900 ? 7.65 : 6.7;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(this.getRenderPixelRatio());
    this.renderer.setSize(viewport.width, viewport.height, false);
    this.updateNebulaBackgroundSize();
    this.scrollTimeline?.invalidate();
    if (this.topRotationRig && window.scrollY <= 2) {
      this.topRotationRig.position.copy(this.getInitialModelPosition());
      this.topRotationRig.scale.setScalar(this.getInitialModelScale());
    }
    if (this.model && window.scrollY <= 2) {
      this.model.rotation.copy(this.getInitialModelRotation());
    }
    if (this.dnaGroup) {
      this.dnaGroup.position.copy(this.getDnaModelPosition());
    }
    window.clearTimeout(this.resizeRefreshId);
    this.resizeRefreshId = window.setTimeout(() => {
      ScrollTrigger.refresh(true);
      ScrollTrigger.update();
      this.scrollTimeline?.invalidate();
      this.syncScrollTimelineWithNativeScroll();
    }, 120);
  }

  private getRenderPixelRatio(): number {
    return Math.min(window.devicePixelRatio, window.innerWidth < 900 ? 1 : 1.5);
  }

  private updateNebulaBackgroundSize(): void {
    if (!this.nebulaBackground || !this.nebulaUniforms) return;

    const distance = Math.abs(this.nebulaBackground.position.z);
    const height = 2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov) / 2) * distance;
    const width = height * this.camera.aspect;

    this.nebulaBackground.scale.set(width, height, 1);
    this.nebulaUniforms.uAspect.value = this.camera.aspect;
  }

  private getViewportSize(): { width: number; height: number } {
    return {
      width: Math.max(320, Math.round(window.visualViewport?.width ?? window.innerWidth)),
      height: Math.max(480, Math.round(window.visualViewport?.height ?? window.innerHeight)),
    };
  }

  startCaptureSequence(): void {
    if (!this.scrollTimeline || !this.scrollTriggerInstance || this.captureFrameId) return;

    const trigger = this.scrollTriggerInstance;
    const start = trigger.start;
    const end = trigger.end;
    const targetTimelineTime = 7.55; // result screen fully visible; stop before any result fade or morph
    const targetProgress = THREE.MathUtils.clamp(targetTimelineTime / this.scrollTimeline.duration(), 0, 1);
    const targetScroll = start + (end - start) * targetProgress;
    const startScroll = Math.max(0, start);
    const runDuration = 15000;

    this.captureTimeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    this.captureTimeoutIds = [];
    // Keep the capture clean while preserving the particles for the normal interactive experience.
    if (this.particles) this.particles.visible = false;
    this.hero.nativeElement.classList.add('is-capture-running', 'is-capture-faded');
    window.scrollTo({ top: startScroll, left: 0, behavior: 'auto' });
    this.applyCaptureProgress(0);

    const fadeInId = window.setTimeout(() => {
      this.hero.nativeElement.classList.remove('is-capture-faded');
      const holdId = window.setTimeout(() => {
        const startedAt = performance.now();
        const animateCapture = (now: number) => {
          const progress = THREE.MathUtils.clamp((now - startedAt) / runDuration, 0, 1);
          const easedProgress = progress * progress * (3 - 2 * progress);
          const scrollTop = startScroll + (targetScroll - startScroll) * easedProgress;
          window.scrollTo({ top: scrollTop, left: 0, behavior: 'auto' });
          this.applyCaptureProgress(targetProgress * easedProgress);

          if (progress < 1) {
            this.captureFrameId = requestAnimationFrame(animateCapture);
          } else {
            this.captureFrameId = 0;
            this.hero.nativeElement.classList.add('is-capture-faded');
          }
        };

        this.captureFrameId = requestAnimationFrame(animateCapture);
      }, 3000);
      this.captureTimeoutIds.push(holdId);
    }, 3000); // 0.9s fade-to-black, then a 2s fully-dark hold
    this.captureTimeoutIds.push(fadeInId);
  }

  private applyCaptureProgress(progress: number): void {
    this.scrollProgressCurrent = progress;
    this.scrollProgressTarget = progress;
    this.scrollTimeline?.progress(progress);
    this.hero.nativeElement.style.setProperty('--scroll-progress', progress.toFixed(4));
    this.syncProductCtaLayer(progress);
    if (this.nebulaUniforms) this.nebulaUniforms.uProgress.value = progress;
  }

  private getBannerLayout(): { phoneShiftVw: number; readerX: number; contentTop: string } {
    const viewport = this.getViewportSize();
    const compact = viewport.width < 760;
    const tablet = viewport.width < 1100;

    return {
      phoneShiftVw: compact ? 0 : 18,
      readerX: compact ? 0 : tablet ? 0.75 : viewport.width < 1400 ? 1.2 : 1.55,
      contentTop: '10dvh',
    };
  }

  private syncProductCtaLayer(progress: number): void {
    const duration = this.scrollTimeline?.duration() ?? 1;
    const timelineTime = progress * duration;
    this.hero.nativeElement.classList.toggle('is-product-cta', timelineTime >= 8.9 && timelineTime <= 10.72);
  }

  private getScaledFrameSize(aspect: number, maxWidthRatio: number, maxHeightRatio: number): { width: number; height: number } {
    const viewport = this.getViewportSize();
    const maxWidth = viewport.width * maxWidthRatio;
    const maxHeight = viewport.height * maxHeightRatio;
    let width = maxHeight * aspect;
    let height = maxHeight;

    if (width > maxWidth) {
      width = maxWidth;
      height = width / aspect;
    }

    return {
      width: Math.round(width),
      height: Math.round(height),
    };
  }

  private getScaledFrame(aspect: number, maxWidthRatio: number, maxHeightRatio: number): { width: string; height: string } {
    const frame = this.getScaledFrameSize(aspect, maxWidthRatio, maxHeightRatio);

    return {
      width: `${frame.width}px`,
      height: `${frame.height}px`,
    };
  }

  private getDeviceContentScale(kind: 'desktop' | 'laptop' | 'phone'): string {
    const viewport = this.getViewportSize();
    const compact = viewport.width < 760;
    const short = viewport.height < 680;
    const frame =
      kind === 'desktop'
        ? this.getScaledFrameSize(16 / 9, compact ? 0.88 : 0.58, short ? 0.64 : 0.7)
        : kind === 'laptop'
          ? this.getScaledFrameSize(16 / 10, compact ? 0.94 : 0.74, short ? 0.66 : 0.72)
          : this.getScaledFrameSize(9 / 16, compact ? 0.64 : 0.25, short ? 0.52 : 0.62);

    const divisor =
      kind === 'desktop'
        ? { width: 57, height: 32 }
        : kind === 'laptop'
          ? { width: 48, height: 30 }
          : { width: 20.5, height: 36.5 };
    const scale = Math.min(frame.width / divisor.width, frame.height / divisor.height);
    const min = kind === 'phone' ? 11 : 11;
    const max = kind === 'desktop' ? 28 : kind === 'laptop' ? 26 : 22;

    return `${THREE.MathUtils.clamp(scale, min, max).toFixed(2)}px`;
  }

  private getInitialModelPosition(): THREE.Vector3 {
    const width = this.getViewportSize().width;
    const portraitProgress = this.getPortraitProgress();

    if (portraitProgress > 0) {
      return new THREE.Vector3(0, -0.2, 0);
    }

    if (width < 760) return new THREE.Vector3(1.55, -0.18, 0);
    if (width < 1100) return new THREE.Vector3(0.82, -0.12, 0);
    if (width < 1400) return new THREE.Vector3(1.05, -0.08, 0);
    return this.initialModelPosition;
  }

  private getSensorSequenceModelPosition(): THREE.Vector3 {
    const width = this.getViewportSize().width;
    const portraitProgress = this.getPortraitProgress();
    const actionOffset = this.getBannerLayout().readerX;

    if (portraitProgress > 0) {
      return new THREE.Vector3(
        THREE.MathUtils.lerp(0, actionOffset - 0.36, portraitProgress),
        THREE.MathUtils.lerp(-1.48, -1.66, portraitProgress),
        0,
      );
    }

    if (width < 760) return new THREE.Vector3(0.02, -1.62, 0);
    if (width < 1100) return new THREE.Vector3(0.02 + actionOffset, -1.5, 0);
    if (width < 1400) return new THREE.Vector3(actionOffset, -1.44, 0);
    return new THREE.Vector3(actionOffset, -1.4, 0);
  }

  private getSampleDropModelPosition(cartridgeX: number): THREE.Vector3 {
    return this.getSensorSequenceModelPosition();
  }

  private getScrollModelPosition(): THREE.Vector3 {
    return this.getSensorSequenceModelPosition();
  }

  private getInitialModelScale(): number {
    const width = this.getViewportSize().width;

    if (width > 768) return 1;
    if (width >= 568) return THREE.MathUtils.lerp(0.76, 0.92, (768 - width) / 200);
    if (width >= 400) return THREE.MathUtils.lerp(0.92, 0.98, (568 - width) / 168);
    return 1;
  }

  private getSensorSequenceModelScale(): number {
    const width = this.getViewportSize().width;
    if (width < 760) return 0.72;
    if (width < 1100) return 0.66;
    return 0.62;
  }

  private getSensorEntryX(): number {
    return this.cartridgePulledX + (this.getViewportSize().width < 760 ? 3.2 : 5.4);
  }

  private getCenteredInsertedModelPosition(): THREE.Vector3 {
    return this.getSensorSequenceModelPosition();
  }

  private getPostSensorModelPosition(): THREE.Vector3 {
    return this.isMobileLayout() ? this.getInitialModelPosition() : this.getDeviceModelPosition('phone');
  }

  private getPostSensorModelRotation(): THREE.Euler {
    return this.isMobileLayout() ? this.getInitialModelRotation() : this.getDeviceModelRotation('phone');
  }

  private getPostSensorModelScale(): number {
    return this.isMobileLayout() ? this.getInitialModelScale() : this.getDeviceModelScale('phone');
  }

  private getInitialModelRotation(): THREE.Euler {
    const portraitProgress = this.getPortraitProgress();

    if (portraitProgress <= 0) return this.initialModelRotation;

    return new THREE.Euler(
      THREE.MathUtils.lerp(this.initialModelRotation.x, 0.42, portraitProgress),
      THREE.MathUtils.lerp(this.initialModelRotation.y, -0.22, portraitProgress),
      THREE.MathUtils.lerp(this.initialModelRotation.z, -1.08, portraitProgress),
    );
  }

  private getSensorSequenceModelRotation(): THREE.Euler {
    const portraitProgress = this.getPortraitProgress();

    const straightRotation = new THREE.Euler(this.initialModelRotation.x, 0, 0);

    if (portraitProgress <= 0) return straightRotation;

    return new THREE.Euler(
      THREE.MathUtils.lerp(straightRotation.x, 0.34, portraitProgress),
      THREE.MathUtils.lerp(straightRotation.y, -0.1, portraitProgress),
      THREE.MathUtils.lerp(straightRotation.z, 0.04, portraitProgress),
    );
  }

  private getScrollModelRotation(): THREE.Euler {
    return this.getSensorSequenceModelRotation();
  }

  private getPortraitProgress(): number {
    const width = this.getViewportSize().width;
    return THREE.MathUtils.clamp((768 - width) / 368, 0, 1);
  }

  private isMobileLayout(): boolean {
    const viewport = this.getViewportSize();
    return viewport.width <= 900 || viewport.height > viewport.width;
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
      return this.getScaledFrame(16 / 9, compact ? 0.88 : 0.58, short ? 0.64 : 0.7);
    }

    if (kind === 'laptop') {
      return this.getScaledFrame(16 / 10, compact ? 0.94 : 0.74, short ? 0.66 : 0.72);
    }

    if (kind === 'tablet') {
      return this.getScaledFrame(3 / 4, compact ? 0.5 : 0.32, short ? 0.64 : 0.68);
    }

    return this.getScaledFrame(9 / 16, compact ? 0.6 : 0.24, short ? 0.56 : 0.64);
  }

  private getBannerPhoneFrame(): { width: string; height: string } {
    const viewport = this.getViewportSize();
    const compact = viewport.width < 760;
    const short = viewport.height < 680;

    return this.getScaledFrame(9 / 16, compact ? 0.64 : 0.25, short ? 0.52 : 0.62);
  }

  private getBannerPhoneOffsetY(): string {
    const viewport = this.getViewportSize();
    if (viewport.width < 760) return '-12vh';
    if (viewport.height < 680) return '-12vh';
    return '-15vh';
  }

  private getDeviceModelPosition(kind: 'desktop' | 'laptop' | 'tablet' | 'phone'): THREE.Vector3 {
    const width = this.getViewportSize().width;
    const compactOffset = width < 760 ? 0.02 : 0;
    const actionOffset = this.getBannerLayout().readerX;
    const positions = {
      desktop: new THREE.Vector3(0 + compactOffset + actionOffset, 0.08, 0),
      laptop: new THREE.Vector3(0 + compactOffset + actionOffset, 0.08, 0),
      tablet: new THREE.Vector3(-0.06 + compactOffset + actionOffset, 0.11, 0),
      phone: new THREE.Vector3(-0.05 + compactOffset + actionOffset, -0.18, 0),
    };

    return positions[kind];
  }

  private getFinalDeviceModelPosition(): THREE.Vector3 {
    const viewport = this.getViewportSize();
    const readerX = this.getBannerLayout().readerX;
    if (viewport.width < 760) return new THREE.Vector3(0, 0.08, 0);

    return new THREE.Vector3(readerX, 0.08, 0);
  }

  private getSceneExitModelPosition(): THREE.Vector3 {
    const position = this.getFinalDeviceModelPosition();
    position.y += this.getViewportSize().width < 760 ? 3.4 : 4.15;
    return position;
  }

  private getDeviceModelRotation(kind: 'desktop' | 'laptop' | 'tablet' | 'phone'): THREE.Euler {
    if (kind === 'tablet' || kind === 'phone') {
      return new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
    }

    return this.initialModelRotation;
  }

  private getFinalDeviceModelScale(): number {
    const viewport = this.getViewportSize();
    if (viewport.width < 760) return 0.56;
    if (viewport.width < 1100) return 0.58;

    return 0.6;
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
      desktop: 0.54 * base,
      laptop: 0.48 * base,
      tablet: 0.34 * base,
      phone: 0.21 * base,
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
