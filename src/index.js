import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter from './routers/App-Router'
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {addExpense, removeExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getTotalExpenses from './selectors/expenses-total';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const store = configureStore();
console.log('working');
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);



ReactDOM.render(jsx, document.getElementById('app'));

