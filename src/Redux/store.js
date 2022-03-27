
import { createStore ,combineReducers } from "redux";
import { reducer } from "./reducer.js";
import { reducerData } from "./reducer/dataReducer.js";
import {singlePageReducer} from "./reducer/singlePageReducer.js"

const rootReducer=combineReducers({
    words:reducer,
    datas:reducerData,
    singleData:singlePageReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)