import React from 'react';
import { shallow } from 'enzyme';
//import toJson from 'enzyme-to-json';
import Header from '../../components/Header';

test('Deveria renderizar o header corretamente', () => {
    const wrapper = shallow( <Header />);
    expect(wrapper).toMatchSnapshot();

    //expect(wrapper.find('h1').text()).toBe('Despesinhas');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
