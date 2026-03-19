import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, ContactShadows, Clone } from "@react-three/drei";

function Model({ path, scale, position, isInteracting }) {
  const { scene } = useGLTF(path);
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current && !isInteracting) ref.current.rotation.y += delta * 0.4;
  });
  return <Clone ref={ref} object={scene} scale={scale} position={position} />;
}

function ThumbModel({ path, scale, position }) {
  const { scene } = useGLTF(path);
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.6;
  });
  return <Clone ref={ref} object={scene} scale={scale} position={position} />;
}

export function ModelThumb({ path, scale = 3, position = [0, 0, 0], cameraPosition = [0, 1, 3], fov = 55 }) {
  return (
    <Canvas
      camera={{ position: cameraPosition, fov: fov }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <ThumbModel path={path} scale={scale} position={position} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}

export default function ModelViewer({
  path,
  scale = 3,
  position = [0, 0, 0],
  cameraPosition = [0, 1, 3],
  fov = 55,
}) {
  const [isInteracting, setIsInteracting] = useState(false);
  return (
    <Canvas
      camera={{ position: cameraPosition, fov: fov }}
      style={{ width: "100%", height: "100%", background: "transparent", cursor: "grab" }}
      onPointerDown={() => setIsInteracting(true)}
      onPointerUp={() => setIsInteracting(false)}
      onPointerLeave={() => setIsInteracting(false)}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model path={path} scale={scale} position={position} isInteracting={isInteracting} />
        <Environment preset="city" />
        <ContactShadows position={[0, position[1] - 1, 0]} opacity={0.4} scale={6} blur={2} />
      </Suspense>
      <OrbitControls enableZoom={true} enablePan={true} />
    </Canvas>
  );
}
