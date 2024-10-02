"use client";

import { useVapi } from "../../hooks/useVapi";

import { AssistantButton } from "./assistantButton";

import { Display } from "./display";

import {
  Web3Button,
  ConnectWallet,
  useAddress,
} from "@thirdweb-dev/react";


function Assistant() {


  //const address = useAddress();

  const address = '0x';


  const { toggleCall, callStatus, audioLevel } = useVapi();

  return (
    <div>

      {/* Connect Wallet */}
      {/*}
      <div className="connect-wallet">
        <ConnectWallet
          theme={"light"}
        />
      </div>
      */}



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

     
    </div>

  );
}

export { Assistant };
