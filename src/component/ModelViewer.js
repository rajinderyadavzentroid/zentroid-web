import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Suspense, memo, useEffect, useState } from "react";

export function ZentroidLoader() {
  return (
    <div className="zentroid-loader">
      <div className="zentroid-loader-ring" />
      <div className="zentroid-loader-text">Zentroid Studios</div>
      {/* <div className="zentroid-loader-sub">Loading 3D model...</div> */}
    </div>
  );
}

function Model({ path, scale, position, rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(path);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = false;
      }
    });
  }, [scene]);

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
  enableZoom = true,
  autoRotate = true,
}) {
  const [webglError, setWebglError] = useState(false);

  if (webglError) {
    return <ZentroidLoader />;
  }

  return (
    <div className="model-viewer-safe">
      <Canvas
        frameloop="always"
        dpr={[1, 1.25]}
        camera={{
          position: cameraPosition,
          fov,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        onCreated={({ gl, camera }) => {
          camera.lookAt(0, 0, 0);
          gl.domElement.addEventListener("webglcontextlost", (event) => {
            event.preventDefault();
            setWebglError(true);
          });
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
          />
        </Suspense>

        <OrbitControls
          target={[0, 0, 0]}
          enableZoom={enableZoom}
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