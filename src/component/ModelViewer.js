import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Suspense, memo, useEffect, useState } from "react";

export function ZentroidLoader() {
  return (
    <div className="zentroid-loader">
      <div className="zentroid-loader-ring" />
      <div className="zentroid-loader-text">Zentroid Studios</div>
    </div>
  );
}

function Model({ path, scale, position, rotation = [0, 0, 0], onLoaded }) {
  const { scene } = useGLTF(path);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = false;
      }
    });

    onLoaded?.();
  }, [scene, onLoaded]);

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
      dispose={null}
    />
  );
}

function ModelFallback() {
  return (
    <Html center>
      <ZentroidLoader />
    </Html>
  );
}

function ModelViewer({
  path,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  cameraPosition = [0, 1, 8],
  fov = 25,
  enableZoom = false,
  autoRotate = true,
  onLoaded,
}) {
  const [recoverKey, setRecoverKey] = useState(0);

  return (
    <div className="model-viewer-safe">
      <Canvas
        key={recoverKey}
        frameloop="always"
        dpr={[1, 2]}
        camera={{
          position: cameraPosition,
          fov,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        onCreated={({ gl, camera }) => {
          camera.lookAt(0, 0, 0);

          const canvas = gl.domElement;

          const handleLost = (event) => {
            event.preventDefault();
            setTimeout(() => {
              setRecoverKey((prev) => prev + 1);
            }, 300);
          };

          canvas.addEventListener("webglcontextlost", handleLost, false);
        }}
      >
        <ambientLight intensity={1.25} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />

        <Suspense fallback={<ModelFallback />}>
          <Model
            path={path}
            scale={scale}
            position={position}
            rotation={rotation}
            onLoaded={onLoaded}
          />
        </Suspense>

        <OrbitControls
          target={[0, 0, 0]}
          enableZoom={false}
          enablePan={false}
          enableDamping={false}
          autoRotate={autoRotate}
          autoRotateSpeed={0.7}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}

export default memo(ModelViewer);


// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import { Suspense, memo, useEffect, useState } from "react";

// export function ZentroidLoader() {
//   return (
//     <div className="zentroid-loader">
//       <div className="zentroid-loader-ring" />
//       <div className="zentroid-loader-text">Zentroid Studios</div>
//     </div>
//   );
// }

// function Model({ path, scale, position, rotation = [0, 0, 0], onLoaded }) {
//   const { scene } = useGLTF(path);

//   useEffect(() => {
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         child.frustumCulled = false;
//       }
//     });

//     onLoaded?.();
//   }, [scene, onLoaded]);

//   return (
//     <primitive
//       object={scene}
//       scale={scale}
//       position={position}
//       rotation={rotation}
//       dispose={null}
//     />
//   );
// }

// function ModelFallback() {
//   return (
//     <Html center>
//       <ZentroidLoader />
//     </Html>
//   );
// }

// function ModelViewer({
//   path,
//   scale = 1,
//   position = [0, 0, 0],
//   rotation = [0, 0, 0],
//   cameraPosition = [0, 1, 8],
//   fov = 25,
//   enableZoom = true,
//   autoRotate = true,
//   onLoaded,
// }) {
//   const [recoverKey, setRecoverKey] = useState(0);

//   return (
//     <div className="model-viewer-safe">
//       <Canvas
//         key={recoverKey}
//         frameloop="always"
//         dpr={[1, 1.15]}
//         camera={{
//           position: cameraPosition,
//           fov,
//           near: 0.1,
//           far: 1000,
//         }}
//         gl={{
//           antialias: false,
//           alpha: true,
//           powerPreference: "high-performance",
//           preserveDrawingBuffer: false,
//         }}
//         onCreated={({ gl, camera }) => {
//           camera.lookAt(0, 0, 0);

//           const canvas = gl.domElement;

//           const handleLost = (event) => {
//             event.preventDefault();
//             setTimeout(() => {
//               setRecoverKey((prev) => prev + 1);
//             }, 300);
//           };

//           canvas.addEventListener("webglcontextlost", handleLost, false);
//         }}
//       >
//         <ambientLight intensity={1.25} />
//         <directionalLight position={[5, 5, 5]} intensity={1.4} />

//         <Suspense fallback={<ModelFallback />}>
//           <Model
//             path={path}
//             scale={scale}
//             position={position}
//             rotation={rotation}
//             onLoaded={onLoaded}
//           />
//         </Suspense>

//         <OrbitControls
//           target={[0, 0, 0]}
//           enableZoom={enableZoom}
//           enablePan={false}
//           enableDamping={false}
//           autoRotate={autoRotate}
//           autoRotateSpeed={0.7}
//           minPolarAngle={Math.PI / 3.2}
//           maxPolarAngle={Math.PI / 1.8}
//         />
//       </Canvas>
//     </div>
//   );
// }

// export default memo(ModelViewer);