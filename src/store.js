import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import  {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer";
const MiddleWare=[thunk];

const store = configureStore(
    {
    reducer,
    },
    composeWithDevTools(applyMiddleware(...MiddleWare))
)
export default store;

