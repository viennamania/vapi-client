import Image from "next/image";
import { Inter } from "next/font/google";
import { Assistant } from "@/components/app/assistant";





const inter = Inter({ subsets: ["latin"] });




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


 
      <Assistant />
  

    </main>
  );
}
