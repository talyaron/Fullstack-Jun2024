

export interface Joke {
    id:string;
  leadUp: string;
  punchline: string;
}

export const jokes: Joke[] = [];
jokes.push({id:giveId(),
  leadUp: "מה ההבדל בין פיל לפסנטר ?",
  punchline: "שפסנטר אפשר להפיל אבל פיל אי אפשר לפסנטר",
});
jokes.push({ id:giveId(),leadUp: "lala", punchline: "alal" });
jokes.push({ id:giveId(),leadUp: "is this ?", punchline: "" });

function giveId():string
{
const randomID = crypto.randomUUID();
return randomID;
}

export function createJoke(leadUp:string,punchline:string)
{
    jokes.unshift({ id:giveId(),leadUp: leadUp, punchline: punchline });
}
