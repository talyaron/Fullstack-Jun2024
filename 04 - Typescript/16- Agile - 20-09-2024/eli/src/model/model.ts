export interface Joke {
  leadUp: string;
  punchline: string;
}

export const jokes: Joke[] = [];
jokes.push({
  leadUp: "מה ההבדל בין פיל לפסנטר ?",
  punchline: "שפסנטר אפשר להפיל אבל פיל אי אפשר לפסנטר",
});
jokes.push({ leadUp: "lala", punchline: "alal" });
jokes.push({ leadUp: "is this ?", punchline: "" });
