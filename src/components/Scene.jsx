// Import dependencies
import React, { useRef } from "react";
import { CameraControls, useHelper } from "@react-three/drei";
import * as THREE from "three";
// Import components
import GlassTest from "../assets/glasses/GlassTest";
import { DirectionalLight } from "three";

export default function Scene() {
  // refs
  const directionalLight = useRef();

  // helpers
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <CameraControls />
      <directionalLight
        position={[0, 8, 20]}
        intensity={1}
        color={"red"}
        ref={directionalLight}
      />

      <ambientLight intensity={1} color={"green"} />
      <GlassTest scale={1} position={[0, 0, 0]} />
      {/* <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh> */}
    </>
  );
}
