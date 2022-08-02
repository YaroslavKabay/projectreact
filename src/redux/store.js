import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer, count1Reducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer,
    count1Reducer

});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}