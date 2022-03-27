
import { DATA_GOOGLE } from "../action/dataAction.js";

const initState = {
    datas: []
}

export const reducerData = (store = initState, { type, payload }) => {

    switch (type) {
        case DATA_GOOGLE:
            return { ...store, datas: payload };
        default:
            return store;
    }
}