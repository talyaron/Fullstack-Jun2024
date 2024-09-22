
export interface Joke {
    id: number;
    text: string;
    category: string; 
  }

  export const jokes: Joke[] = [
    { id: 1, text: "Why don't skeletons fight each other? They don't have the guts.", category:"skeleton jokes" },
    { id: 2, text: "What do you call fake spaghetti? An impasta!", category:"food jokes" },
    { id: 3, text: "Why don't some couples go to the gym? Because some relationships don't work out." , category:"sport jokes"}
  ];