import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Deveria renderizar o ExpenseForm corretamente', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});


test('Deveria renderizar o ExpenseForm com dados', () => {
    const wrapper = shallow(<ExpenseForm  expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Deveria renderizar erro para submission invalido', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Deveria setar description no input', () => { 
    const value = 'Nova descrição';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target:{ value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('Deveria setar o note no textarea change',() => {
    const value = 'Nova nota';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target:{ value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('Deveria setar o amount se valido',() => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target:{ value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('Deveria setar o amount invalido', () => { 
    const value = '23.502';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target:{ value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('Deveria chamar o onSubmit com props validas para o form', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt,
    });
});

test('Deveria setar uma nova data durante o dateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Deveria setar o calendario onfocus change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toEqual(focused);
});
