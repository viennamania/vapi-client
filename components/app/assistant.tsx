"use client";

import { CALL_STATUS, useVapi } from "../../hooks/useVapi";

import { AssistantButton } from "./assistantButton";

import { Display } from "./display";

import {
  Web3Button,
  ConnectWallet,
  useAddress,
} from "@thirdweb-dev/react";



import { Suspense, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage, CameraShake, useAnimations } from '@react-three/drei';


useGLTF.preload('/robot.gltf');



// audioLevel: audioLevel passed as prop



function Model(
  props : JSX.IntrinsicElements['group']
  //audioLevel: number
  ///, { audioLevel } : { audioLevel: number }

) {

  const { scene, animations } = useGLTF('/robot-draco.glb');

  const { actions } = useAnimations(animations, scene);



  //console.log("Model audioLevel", audioLevel);

  
  useEffect(() => {
    
    actions.Idle?.play()



    //scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))

    scene.traverse((obj : any) => {
      if (obj.isMesh) {
        obj.castShadow = true
        obj.receiveShadow = true
      }
    })


  }, [actions, scene])

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

      <div
        className="z-10 mt-20 absolute top-0 w-full h-full bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundImage: "url('/view.svg')",
        }}

      ></div>

      <div
        id="canvas-container"
        className="w-full h-96
        mt-3"
      >
        <Canvas shadows camera={{ fov: 50 }}>

          <Suspense fallback={null}>
            <Stage
              //contactShadow={{ opacity: 1, blur: 2 }}
              environment="city"
              intensity={1}
   
            >
              
              <Model/>
              
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




      <div className="chat-history">
        <Display />
      </div>
      
      {/* select assistant language */}
      <div className="w-full flex justify-center items-center mt-5">
        <select
          disabled={callStatus === CALL_STATUS.ACTIVE || callStatus === CALL_STATUS.LOADING}
          value={assistantLanguage}
          onChange={(e) => setAssistantLanguage(e.target.value)}
        >
          <option value="Chinese">Chinese</option>
          <option value="Korean">Korean</option>
          <option value="Japanese">Japanese</option>
          <option value="English">English</option>
        </select>
      </div>


      <div className="w-full flex justify-center items-center mt-24">

        {address && (
          <div className="user-input">
            <AssistantButton
              assistantLanguage={assistantLanguage}
              audioLevel={audioLevel}
              callStatus={callStatus}
              toggleCall={toggleCall}
            />
          </div>
        )}

      </div>



     
    </div>

  );
}

export { Assistant };
