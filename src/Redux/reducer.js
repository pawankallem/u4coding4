
import { SEARCH_WORD } from "./action.js";

const initState={
    words:"",
}

export const reducer=(store=initState,{type,payload})=>{
    switch (type) {
        case SEARCH_WORD:
            return {words : payload};
        default:
            return store;
    }
}