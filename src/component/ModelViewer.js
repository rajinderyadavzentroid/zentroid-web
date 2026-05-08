import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds } from "@react-three/drei";
import { Suspense, memo } from "react";

function Model({ path, scale, position }) {
  const { scene } = useGLTF(path);

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      dispose={null}
    />
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
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{ position: cameraPosition, fov }}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <Model path={path} scale={scale} position={position} />
        </Bounds>
      </Suspense>

      <OrbitControls
        enableZoom={enableZoom}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </Canvas>
  );
}

export default memo(ModelViewer);