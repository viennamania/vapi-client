import "@/styles/globals.css";
import type { AppProps } from "next/app";


import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  ConnectEmbed,
  embeddedWallet,
} from "@thirdweb-dev/react";

import { createThirdwebClient } from "thirdweb";

// QueryClientProvider
import { QueryClient, QueryClientProvider } from "react-query";

import { useState } from "react";
 
/////const client = createThirdwebClient({ clientId: "c010fb6a9ed040cb62604793a5e56982" });
 


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function App({ Component, pageProps }: AppProps) {




  return (



    <QueryClientProvider client={new QueryClient()}>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        
        draggable

        // stacking disabled

        stacked={false}


        pauseOnHover
      />

      {/*
      <ThirdwebProvider
        
        //activeChain="polygon"
        activeChain="arbitrum"

        clientId="c010fb6a9ed040cb62604793a5e56982"
        supportedWallets={[
          metamaskWallet({
            recommended: true,
          }),
          //coinbaseWallet(),
          walletConnect(),
          embeddedWallet(),
        ]}
      >
      */}


        {/*}
        <ConnectEmbed client="c010fb6a9ed040cb62604793a5e56982" />
        */}
        

        <Component {...pageProps} />

      {/*
      </ThirdwebProvider>
      */}

    

    </QueryClientProvider>
  );


}
