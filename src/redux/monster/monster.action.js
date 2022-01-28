import { monsterActionTypes } from "./monster.tye";

export const searchMonster =() => ({
    type : monsterActionTypes.SEARCH_MONSTER,
    payload : username
})