import { randomNumber } from "../../controllers/randomCont";

export function renderRandom():string {
    return `${randomNumber()}`;
}