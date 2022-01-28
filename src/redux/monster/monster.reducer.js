import { monsterActionTypes } from "./monster.tye";

export const INITIAL_STATE = {
    searchField: '',
    monsters: [],
    quotes:[]
}
export const searchReducer = (sate = INITIAL_STATE, action )=> {
    switch (action.type) {
        case monsterActionTypes.SEARCH_MONSTER:
            return{
                ...state,
                searchField: action.payload
            }
            
    
        default:
           return sate
    }
}