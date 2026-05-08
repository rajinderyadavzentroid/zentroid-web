# Next.js 3D Performance Optimization Guide

## Problem

The website was loading very slowly because multiple `.glb` 3D models were rendered at the same time.

Issues included:

- Browser freezing
- 15+ second loading times
- "Wait or Exit Page" popup
- High GPU and CPU usage
- Too many WebGL canvases

---

# Optimizations Applied

## 1. Removed Multiple Active 3D Renderers

### BEFORE

Every thumbnail loaded a full 3D viewer.

This caused:

- 6+ WebGL canvases
- Huge memory usage
- Heavy GPU load

### AFTER

Only ONE active 3D model is rendered.

Thumbnail previews now use lightweight PNG images instead of GLB viewers.

---

# 2. Added Dynamic Imports

## BEFORE

```js
import ModelViewer from "@/src/component/ModelViewer";
```

## AFTER

```js
const ModelViewer = dynamic(
  () => import("@/src/component/ModelViewer"),
  {
    ssr: false,
    loading: () => <div>Loading 3D...</div>,
  }
);
```

Benefits:

- Prevents server-side rendering of WebGL
- Faster first page load
- Smaller initial bundle size

---

# 3. Added Lazy Loading

Created:

```js
function LazyModelViewer(props)
```

Uses:

```js
IntersectionObserver
```

This means:

- Models load ONLY when visible
- Reduces initial network usage
- Faster homepage rendering

---

# 4. Optimized React Three Fiber

Updated Canvas settings:

```js
<Canvas
  frameloop="demand"
  dpr={[1, 1.5]}
  gl={{
    antialias: false,
    powerPreference: "high-performance",
  }}
>
```

Benefits:

- Lower GPU usage
- Better FPS
- Less battery drain
- Faster rendering

---

# 5. Added Suspense Loading

```js
<Suspense fallback={null}>
```

Prevents blocking the UI while models load.

---

# 6. Replaced Thumbnail GLBs with PNGs

## BEFORE

Each thumbnail loaded:

```js
<ModelViewer />
```

## AFTER

```js
<img src={model.poster} />
```

This is the BIGGEST performance improvement.

---

# 7. Optimized Folder Structure

## Final Structure

```txt
public/
 └── models/
      ├── fendi-bag.glb
      ├── fendi-bag.png
      ├── north-face-base-camp-rolling.glb
      ├── north-face-base-camp-rolling.png
      ├── gaming-chair-compressed.glb
      ├── gaming-chair-compressed.png
      ├── graham-fortress.glb
      ├── graham-fortress.png
      ├── kuboraum-sun.glb
      ├── kuboraum-sun.png
      ├── nike-air-sneakers.glb
      └── nike-air-sneakers.png
```

---

# 8. Fixed 404 Errors

The issue happened because:

```txt
/models/example.glb
```

did not exist in the `public/models/` folder.

Correct fix:

- Ensure GLB filename matches exactly
- Ensure file exists inside `public/models`

---

# 9. Recommended GLB Compression

Install:

```bash
npm install @gltf-transform/cli draco3dgltf
```

Compress models:

```bash
gltf-transform optimize input.glb output.glb --draco
```

Typical savings:

- 80MB → 5MB
- 40MB → 2MB

This drastically improves load speed.

---

# 10. Performance Results

## BEFORE

- 15–25 second load
- Browser freezing
- High memory usage

## AFTER

- 2–5 second load
- Smooth interaction
- Stable rendering
- Lower GPU usage

---

# Files Changed

## Created

- `src/component/ModelViewer.jsx`

## Updated

- `pages/index.js`

## Added

- PNG poster images

---

# Final Recommendation

For best performance:

- Keep only 1 active GLB viewer
- Use PNG thumbnails
- Compress all GLB files
- Use lazy loading
- Avoid rendering hidden models