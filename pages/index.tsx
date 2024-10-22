import Image from "next/image";
import { Inter } from "next/font/google";
import { Assistant } from "@/components/app/assistant";

import { useSearchParams } from 'next/navigation'


import Link from 'next/link'


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
      className={`flex min-h-screen flex-col items-center justify-start p-0 ${inter.className}
        
        bg-gradient-to-r from-green-400 to-blue-500

        `}
    
      //style={{
      //    backgroundColor: "#303035"
      //} }

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
          bg-gradient-to-b from-green-400 to-blue-500


        "
      >
        <Link
          href={`https://olgaai.io?token=${token}&userid=${userid}`}
          target="_self"
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
        </Link>

        {/*}
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
        */}

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

      
      {/*
      <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
 
      <div className="mx-auto sm:max-w-2xl sm:px-4">


        <div className="border-t bg-white shadow-lg sm:rounded-t-xl sm:border md:py-0">

          <div className="grid grid-cols-5 gap-2 border-t mt-4 px-2">
            <button
              className='h-24 flex flex-col items-center justify-start p-2 
              hover:bg-gray-200'
              onClick={() => {
                // Coming soon

                alert("Coming soon");
              }}
            >
                <Image
                  src="/menu01.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xs xl:text-sm font-bold">
                  SNS
                </span>
            </button>
            <button
              className='h-24 flex flex-col items-center justify-start p-2
              hover:bg-gray-200'
              onClick={() => {
                // '/?userid=${userid}&token=${token}'


                window.open(`https://image.olgaai.io/?userid=${userid}&token=${token}`, "_self");

              }}
            >
                <Image
                  src="/menu02.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xs xl:text-sm font-bold">
                  Image<br/>Generator
                </span>
            </button>
            <button
              className='h-24 flex flex-col items-center justify-start p-2
              text-white
              bg-blue-500 hover:bg-blue-700
              '
              //style = {{backgroundColor: "cadetblue"}} // cadetblue color #5F9EA0
              //</div>onClick={() => {
                //window.open("https://olgaai.io/?userid=" + userid + "&token=" + token, "_self");
              //}}
              onClick={() => {
                window.open("https://olgaai.io/" + token + "/" + userid, "_self");
              } }
            >
                <Image
                  src="/menu03.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xs xl:text-sm font-bold">
                  Chat GPT
                </span>
            </button>
            <button
              className='h-24 flex flex-col items-center justify-start p-2
              hover:bg-gray-200'
              onClick={() => {
                //window.open("https://olgagpt.com/sub/order_list.asp", "_self");

                window.open("https://image.olgaai.io/collection/?userid=" + userid + "&token=" + token, "_self");

              }}
            >
                <Image
                  src="/menu04.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xs xl:text-sm font-bold">
                  My NFT
                </span>
            </button>
            <button
              className='h-24 flex flex-col items-center justify-start p-2
              hover:bg-gray-200'
              onClick={() => {
                window.open("https://olgagpt.com/main.asp", "_parent");
              }}
            >
                <Image
                  src="/menu05.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xs xl:text-sm font-bold">
                  OLGA
                </span>
            </button>

          </div>

        </div>

        
        

      </div>



    </div>

      */}
      
  

    </main>
  );
}
