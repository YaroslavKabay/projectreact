import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer,
    // count2Reducer,

});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}