import { shows } from "@/data/shows";
import { Message, MessageTypeEnum } from "@/lib/types/conversation.type";
import { vapi } from "@/lib/vapi.sdk";
import React, { useEffect } from "react";
import { ShowsComponent } from "./shows";
import { Ticket } from "./ticket";


import {
  toast,
} from 'react-toastify';



export enum CALL_STATUS {
  INACTIVE = "inactive",
  ACTIVE = "active",
  LOADING = "loading",
}


function Display() {
  
  const [showList, setShowList] = React.useState<Array<(typeof shows)[number]>>(
    []
  );

  const [status, setStatus] = React.useState<"show" | "confirm" | "ticket">(
    "show"
  );

  const [selectedShow, setSelectedShow] = React.useState<
    (typeof shows)[number] | null
  >(null);

  const [confirmDetails, setConfirmDetails] = React.useState<{}>();

 
  const [isSpeechActive, setIsSpeechActive] = React.useState<boolean>(false);

  const [callStatus, setCallStatus] = React.useState<CALL_STATUS>(
    CALL_STATUS.INACTIVE
  );

  const [transcriptUser, setTranscriptUser] = React.useState<string>("");

  const [transcriptAssistant, setTranscriptAssistant] = React.useState<string>("");




  useEffect(() => {

    const onCallStartHandler = () => {
      console.log("Call has started");
      setCallStatus(CALL_STATUS.ACTIVE);
    }

    const onCallEnd = () => {
      console.log("Call has stopped");
      setCallStatus(CALL_STATUS.INACTIVE);

      setTranscriptUser("");
      setTranscriptAssistant("");
    }

    const onSpeechStart = () => {
      console.log("Speech has started");
      setIsSpeechActive(true);
    }

    const onSpeechEnd = () => {
      console.log("Speech has ended");
      setIsSpeechActive(false);
    };

    const onMessageUpdate = (message: Message) => {

      console.log("message type====", message.type);
      


      if (
        message.type === MessageTypeEnum.FUNCTION_CALL &&
        message.functionCall.name === "suggestShows"
      ) {
        setStatus("show");
        vapi.send({
          type: MessageTypeEnum.ADD_MESSAGE,
          message: {
            role: "system",
            content: `Here is the list of suggested shows: ${JSON.stringify(
              shows.map((show) => show.title)
            )}`,
          },
        });
        setShowList(shows);

      } else if (
        message.type === MessageTypeEnum.FUNCTION_CALL &&
        (message.functionCall.name === "confirmDetails" ||
          message.functionCall.name === "bookTickets")
      ) {
        const params = message.functionCall.parameters;

        setConfirmDetails(params);
        
        console.log("parameters", params);

        const result = shows.find(
          (show) => show.title.toLowerCase() == params.show.toLowerCase()
        );
        setSelectedShow(result ?? shows[0]);

        setStatus(
          message.functionCall.name === "confirmDetails" ? "confirm" : "ticket"
        );
      } else if (
        message.type === MessageTypeEnum.TRANSCRIPT
      ) {
        console.log("TRANSCRIPT", message.transcript);
        if (message.role === "user") {
          
          // toast stack disabled
          //toast.success(message.transcript, {
          //  toastId: 'success1',
          //});

          setTranscriptUser(message.transcript);


        } else if (message.role === "assistant") {
          
          ////toast.info(message.transcript);

          setTranscriptAssistant(message.transcript);

        }
      }

      

    };

    const reset = () => {
      setStatus("show");
      setShowList([]);
      setSelectedShow(null);
    };


    vapi.on("call-start", onCallStartHandler);
    vapi.on("call-end", onCallEnd);

    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);

    vapi.on("message", onMessageUpdate);
    vapi.on("call-end", reset);


    return () => {
      vapi.off("call-start", onCallStartHandler);
      vapi.off("call-end", onCallEnd);
 
      vapi.off("speech-start", onSpeechStart);
      vapi.on("speech-end", onSpeechEnd);

      vapi.off("message", onMessageUpdate);
      vapi.off("call-end", reset);
    };

  }, []);



  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">

      {/*
      <div className="w-full xl:w-1/2 flex items-start justify-start h-12">
        {transcriptAssistant && (
       
          <p
            className="text-lg xl:text-3xl
             text-black
             border-2 
             border-white
             p-2 rounded-lg
            bg-transparent"
          >
            {transcriptAssistant}
          </p>
        )}
      </div>
    

      
      <div className="w-full xl:w-1/2 flex items-end justify-end h-12">
        {transcriptUser && (
          <p
            className="text-lg xl:text-3xl 
            text-black
            border-2 
            border-white
            p-2 rounded-lg
            bg-transparent"
          >
              {transcriptUser}
          </p>
        )}
      </div>
      */}
     
    
      {showList.length > 0 && status == "show" ? (
        
        <ShowsComponent showList={showList} />

      ) : null}

      {status !== "show" ? (
        <Ticket
          type={status}
          show={selectedShow ?? shows[0]}
          params={confirmDetails}
        />
      ) : null}


    </div>
  );

}

export { Display };
