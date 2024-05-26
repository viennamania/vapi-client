"use client";

import { useVapi } from "../../hooks/useVapi";

import { AssistantButton } from "./assistantButton";

import { Display } from "./display";

import {
  Web3Button,
  ConnectWallet,
  useAddress,

 } from "@thirdweb-dev/react";


import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
 
const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];


import { createThirdwebClient } from "thirdweb";
 

const client = createThirdwebClient({ clientId: "c010fb6a9ed040cb62604793a5e56982" });
 


function Assistant() {


  const address = useAddress();


  const { toggleCall, callStatus, audioLevel } = useVapi();

  return (
    <>

      {/* Connect Wallet */}
      <div className="connect-wallet">
        
        
        <ConnectWallet
          theme={"light"}
        />
        
        

        {/*
        <ConnectButton client={client} wallets={wallets} />
        */}


      </div>

      <div className="chat-history">
        <Display />
      </div>
      
      {address && (
        <div className="user-input">
          <AssistantButton
            audioLevel={audioLevel}
            callStatus={callStatus}
            toggleCall={toggleCall}
          />
        </div>
      )}

     
    </>
  );
}

export { Assistant };
