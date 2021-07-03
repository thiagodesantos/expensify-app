import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Deveria setar o default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Deveria remover expense por id', () => {
    const action = { 
        type: 'REMOVE_EXPENSE',
        id: '2'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]])
});

test('Nao Deveria remover expense por id se o id nao existir', () => {
    const action = { 
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Deveria adicionar um expense', () => {
    const expense = {
        id: '109',
        description: 'Laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    };

    const action = { 
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Deveria editar uma expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('Não Deveria editar uma expense se não achar o id', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
