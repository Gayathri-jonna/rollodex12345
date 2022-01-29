import { monsterActionTypes } from "./monster.tye";

export const INITIAL_STATE = {
    searchField: ''
   
}
export const searchReducer = (sate = INITIAL_STATE, action )=> {
    switch (action.type) {
        case monsterActionTypes.SEARCH_MONSTER:
            return{

                // Existing state with rest operator
                ...state,
                searchField: action.payload
            }
            
        default:
           return sate
    }
}