import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() =>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
            history={history} 
            expense={expenses[2]}/>);
});

test('Deveria renderizar EditExpensePage Corretamente', () => {   
    expect(wrapper).toMatchSnapshot();
});

test('Deveria lidar com o EditExpense', () => { 
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2]);
});

test('Deveria lidar com o removeExpense', () => { 
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(removeExpense).toHaveBeenCalledWith({
        id: expenses[2].id
    });
});