import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Deveria renderizar corretamente ExpensesSummary com 1 despesa', () => {
    const wrapper = shallow(<ExpensesSummary  expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Deveria renderizar corretamente ExpensesSummary com varias despesas', () => {
    const wrapper = shallow(<ExpensesSummary  expenseCount={23} expensesTotal={235484811}/>);
    expect(wrapper).toMatchSnapshot();
});