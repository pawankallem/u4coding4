
import { SINGLE_PAGE_DATA } from "../action/singlePageAction.js";

const initState={
        singleData:[]
}

// export const singlePageReducer=()

export const singlePageReducer = (store = initState, { type, payload }) => {

    switch (type) {
        case SINGLE_PAGE_DATA:
            return { ...store, singleDaga: payload };
        default:
            return store;
    }
}