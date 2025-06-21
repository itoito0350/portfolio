import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { HeaderContainer }from "../styles/HeaderStyles";




const Polygon3D = () => {
  const [size, setSize] = React.useState({ width: window.innerWidth, height: window.innerHeight });
  const [positionX, setPositionX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setSize({ width, height: window.innerHeight });

      if (width > 1024) {
        setPositionX(-2); // En pantallas grandes -> mover a la izquierda
      } else {
        setPositionX(0); // En móviles/laptops -> posición centrada
      }
    };

    handleResize(); // Ejecutar al inicio
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderContainer>
      <Canvas
        camera={{
          position: [3, 3, 5], 
          fov: 50,
          aspect: size.width / size.height,
          near: 0.1,
          far: 1000,
        }}
      >
        <OrbitControls enableZoom={false} />

        {/* Luces */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* Donuts entrelazados con posición dinámica */}
        <group position={[positionX, 0, 0]}>
          <WireframeDonuts />
        </group>
      </Canvas>
    </HeaderContainer>
  );
};

const WireframeDonuts = () => {
  const donut1Ref = useRef();
  const donut2Ref = useRef();

  useFrame(() => {
    if (donut1Ref.current && donut2Ref.current) {
      donut1Ref.current.rotation.y += 0.01;
      donut2Ref.current.rotation.y -= 0.01;
    }
  });

  return (
    <>
      {/* Primer donut */}
      <group ref={donut1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <lineSegments>
          <edgesGeometry attach="geometry" args={[new THREE.TorusGeometry(1.2, 0.3, 16, 100)]} />
          <lineBasicMaterial attach="material" color="rgba(255, 255, 255, 0.8)" />
        </lineSegments>
      </group>

      {/* Segundo donut */}
      <group ref={donut2Ref} rotation={[-Math.PI / 4, 0, 0]}>
        <lineSegments>
          <edgesGeometry attach="geometry" args={[new THREE.TorusGeometry(1, 0.3, 16, 100)]} />
          <lineBasicMaterial attach="material" color="rgba(255, 255, 255, 0.8)" />
        </lineSegments>
      </group>
    </>
  );
};

export default Polygon3D;