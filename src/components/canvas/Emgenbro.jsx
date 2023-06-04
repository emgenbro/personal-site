import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Interface from "../Interface";
import { useCharacterAnimations } from "./../CharacterAnimator";
import Damon from "../Emgenbrosalsa";

import CanvasLoader from "../Loader";

const Emgenbro = ({ isMobile }) => {
  return (

    <mesh>
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <group
        position={isMobile ? [0, -1, -2.2] : [0.1, -3.1, -5.1]}
        scale={isMobile ? 0.7 : 3.00}
      >
        <Damon />
      </group>
    </mesh>
  );
};

const EmgenbroCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Emgenbro />
      </Canvas>
      <Interface />
    </>
  );
};

export default EmgenbroCanvas;
