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

const store = createStore(combineReducers({inputValue: reducerInput, fetchData: reducerFetch}));

export default store
