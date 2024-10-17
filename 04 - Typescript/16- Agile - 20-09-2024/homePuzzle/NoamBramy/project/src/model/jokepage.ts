import { AddJoke } from "../controllers/jokepage";

export interface Joke{
  id: string,
  text: string,
  answer: string,
}
export const joke:Joke[] = [];

joke.push(AddJoke("מה כלב אומר כשהוא חוטף מכה?", "האוווו"))
joke.push(AddJoke("העולם הוא כמו טמפל ראן", "לאן שאני לא הולכת הקופים רודפים אחרי"))
joke.push(AddJoke("מה זה שחור קטן בפינה?", "נמלה בעונש"))
joke.push(AddJoke("למה אני שם מעיל לפני מעגל תנועה?", "כיכר"))
joke.push(AddJoke("מה אומר הטוסטר לפרוסת לחם?", "קפוץ לי"))
