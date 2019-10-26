import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const reducerInput = (state = {inputValue: ''}, action) => {
    if (action.type === 'INPUT') return {
        ...state, inputValue: action.value
    };
    return state
};

const reducerFetch = (state = {fetchData: []}, action) => {
    if (action.type === 'FETCH') return {
        ...state, fetchData: action.value
    };
    return state
};

const store = createStore(combineReducers({inputValue: reducerInput, fetchData: reducerFetch}),
    compose(applyMiddleware(...[thunk]), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store
