import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import reducer from "./reducers";

const makeStore = () => {
    // Create store
    const store =createStore(reducer, applyMiddleware(thunk));
  
    // Return store
    return store;
  };
  
  // export an assembled wrapper
  export const storeWrapper = createWrapper(makeStore, { debug: false });
