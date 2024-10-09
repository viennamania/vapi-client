import Image from "next/image";
import { Inter } from "next/font/google";
import { Assistant } from "@/components/app/assistant";

import { Suspense, useEffect } from 'react'
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage, CameraShake, useAnimations } from '@react-three/drei'



/*
body {
  background: #303035;
}
*/

/*
#root::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/view.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  pointer-events: none;
}
*/




const inter = Inter({ subsets: ["latin"] });


useGLTF.preload('/robot.gltf');

function Model(props : JSX.IntrinsicElements['group']) {
  const { scene, animations } = useGLTF('/robot-draco.glb')
  const { actions } = useAnimations(animations, scene)
  
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


export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-8 ${inter.className}`}
    
      style={{
          backgroundColor: "#303035"
      } }

    >

      {/*
      <div className="w-full flex flex-row items-start justify-start gap-4">

        <div className="flex justify-center">
          <Image
            src="/logo-olga.png"
            alt="AI Companion"
            width={48}
            height={48}
            className="rounded-md"
          />
        </div>
        <h1 className="mt-5 text-xl">欢迎来到人工智能伴侣</h1>

      </div>
      */}

      {/* absolute top-0 left-0 w-full h-full */}
      {/*
                backgroundImage: "url('/view.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          pointerEvents: "none",
      */}
      <div
        className="mt-20 absolute top-0 w-full h-full bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundImage: "url('/view.svg')",
        }}

      ></div>

      <div id="canvas-container" className="w-full h-96 mt-10">

        <Canvas shadows camera={{ fov: 50 }}>
          <Suspense fallback={null}>
            <Stage
              //contactShadow={{ opacity: 1, blur: 2 }}
              environment="city"
              intensity={1}
   
            >
              <Model />
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


      <div className="w-full flex flex-col items-center justify-center gap-4 mb-52">
        
        <Assistant />
      </div>

    </main>
  );
}
