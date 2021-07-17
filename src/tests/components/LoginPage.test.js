import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('Deveria renderizar o Login corretamente', () => {
    const wrapper = shallow( <LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('Deveria chamar o startLogin no click do botão', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
