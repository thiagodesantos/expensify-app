import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage';

test('Deveria renderizar o ExpenseDashBoardPage corretamente', () => {
    const wrapper = shallow( <ExpenseDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});
