import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2] ])
});

test('should NOT remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'Meal with bubu',
        amount: 15000,
        note: '',
        createdAt: 100000
    } 
    
    const action = {
        type: 'ADD_EXPENSE',
        expense    
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expenses by id', () => {
    const id = '1';
    const updates = {
        description: 'Gift for bubu'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const newExpense = {
        id: '1',
        description: 'Gift for bubu',
        amount: 400,
        note: '',
        createdAt: 0
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('Gift for bubu');

})

test('should NOT edit any expenses when id not found', () => {
    const id = '4';
    const updates = {
        description: 'Gift for bubu'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
    const newExpense = {
        id: '1',
        description: 'Gift for bubu',
        amount: 400,
        note: '',
        createdAt: 0
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});