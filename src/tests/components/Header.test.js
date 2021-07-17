import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('Deveria renderizar o header corretamente', () => {
    const wrapper = shallow( <Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Deveria chamar o startLogout no click do botão', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});

