import Image from "next/image";
import { Inter } from "next/font/google";
import { Assistant } from "@/components/app/assistant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >

      <div className="text-center">
        <h1 className="text-3xl">Welcome to AI Companion</h1>

        <p className="text-slate-600 mt-2 text-lg">
          Your personal assistant to help you with your daily tasks.
        </p>

        <p className="text-slate-600 mt-2 text-lg">
          {/*
          Talk with Sarah to explore upcoming shows and book tickets.
          */}
          Talk with Seunghyon.
        </p>

        {/* powered by famnote */}
        <div className="mt-4">
          <a
            href="#"
            target="_blank"
            className="text-sm text-slate-500"
          >
            Powered by famnote
          </a>
        </div>

      </div>

      <div className="flex flex-col items-center justify-center gap-4 mb-10">
        <Assistant />
      </div>

    </main>
  );
}
