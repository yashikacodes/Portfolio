import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useState, Suspense } from 'react'
import Loader from '../components/Loader'
import Room from '../models/Room'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'

const Home = () => {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage , setCurrentStage] = useState(1);


  const adjustRoomForScreenSize = () => {
    let screenScale=null;
    let screenPosition = [0,-0.5,1];
    let rotation = [0.3,4.72,0];

    if(window.innerWidth < 768){
      screenScale = [0.08,0.08,0.08];
    }else{
      screenScale = [0.085,0.085,0.085];
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768){
      screenScale = [0.04,0.04,0.04];
      screenPosition = [0,-0.55,3.5];
    }else{
      screenScale = [0.05,0.05,0.05];
      screenPosition = [0,-0.55,3.5];
    }
    return [screenScale, screenPosition];
  }

  const [roomScale, roomPosition, roomRotation] = adjustRoomForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className = "w-full h-screen relative">

      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
           popup
      </div>
        <Canvas
          className = {`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'} ` }
          camera = {{near: 0.1, far: 1000}}
        >

          <Suspense fallback={<Loader />}>
            <directionalLight position = {[1,1,1]}  intensity={2} />
            <ambientLight intensity={0.7} />
            <hemisphereLight skyColor = "#b1e1ff" groundColor="#000000" intensity={0.7} />

            <Bird />
            
            <Sky isRotating = {isRotating}/>
            <Room 
              scale = {roomScale}
              position = {roomPosition}
              rotation = {roomRotation}
              isRotating = {isRotating}
              setIsRotating = {setIsRotating}
              setCurrentStage = {setCurrentStage}
            />
            <Plane
              isRotating = {isRotating}
              scale = {planeScale}
              position = {planePosition}
              rotation = {[0,9.5,0]}
            />
          </Suspense>


        </Canvas>

    </section>
  )
}

export default Home
//hehe