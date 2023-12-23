import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
export default function Experience() {
  const boxRef = useRef();
  useFrame((state, delta) => {
    boxRef.current.rotation.y += delta * 0.8;
  });
  return (
    <mesh ref={boxRef} scale={1}>
      {/* <icosahedronGeometry /> */}
      <tetrahedronGeometry />
      {/* eslint-disable-next-line */}
      <meshStandardMaterial wireframe />
    </mesh>
  );
}
