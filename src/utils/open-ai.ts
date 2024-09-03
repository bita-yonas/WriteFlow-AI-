import OpenAI from "openai";

// Ensure the API key is set
if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
  throw new Error("The OPENAI_API_KEY environment variable is missing or empty.");
}

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function openAI(description: string): Promise<string | undefined> {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "I need help writing about the description I provided. Suggest some ideas about the story unfolding or resume writing if resume details are provided.",
        },
        {
          role: "user",
          content: description, // Use description directly since it's a string
        },
      ],
      model: "gpt-3.5-turbo", // or use "gpt-4" if that's what you intended
    });

    const messageContent = response.choices[0]?.message?.content;

    if (messageContent) {
      return messageContent;
    } else {
      throw new Error("No content returned from OpenAI.");
    }
  } catch (error) {
    console.error("Error during OpenAI API call:", error);
    throw error;
  }
}