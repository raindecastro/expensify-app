import { createStore } from 'redux'; 
//Action generatos - actions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET',
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(setCount({ count : 23 }));
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 5 }));

// const changeToDo = ({ todo = "nothing" }) => ({
//     type: 'CHANGE',
//     todo
// });

// const todoReducer = (state = { todo: '' }, action) => {
//     switch (action.type) {
//         case 'CHANGE' : 
//             return {
//                 todo: action.todo
//             };
//         default:
//             return state;
//     }
// }

// const store = createStore(todoReducer);

// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });

// store.dispatch(changeToDo({}));