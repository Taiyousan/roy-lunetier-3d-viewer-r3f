// Import dependencies
import { CameraControls } from "@react-three/drei";

// Import components
import GlassTest from "../assets/glasses/GlassTest";

export default function Scene() {
  return (
    <>
      <CameraControls />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      <ambientLight intensity={0.5} />
      <GlassTest scale={1} position={[0, 0, 0]} />
      {/* <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh> */}
    </>
  );
}
