import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";



const Computers = ({isMobile}) => {

  const computer = useGLTF("./desktop_pc/scene.gltf"); //loads the 3D model
  return (
    <mesh> {/*this represents the 3d model*/}
      <hemisphereLight intensity={4} groundColor='black' /> {/*represents the light*/}
      <spotLight //add light to the model
        position={[-20, 50, 10]} //position of this light
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow //will cast a shadow
        shadow-mapSize={1024}
      /> {/* light that makes a shadow*/}
      <pointLight intensity={1} /> {/* like a light bulb*/}
      <primitive // renders the 3d model
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.75} // Try a smaller scale for mobile
        position={isMobile ? [0, -2, -0.5] : [0, -3.25, -1.5]} // Adjust position for mobile
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}

const ComputersCanvas = () => {

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
    <Canvas
      frameloop='demand' //renders the figure only when necessary for better performance
      shadows // enables shadows
      camera={{ position: [20, 3, 5], fov: 25 }} //camera position and field of view
      gl={{ preserveDrawingBuffer: true }}
    
    >
        <Suspense fallback={<CanvasLoader />}> {/* handles loading, will show canvasloader when there's any fallback*/}
        <OrbitControls
          enableZoom={false} //disables zoom
          maxPolarAngle={Math.PI / 2} // this keeps rotation only horizontal
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all /> {/* loads everything before the scene is displayed*/}
    </Canvas>
  )
}


export default ComputersCanvas;

