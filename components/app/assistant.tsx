"use client";

import { CALL_STATUS, useVapi } from "../../hooks/useVapi";

import { AssistantButton } from "./assistantButton";

import { Display } from "./display";

import {
  Web3Button,
  ConnectWallet,
  useAddress,
} from "@thirdweb-dev/react";

import Image from 'next/image';


import { Suspense, use, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage, CameraShake, useAnimations } from '@react-three/drei';




useGLTF.preload('/robot.gltf');



// audioLevel: audioLevel passed as prop



interface ModelProps {
  callStatus: CALL_STATUS;
  audioLevel: number;
  children?: React.ReactNode;
  [key: string]: any;
}

function Model({ callStatus, audioLevel, ...props }: ModelProps) {

  //console.log("Model callStatus", callStatus);
  //console.log("Model audioLevel", audioLevel);


  const { scene, animations } = useGLTF('/robot-draco.glb');

  const { actions } = useAnimations(animations, scene);



  // 1-10 seconds random animation

  const [randomAnimation, setRandomAnimation] = useState(0);
  useEffect(() => {

    if (callStatus === CALL_STATUS.ACTIVE) {

      // random time interval
      // each time interval is random
      // each time interval is between 1 and 10 seconds

      const randomTime = Math.floor(Math.random() * 10) + 1;

      const interval = setInterval(() => {
        // random animation
        const randomAnimation = Math.floor(Math.random() * 14) + 1;

        if (randomAnimation === 1) {
          actions.Dance?.play();
          actions.Death?.stop();
          actions.Idle?.stop();
          actions.Jump?.stop();
          actions.No?.stop();
          actions.Punch?.stop();
          actions.Running?.stop();
          actions.Sitting?.stop();
          actions.Standing?.stop();
          actions.ThumbsUp?.stop();
          actions.Walking?.stop();
          actions.WalkJump?.stop();
        } else if (randomAnimation === 2) {
          actions.Dance?.stop();
          actions.Death?.play();
          actions.Idle?.stop();
          actions.Jump?.stop();
          actions.No?.stop();
          actions.Punch?.stop();
          actions.Running?.stop();
          actions.Sitting?.stop();
          actions.Standing?.stop();
          actions.ThumbsUp?.stop();
          actions.Walking?.stop();
          actions.WalkJump?.stop();
        } else if (randomAnimation === 3) {
          actions.Dance?.stop();
          actions.Death?.stop();
          actions.Idle?.play();
          actions.Jump?.stop();
          actions.No?.stop();
          actions.Punch?.stop();
          actions.Running?.stop();
          actions.Sitting?.stop();
          actions.Standing?.stop();
          actions.ThumbsUp?.stop();
          actions.Walking?.stop();
          actions.WalkJump?.stop();
        } else if (randomAnimation === 4) {
          actions.Dance?.stop();
          actions.Death?.stop();
          actions.Idle?.stop();
          actions.Jump?.play();
          actions.No?.stop();
          actions.Punch?.stop();
          actions.Running?.stop();
          actions.Sitting?.stop();
          actions.Standing?.stop();
          actions.ThumbsUp?.stop();
          actions.Walking?.stop();
          actions.WalkJump?.stop();
        } else if (randomAnimation === 5) {
          actions.Dance?.stop();
          actions.Death?.stop();
          actions.Idle?.stop();
          actions.Jump?.stop();
          actions.No?.play();
          actions.Punch?.stop();
          actions.Running?.stop();
          actions.Sitting?.stop();
          actions.Standing?.stop();
          actions.ThumbsUp?.stop();
          actions.Walking?.stop();
          actions.WalkJump?.stop();
        } else if (randomAnimation === 6) {
          actions.Dance?.stop();
          actions.Death?.stop();
          actions.Idle?.stop();
          actions.Jump?.stop();
          actions.No?.stop();
          actions.Punch?.play();
          actions.Running?.stop();
          actions.Sitting?.stop();
          actions.Standing?.stop();
          actions.ThumbsUp?.stop();
          actions.Walking?.stop();
          actions.WalkJump?.stop();
        } else if (randomAnimation === 7) {
          actions.Dance?.stop();
          actions.Death?.stop();
          actions.Idle?.stop();
          actions.Jump?.stop();
          actions.No?.stop();
          actions.Punch?.stop();
          actions.Running?.play();
          actions.Sitting?.stop();
          actions.Standing?.stop();
          actions.ThumbsUp?.stop();
          actions.Walking?.stop();
          actions.WalkJump?.stop();
        } else if (randomAnimation === 8) {
          actions.Dance?.stop();
          actions.Death?.stop();
          actions.Idle?.stop();
          actions.Jump?.stop();
          actions.No?.stop();
          actions.Punch?.stop();
          actions.Running?.stop();
          actions.Sitting?.play();
          actions.Standing?.stop();
          actions.ThumbsUp?.stop();
          actions.Walking?.stop();
          actions.WalkJump?.stop();
        } else if (randomAnimation === 9) {
          actions.Dance?.stop();
          actions.Death?.stop();
          actions.Idle?.stop();
          actions.Jump?.stop();
          actions.No?.stop();
          actions.Punch?.stop();
          actions.Running?.stop();
          actions.Sitting?.stop();
          actions.Standing?.play();
          actions.ThumbsUp?.stop();
          actions.Walking?.stop();
          actions.WalkJump?.stop();
        } else if (randomAnimation === 10) {
          actions.Dance?.stop();
          actions.Death?.stop();
          actions.Idle?.stop();
          actions.Jump?.stop();
          actions.No?.stop();
          actions.Punch?.stop();
          actions.Running?.stop();
          actions.Sitting?.stop();
          actions.Standing?.stop();
          actions.ThumbsUp?.play();
          actions.Walking?.stop();
          actions.WalkJump?.stop();
        } else if (randomAnimation === 11) {
          actions.Dance?.stop();
          actions.Death?.stop();
          actions.Idle?.stop();
          actions.Jump?.stop();
          actions.No?.stop();
          actions.Punch?.stop();
          actions.Running?.stop();
          actions.Sitting?.stop();
          actions.Standing?.stop();
          actions.ThumbsUp?.stop();
          actions.Walking?.play();
          actions.WalkJump?.stop();
        } else if (randomAnimation === 12) {
          actions.Dance?.stop();
          actions.Death?.stop();
          actions.Idle?.stop();
          actions.Jump?.stop();
          actions.No?.stop();
          actions.Punch?.stop();
          actions.Running?.stop();
          actions.Sitting?.stop();
          actions.Standing?.stop();
          actions.ThumbsUp?.stop();
          actions.Walking?.stop();
          actions.WalkJump?.play();
        } else if (randomAnimation === 13) {
          actions.Dance?.stop();
          actions.Death?.stop();
          actions.Idle?.stop();
          actions.Jump?.stop();
          actions.No?.stop();
          actions.Punch?.stop();
          actions.Running?.stop();
          actions.Sitting?.stop();
          actions.Standing?.stop();
          actions.ThumbsUp?.stop();
          actions.Walking?.stop();
          actions.WalkJump?.stop();
          actions.Wave?.play();
        } else if (randomAnimation === 14) {
          actions.Dance?.stop();
          actions.Death?.stop();
          actions.Idle?.stop();
          actions.Jump?.stop();
          actions.No?.stop();
          actions.Punch?.stop();
          actions.Running?.stop();
          actions.Sitting?.stop();
          actions.Standing?.stop();
          actions.ThumbsUp?.stop();
          actions.Walking?.stop();
          actions.WalkJump?.stop();
          actions.Yes?.play();
        } 

      }, randomTime * 1000);


      return () => clearInterval(interval);

    } else {
      actions.Dance?.stop();
      actions.Death?.stop();
      actions.Idle?.play();
      actions.Jump?.stop();
      actions.No?.stop();
      actions.Punch?.stop();
      actions.Running?.stop();
      actions.Sitting?.stop();
      actions.Standing?.stop();
      actions.ThumbsUp?.stop();
      actions.Walking?.stop();
      actions.WalkJump?.stop();
      actions.Wave?.stop();
      actions.Yes?.stop();
      
    }
   
  } , [actions, callStatus]);


  
  useEffect(() => {

    /*
    1. Dance
    2. Death
    3. Idle
    4. Jump
    5. No
    6. Punch
    7. Running
    8. Sitting
    9. Standing
    10. ThumbsUp
    11. Walking
    12. WalkJump
    13. Wave
    14. Yes
    */
    
    
    //actions.Idle?.play();

    // if callStatus is active then play random animation
    // if callStatus is not active then play idle animation
  

    if (callStatus === CALL_STATUS.ACTIVE) {

    } else {
      actions.Idle?.play();
    }

    //actions.Idle?.play();

    //actions.Idle?.setEffectiveTimeScale(
    //  1 + audioLevel * 10
    //);

  


    //scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))

    scene.traverse((obj : any) => {
      if (obj.isMesh) {
        obj.castShadow = true
        obj.receiveShadow = true
      }
    })


  }, [actions, scene, callStatus]);


  return <primitive object={scene} {...props} />
}




