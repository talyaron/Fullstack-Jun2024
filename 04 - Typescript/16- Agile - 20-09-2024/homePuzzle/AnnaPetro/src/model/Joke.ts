
export interface Joke{
    id : string;
    text : string;
}


export const jokes : Joke [] = [
    {id : `id-${crypto.randomUUID()}`,text :`מה עושה עכבר כשהוא רוצה לעבור את הכביש? מחפש "מעבר עכברים"!`},
    {id : `id-${crypto.randomUUID()}`,text :`למה התפוח לא נופל רחוק מהעץ? כי יש לו שורשים!`},
    {id : `id-${crypto.randomUUID()}`,text :`איך קוראים לכלב שאין לו רגליים? לא חשוב, הוא לא יבוא בכל מקרה.`}
];