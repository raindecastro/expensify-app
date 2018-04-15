import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter from './routers/App-Router'
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {addExpense, removeExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);   
});

store.dispatch(addExpense({ description: 'Gas Bill', amount: 200, createAt: 10002}));
store.dispatch(addExpense({ description: 'Water Bill', amount: 150, createAt: 10000}));
store.dispatch(addExpense({ description: 'Dabble', amount: 9999, createAt: 10000}));

// setTimeout(() => {
//     store.dispatch(setTextFilter('Dabble!'))
// }, 3000)

//addExpense -> waterbill and gasbil
//setTextFilter -> bill
//getVisibleExpenses -> print visible ones to screen

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

