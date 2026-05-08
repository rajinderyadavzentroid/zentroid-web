import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds, Html } from "@react-three/drei";
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

function Model({ path, scale, position }) {
  const { scene } = useGLTF(path);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
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
  cameraPosition = [0, 1, 8],
  fov = 25,
  enableZoom = true,
}) {
  const [webglAllowed, setWebglAllowed] = useState(true);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const lowMemory =
      typeof navigator !== "undefined" &&
      navigator.deviceMemory &&
      navigator.deviceMemory <= 3;

    if (isMobile && lowMemory) {
      setWebglAllowed(false);
    }
  }, []);

  if (!webglAllowed) {
    return <ZentroidLoader />;
  }

  return (
    <div className="model-viewer-safe">
      <Canvas
        frameloop="demand"
        dpr={[1, 1.25]}
        camera={{ position: cameraPosition, fov }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />

        <Suspense fallback={<ModelFallback />}>
          <Bounds fit clip observe margin={1.2}>
            <Model path={path} scale={scale} position={position} />
          </Bounds>
        </Suspense>

        <OrbitControls
          enableZoom={enableZoom}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.7}
        />
      </Canvas>
    </div>
  );
}

export default memo(ModelViewer);