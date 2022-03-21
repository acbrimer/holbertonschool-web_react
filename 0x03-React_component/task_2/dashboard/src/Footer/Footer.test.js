// import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('Footer component renders without crashing', () => {
    shallow(<Footer />);
  });
  it('Component renders the text “Copyright”', () => {
    const footer = shallow(<Footer />);
    assert.isTrue(footer.text().includes('Copyright'));
  });
});
