import { randomNumber } from "../controllers/rendom";

export function renderRandom():string{
    return `${randomNumber()}`;
}