function Assistant() {

  /*
  const { scene, animations } = useGLTF('/robot-draco.glb');
  
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions.Idle?.play();
    scene.traverse((obj : any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    } );

  } , [actions, scene]);
  */
  


  //const address = useAddress();

  const address = '0x';


  //const assistantLanguage = 'Korean';

  const [assistantLanguage, setAssistantLanguage] = useState('Chinese');

  console.log("assistantLanguage", assistantLanguage);

  
  const {
    isSpeechActive,
    callStatus,
    audioLevel,
    activeTranscript,
    messages,
    start,
    stop,
    toggleCall,
  } = useVapi();
  

 

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 mb-52">

      {/* Connect Wallet */}
      {/*}
      <div className="connect-wallet">
        <ConnectWallet
          theme={"light"}
        />
      </div>
      */}


      <div className="z-20 mt-0 absolute top-0 w-full h-80 flex flex-col items-center justify-end gap-4 p-5">
        <Display />

        {/* select assistant language */}
        <div className="w-full flex justify-center items-center mt-1">
          <select
            disabled={callStatus === CALL_STATUS.ACTIVE || callStatus === CALL_STATUS.LOADING}
            value={assistantLanguage}
            onChange={(e) => setAssistantLanguage(e.target.value)}
            className="w-1/2 p-2 rounded-lg bg-gray-100"
          >
            <option value="Chinese">
              中文(Chinese)
            </option>
            <option value="Korean">
              한국어(Korean)
            </option>
            <option value="Japanese">
              日本語(Japanese)
            </option>
            <option value="English">
              English(English)
            </option>
          </select>
        </div>

      </div>


      <div
        className="z-10 mt-10 absolute top-0 w-full h-full bg-no-repeat bg-contain pointer-events-none

        "
        style={{
          backgroundImage: "url('/view.svg')",
        }}

      ></div>

      <div
        id="canvas-container"
        className="w-full flex flex-col items-center justify-center h-64
        mt-3 xl:mt-48"
      >
        <Canvas shadows camera={{ fov: 50 }}>

          <Suspense fallback={null}>
            <Stage
              //contactShadow={{ opacity: 1, blur: 2 }}
              environment="city"
              intensity={1}
   
            >
              
              <Model

                callStatus={callStatus}
                audioLevel={audioLevel}


              />
              
            </Stage>
          </Suspense>

          <OrbitControls
            makeDefault

          />

          <CameraShake
            maxYaw={0.1} // Max amount camera can yaw in either direction
            maxPitch={0.1} // Max amount camera can pitch in either direction
            maxRoll={0.1} // Max amount camera can roll in either direction
            yawFrequency={0.1} // Frequency of the the yaw rotation
            pitchFrequency={0.1} // Frequency of the pitch rotation
            rollFrequency={0.1} // Frequency of the roll rotation
            intensity={1} // initial intensity of the shake
            decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
          />
        </Canvas>
      </div>



     





      {/* jarvis-bg.jpg */}
      {/* bottom-0 */}  
      <div
        className="z-0 absolute bottom-0 w-full h-96
          flex flex-col items-center justify-center
        "
        //style={{
        //  backgroundImage: "url('/jarvis-bg.jpg')",
        //}}
      >
        

        <Image
          src="/jarvis-bg.jpg"
          alt="Jarvis"
          width={400}
          height={300}
          className="rounded-t-3xl

            

          "
        />
      </div>

      {/* move right 2px */}
      <div className="
        transform translate-x-3 -translate-y-1
        z-10 absolute bottom-0 w-full h-96 flex flex-col items-center justify-center gap-4">

        {address && (
            <AssistantButton
              assistantLanguage={assistantLanguage}
              audioLevel={audioLevel}
              callStatus={callStatus}
              toggleCall={toggleCall}
            />

        )}

      </div>



     
    </div>

  );
}

export { Assistant };
