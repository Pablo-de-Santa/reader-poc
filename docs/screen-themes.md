# Simulated app screen themes

Only `.device-screen` and the app content inside it use the day/night palette.
The outer landing page, reader, device frames, and product calls to action keep
their existing presentation. Phone, tablet, and laptop stages share one theme.

`screens/screen-theme.service.ts` requests browser location automatically once
when the hero is created. Until location is available, and if it is denied,
unavailable, or times out after eight seconds, the screen uses seasonal hours.
The browser controls whether it displays a permission prompt; geolocation needs
HTTPS in production (localhost is allowed for development).

With a valid location, [SunCalc](https://github.com/mourner/suncalc) computes
sunrise and sunset locally. Coordinates remain in memory for this page view.
They are not stored or sent to a sunrise API. Light mode begins at sunrise;
dark mode begins at sunset. Polar day stays light, and polar night stays dark.

Without location, use these local-clock light-mode windows:

| Season | Months (northern hemisphere) | Light mode |
| --- | --- | --- |
| Winter | December–February | 7:00am–5:00pm |
| Spring | March–May | 6:30am–7:30pm |
| Summer | June–August | 6:00am–9:00pm |
| Fall | September–November | 7:00am–6:00pm |

All remaining hours use dark mode. The browser's clock applies its time zone and
daylight saving changes. Unknown locations default to northern seasons; if a
southern location is known but solar calculation fails, the fallback seasons reverse.
The service recalculates every 30 seconds and on page/visibility restoration,
so a boundary is reflected within 30 seconds in an active tab.

## Updating the screen design

`screens/device-screens.scss` owns app-content styling and light/dark color tokens.
`data-screen-theme` on `.device-screen` is the theme boundary. Keep future app
reference layouts within this boundary. If replacing HTML with actual screenshots,
provide separate light and dark images; CSS tokens cannot recolor a screenshot.

## Verification

- `screen-daylight.spec.ts`: seasonal boundaries, solar boundaries, time zones,
  invalid locations, and polar day/night.
- `screen-theme.service.spec.ts`: automatic requests, permission/error fallback,
  periodic updates, waking tabs, and cleanup.
- `node scripts/check-device-screens.mjs`: simulated browser locations exercise
  both themes at mobile and desktop viewport sizes, verify every device stage,
  check that the outer site keeps its colors, and capture headline/Bluetooth previews.

Browser output is written to `../artifacts/device-screens/`.
