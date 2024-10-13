import Image from "next/image";
import { Inter } from "next/font/google";
import { Assistant } from "@/components/app/assistant";

import { useSearchParams } from 'next/navigation'



const inter = Inter({ subsets: ["latin"] });


/*
?token=06eb43de00654b4fb9e2af4ba70e217f1bDbJsIsIxNIjPARc4&userid=01027125001
*/

export default function Home() {

  // url get params
  const searchParams = useSearchParams()
 
  const token = searchParams.get('token');
  const userid = searchParams.get('userid');

 
  



  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start p-0 ${inter.className}`}
    
      style={{
          backgroundColor: "#303035"
      } }

    >
      {/* header */}
      {/* close button */}
      {/* if clicked, goto 'https://olgaai.io/${token}/${userid}' */}

      <div
        //className="w-full flex flex-row items-center justify-between gap-4 bg-gray-100 p-4"
        //className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4
        //</main>bg-gradient-to-r from-green-400 to-blue-500
        //"

        className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0
        bg-gradient-to-b from-yellow-100 to-yellow-500


        "
      >
        <div className='flex flex-row items-center'>
          <Image
            
            //src="/icon-chatgpt-dark.png"
            src="/icon-olga-dark.png"
            alt="Next Chat"
            width={35}
            height={35}
          />

          <span className="text-lg font-bold ml-2">ChatGPT</span>
        </div>

        <button
          className="flex justify-center"
          onClick={() => {
            window.location.href = `https://olgaai.io/${token}/${userid}`;
          }}
        >
          <Image
            src="/close-icon.png"
            alt="AI Companion"
            width={24}
            height={24}
            className="rounded-md"
          />
        </button>
      </div>


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


 
      <Assistant />
  

    </main>
  );
}
