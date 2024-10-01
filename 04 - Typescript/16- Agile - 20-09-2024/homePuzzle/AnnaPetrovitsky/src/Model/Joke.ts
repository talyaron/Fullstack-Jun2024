export interface Joke{
    id : string;
    text : string;
}

export const jokes : Joke [] =[
    {id:`id - ${crypto.randomUUID()} ` , text: 'I tried starting a hot air balloon business, but it never took off.'},
    {id:`id - ${crypto.randomUUID()} ` , text: `I told my wife I'd give her anything she wanted. She said she wanted to be a millionaire. So, I gave her a lottery ticket.`},
    {id:`id - ${crypto.randomUUID()} ` , text:`I tried to start a hot air balloon business, but it never took off.`}
];