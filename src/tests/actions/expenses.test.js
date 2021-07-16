import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense ,addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'
import { expect } from '@jest/globals';


const createMockStore = configureMockStore([thunk]);

test('Deveria montar o remove expense action oject', () => {
    const action = removeExpense({id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('Deveria montar o editar expense action object', () => {
    const action = editExpense('123abc', {note:'Nova nota'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'Nova nota'
        }
    })
});

test('Deveria montar o add expense action object com os valores providos', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Deveria adiciona expense para o database e store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'esse é o melhor',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });    
});

test('Deveria adiciona expense com valores defaults para o database e store', (done) => {
    const store = createMockStore({});
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });    
});


// test('Deveria montar o add expense action object com os valores default', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// });