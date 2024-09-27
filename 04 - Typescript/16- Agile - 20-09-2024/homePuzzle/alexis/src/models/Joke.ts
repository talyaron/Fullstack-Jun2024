export interface Joke {
  id: string;
  text: string;
}


export const jokes: Joke[] = [
    {
      id: "a1",
      text: "Why can't dinosaurs clap their hands? Because they're extinct.",
    },
    {
      id: "a2",
      text: "What do you call the security guards for Samsung? Guardians of the galaxy.",
    },
    {
      id: "a3",
      text: "Where do rainbows go when they've been bad? To prism, so they have time to reflect on what they've done.",
    },
    {
        id: "a4",
        text: "I was making a joke about retirement. It did not work.",
      },
      {
        id: "a5",
        text: "I found a book called How to Solve 50% of Your Problems. So I bought 2.",
      },
      {
        id: "a6",
        text: "What word can you make shorter by adding two letters? Short.",
      },
      {
        id: "a7",
        text: "Justice is a dish best served cold. Otherwise, it's just water.",
      },
      
  ];

  export function newJoke(event){
    const newJoke = event.target;
    
  }