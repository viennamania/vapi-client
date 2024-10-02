import Image from "next/image";
import { Inter } from "next/font/google";
import { Assistant } from "@/components/app/assistant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >

      <div className="text-center mt-20">
        {/*
        <h1 className="text-3xl">Welcome to AI Companion</h1>
        */}
        {/* 중국어로 번역 */}
        <h1 className="text-3xl">欢迎来到人工智能伴侣</h1>

        {/*
        <p className="text-slate-600 mt-2 text-lg">
          Your personal assistant to help you with your daily tasks.
        </p>

        <p className="text-slate-600 mt-2 text-lg">

          Talk with AI Companion to explore the world.
        </p>
        */}


      </div>

      <div className="flex flex-col items-center justify-center gap-4 mb-10">
        <Assistant />
      </div>

    </main>
  );
}
