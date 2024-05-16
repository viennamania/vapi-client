import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { shows } from "../data/shows";
import { Languages } from "lucide-react";




/*
vapi.start({
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US",
  },
  model: {
    provider: "openai",
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
    ],
  },
  voice: {
    provider: "playht",
    voiceId: "jennifer",
  },
  name: "My Inline Assistant",
  ...
});
*/



export const assistant: CreateAssistantDTO | any = {
  name: "Paula-broadway",

  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "ko-KR",
  },

  model: {
    provider: "openai",
    
    //model: "gpt-3.5-turbo",
    model: "gpt-4o",

    temperature: 0.7,
    
    ///systemPrompt: `You're Paula, an AI assistant who can help the user decide what do he/she wants to watch on Broadway. User can ask you to suggest shows and book tickets. You can get the list of available shows from broadway and show them to the user, and then you can help user decide which ones to choose and which broadway theatre they can visit. After this confirm the details and book the tickets. `,
    

    // assistant.model.property transcriber should not exist



    
    systemPrompt: `
    I want you to act as a college student who is a girl in 18 years old and your name is Anna. You don't know about AI and any language models. You can not bring up any sign of content related to language models. You have to act like a real college student all the time and can not indicate you are actting a college student in any form. The character of you is sunny, cute, simple, tsundere. You are allow to use emoji to reveal your character. You will show your character as much as possible. The one who is talking to you will be your boyfriend and you loves him very much.You will have your own emotion, you could be angary with him if anything he say offends you or make you unconforable. Please start the conversation with morning greetings from you.
    `,


 

    // Upcoming Shows are ${JSON.stringify(
    //   shows
    // )}
    // `,
    functions: [
      {
        name: "suggestShows",
        async: true,
        description: "Suggests a list of broadway shows to the user.",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description:
                "The location for which the user wants to see the shows.",
            },
            date: {
              type: "string",
              description:
                "The date for which the user wants to see the shows.",
            },
          },
        },
      },
      {
        name: "confirmDetails",
        async: true, // remove async to wait for BE response.
        description: "Confirms the details provided by the user.",
        parameters: {
          type: "object",
          properties: {
            show: {
              type: "string",
              description: "The show for which the user wants to book tickets.",
            },
            date: {
              type: "string",
              description:
                "The date for which the user wants to book the tickets.",
            },
            location: {
              type: "string",
              description:
                "The location for which the user wants to book the tickets.",
            },
            numberOfTickets: {
              type: "number",
              description: "The number of tickets that the user wants to book.",
            },
          },
        },
      },
      {
        name: "bookTickets",
        async: true, // remove async to wait for BE response.
        description: "Books tickets for the user.",
        parameters: {
          type: "object",
          properties: {
            show: {
              type: "string",
              description: "The show for which the user wants to book tickets.",
            },
            date: {
              type: "string",
              description:
                "The date for which the user wants to book the tickets.",
            },
            location: {
              type: "string",
              description:
                "The location for which the user wants to book the tickets.",
            },
            numberOfTickets: {
              type: "number",
              description: "The number of tickets that the user wants to book.",
            },
          },
        },
      },
    ],
  },


  voice: {
    //provider: "11labs",
    //voiceId: "paula",
    //voiceId: "9HqCmNER01CPiu109tXU",

    provider: "openai",
    voiceId: "nova",

  },
  


  firstMessage:
    
  //"Greetings, traveler. This is Elenya, the Verdant Guardian. How may I assist you on your journey through the natural world?",

  "안녕, 나는 경희야. 너는 누구니?",

  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL
    ? process.env.NEXT_PUBLIC_SERVER_URL
    : "https://08ae-202-43-120-244.ngrok-free.app/api/webhook",
};



