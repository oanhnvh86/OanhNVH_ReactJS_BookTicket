//!B1: SET UP ROOT REDUCER

// import redux
import { combineReducers, createStore } from 'redux';

//import child reducer
import BookTicketReducer from './BookTicketReducer';

//create rootReducer: contain multi child reducer
const rootReducer = combineReducers({
    //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    BookTicketReducer: BookTicketReducer,
})

//create and return store output from rootReducer
export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



