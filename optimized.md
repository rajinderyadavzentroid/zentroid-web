Zentroid Studios Next.js 3D Model Optimization Notes

1. Main Problem

The website was slow and sometimes crashed because multiple .glb 3D models were being loaded and rendered at the same time.

This caused:
- Slow page loading
- Browser freezing
- Mobile Safari crash issue
- WebGL memory issues
- Multiple loaders showing at once
- Hero model disappearing after scrolling


2. Main Changes Made

We optimized the 3D model loading flow without changing the website design or user flow.

The main improvements are:

- Only one main 3D model renders in the hero section.
- Only one selected 3D model renders in the 3D Models Showcase section.
- Thumbnail cards use PNG images instead of loading GLB models.
- Model loading is protected from fast repeated clicks.
- Next and Previous buttons are disabled while a model is loading.
- Hero model can recover if WebGL context is lost.
- Loader text was simplified to only show "Zentroid Studios".
- Removed the "Loading 3D model..." line.
- Fixed double loader issue.
- Added mobile-safe click protection.


3. Hero Section Fix

Problem:
When the user scrolled down and came back to the first section, the hero 3D model sometimes disappeared.

Fix:
We added a heroKey state.

When the page becomes visible again or restores from browser cache, we increase heroKey.

This forces the hero ModelViewer to remount safely.

Code concept:

const [heroKey, setHeroKey] = useState(0);

<ModelViewer key={heroKey} />

This helps reload the hero model if WebGL is lost or paused by the browser.


4. Showcase Section Fix

Problem:
In the 3D Models Showcase section, users clicked multiple thumbnails or next/previous arrows very fast.

On mobile, this caused Safari/WebView to crash with:
"A problem repeatedly occurred"

Fix:
We added modelLoading state.

When a model is changing:
- modelLoading becomes true
- thumbnails are disabled
- next/previous buttons are disabled
- user cannot trigger another model load
- after model load completes, modelLoading becomes false

Code concept:

const [modelLoading, setModelLoading] = useState(false);

if (modelLoading) return;

This prevents multiple GLB files from loading at the same time.


5. Safe Model Selection

We created a safeSelectModel function.

Its purpose:
- Prevent repeated model switching
- Ignore clicks while loading
- Ignore clicks on already selected model
- Update selected model safely
- Trigger showcase remount using showcaseKey

Code concept:

const safeSelectModel = (index) => {
  if (modelLoading) return;
  if (index === selectedModel) return;

  setModelLoading(true);
  setSelectedModel(index);
  setShowcaseKey((prev) => prev + 1);

  setTimeout(() => {
    setModelLoading(false);
  }, 1200);
};

This protects desktop and mobile from multiple heavy 3D loads.


6. Next and Previous Button Protection

Problem:
Fast clicking on next arrow caused multiple models to load together.

Fix:
Next and previous buttons check modelLoading first.

Code concept:

const handleNext = () => {
  if (modelLoading) return;
  safeSelectModel((selectedModel + 1) % models.length);
};

const handlePrev = () => {
  if (modelLoading) return;
  safeSelectModel((selectedModel - 1 + models.length) % models.length);
};

Buttons are also disabled while loading:

disabled={modelLoading}


7. Loader Fix

Problem:
Sometimes two loaders appeared at the same time.

Reason:
There was one loader from Next dynamic import and another loader inside React Three Fiber Suspense.

Fix:
We changed dynamic import loader to return null.

Code concept:

const ModelViewer = dynamic(() => import("@/src/component/ModelViewer"), {
  ssr: false,
  loading: () => null,
});

Now only the Suspense loader inside ModelViewer is shown.

We also removed this line:

Loading 3D model...

Now loader only shows:

Zentroid Studios


8. ModelViewer Component Functionality

ModelViewer handles:
- Rendering the GLB file
- Creating the Canvas
- Adding lights
- Adding OrbitControls
- Handling WebGL context loss
- Showing loader while model loads
- Calling onLoaded when model is ready

Important settings:

frameloop="always"

This keeps the model animation and controls working.

dpr={[1, 1.15]}

This lowers GPU usage, especially on mobile.

antialias: false

This improves performance.

preserveDrawingBuffer: false

This reduces memory usage.

enablePan={false}

This stops model position from shifting.

enableDamping={false}

This avoids unnecessary animation calculations.

target={[0, 0, 0]}

This keeps the model centered.


9. WebGL Recovery

Problem:
Mobile browsers may lose WebGL context when memory is high.

Fix:
We listen for webglcontextlost.

When this happens:
- prevent default browser behavior
- increase recoverKey
- remount Canvas

Code concept:

canvas.addEventListener("webglcontextlost", handleLost, false);

setRecoverKey((prev) => prev + 1);

This helps recover the 3D model instead of leaving blank space.


10. Thumbnail Optimization

Before:
Each thumbnail could load a 3D model.

After:
Thumbnails use PNG images.

Example:

<img src={model.poster} alt={model.name} />

This is much faster and safer.

Required files:

public/models/fendi-bag.png
public/models/north-face-base-camp-rolling.png
public/models/gaming-chair-compressed.png
public/models/nike-air-sneakers.png
public/models/kuboraum-sun.png
public/models/graham-fortress.png


11. GLB Files Required

The actual 3D viewer still needs GLB files.

Required files:

public/models/fendi-bag.glb
public/models/north-face-base-camp-rolling.glb
public/models/gaming-chair-compressed.glb
public/models/nike-air-sneakers.glb
public/models/kuboraum-sun.glb
public/models/graham-fortress.glb

If any GLB file name does not match, the website will show 404 error.


12. Final Behavior

Hero Section:
- Shows one 3D model.
- Model remains interactive.
- Model can recover if browser loses WebGL.
- Model reloads safely when returning to page.

3D Models Showcase:
- Shows one selected 3D model.
- Shows PNG thumbnails for all models.
- User can select models.
- User can use next and previous arrows.
- Fast repeated clicks are blocked.
- Mobile crash risk is reduced.
- Only one GLB loads at a time.

Loader:
- Shows centered animated loader.
- Text says "Zentroid Studios".
- No duplicate loader.
- No "Loading 3D model..." line.

Mobile:
- Uses lower canvas pixel ratio.
- Blocks repeated clicks during loading.
- Prevents multiple GLB loads.
- Reduces Safari/WebView crash risk.


13. Why This Works

The biggest reason for crashes was multiple heavy GLB files loading quickly.

Now:
- Model switching is controlled.
- Buttons are locked while loading.
- Only one active model loads.
- WebGL canvas has recovery handling.
- GPU usage is reduced.
- Thumbnail previews do not use WebGL.

This keeps the same website flow but makes it more stable and faster.


14. Recommended Extra Step

Compress all GLB files for best performance.

Command:

npm install @gltf-transform/cli draco3dgltf

Then:

npx gltf-transform optimize input.glb output.glb --compress draco

This can reduce large model size significantly and improve mobile stability.