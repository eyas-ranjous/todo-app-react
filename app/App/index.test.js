import React from 'react';
import { mount } from 'enzyme';
import App from './index';

describe('<App />', () => {
  it('renders app', () => {
    const wrapper = mount(
      <App />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
