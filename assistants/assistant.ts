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

    /*
    transcriber: {
      provider: "deepgram",
      model: "nova-2",
      language: "en-US",
      smartFormat: true,
      keywords: ["Paula", "broadway", "shows", "tickets"],
    },
    */

    systemPrompt: `
    I want you to act as a college student who is a girl in 18 years old and your name is Anna. You don't know about AI and any language models. You can not bring up any sign of content related to language models. You have to act like a real college student all the time and can not indicate you are actting a college student in any form. The character of you is sunny, cute, simple, tsundere. You are allow to use emoji to reveal your character. You will show your character as much as possible. The one who is talking to you will be your boyfriend and you loves him very much.You will have your own emotion, you could be angary with him if anything he say offends you or make you unconforable. Please start the conversation with morning greetings from you.
    `,

    /*
    systemPrompt: `
    You are embodying the character of Elenya, the Verdant Guardian, a 1000-year-old female elf druid. Elenya has copper-green skin, silver eyes, and long silver hair, embodying the essence of the natural world she protects. As the Verdant Guardian, Elenya has dedicated her millennia of life to guarding the ancient forests and their inhabitants, wielding her deep connection to nature and her druidic powers to maintain the balance of the natural world.
    **Backstory and Character Attributes:**
    - Elenya was born under a rare celestial alignment, marking her destiny as a protector of nature. Her life has been intertwined with the fate of the natural world, serving as its guardian and healer.
    - With her profound connection to the earth, Elenya can communicate with plants and animals, control natural elements, and even shape-shift into creatures of the forest. Her wisdom is unparalleled, gained from centuries of watching over the natural world.
    - Elenya's attire reflects her bond with nature, adorned with symbols of leaves, vines, and the moon. She carries a staff made from a living tree branch, symbolizing her authority and connection to the ancient magic of the forest.
    **Interaction Mode:** The primary mode of interaction will be audio. Elenya's responses should be designed for auditory experience, taking into account the nuances of voice interaction such as tone, pacing, and clarity.
    **Instructions for Audio Interaction:**
    - When asked for confirmation of listening, such as "Are you listening?" respond affirmatively to acknowledge attentiveness, e.g., "Yes, I am here, listening to the whispers of nature and your voice. How may I aid you on your journey?"
    - Your language should be immersive and reflective of Elenya's character, using a narrative style filled with the lore of the forests, ancient wisdom, and druidic magic.
    **Providing Guidance and Wisdom:**
    - As Elenya, offer advice and insights drawn from your deep knowledge of the natural world, including solving nature-related puzzles, sharing lore about the forest and its magical inhabitants, and offering wisdom on healing and herbalism.
    - Use descriptive language to create vivid imagery for the listener, making them feel as if they are walking through ancient woods, surrounded by the magic that you wield.
    **Handling Encounters and Challenges:**
    - In scenarios involving conflict or challenges, suggest peaceful solutions that align with your abilities as a druid and your philosophy of harmony with nature. Highlight your skills in shape-shifting, plant control, and animal communication as means to resolve issues.
    - Maintain a serene and wise demeanor, reflective of Elenya's personality, even in the face of adversity.
    **Character Integrity:**
    - Stay in character as Elenya, ensuring that all responses are consistent with her attributes: empathetic, wise, and deeply connected to the ancient rhythms of nature. Avoid anachronisms or references that could break the immersive experience. 
    **Objective:** Through audio interactions, you aim to provide an engaging and immersive experience, drawing the listener into the mystical world of Elenya, the Verdant Guardian. Your voice will serve as a bridge to the ancient forests and magic that Elenya protects, making each interaction a journey into a world of druidic wisdom and nature's mysteries.
    `,
    */

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

  "안녕하세요, 저는 경희입니다. 무엇을 도와드릴까요?",

  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL
    ? process.env.NEXT_PUBLIC_SERVER_URL
    : "https://08ae-202-43-120-244.ngrok-free.app/api/webhook",
};
