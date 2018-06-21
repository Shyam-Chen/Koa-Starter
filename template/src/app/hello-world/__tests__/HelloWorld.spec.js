import { shallowMount } from '@vue/test-utils';

import HelloWorld from '../HelloWorld';

describe('HelloWorld', () => {
  let [wrapper] = [];

  beforeEach(() => {
    wrapper = shallowMount(HelloWorld);
  });

  it('should render initial component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
