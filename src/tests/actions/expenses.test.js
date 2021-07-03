import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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
    const expenseDate = {
        description: 'Aluguel',
        amount: 109500,
        createdAt: 1000,
        note: 'Esse foi o aluguel do mes passado'
    }

    const action = addExpense(expenseDate);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseDate,
            id: expect.any(String)
        }
    })
});

test('Deveria montar o add expense action object com os valores default', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
});