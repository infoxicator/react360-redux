// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.6, 0);
  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.6, 0);
  r360.renderToSurface(
    r360.createRoot('LeftPanel'),
    leftPanel,
  );
  r360.renderToSurface(
    r360.createRoot('RightPanel'),
    rightPanel,
  );
  r360.renderToLocation(
    r360.createRoot('CenterPanel'),
    new Location([0, -2, -10]),
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
