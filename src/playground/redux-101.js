import { createStore } from 'redux'

// action generators

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers
//1. reducers são funções puras ( consegue se resolver somente com o scopo que tem )
//2. nunca mudar o stado ou a acao diretamente


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':        
            return {
                count: state.count + action.incrementBy
            };
            break;
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
            break;
        case 'SET':
            return {
                count: action.count 
            };
            break;
        case 'RESET':
            return {
                count: state.count = 0
            };
            break;
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));

