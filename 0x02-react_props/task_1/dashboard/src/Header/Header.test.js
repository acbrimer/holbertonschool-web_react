import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('Header component renders without crashing', () => {
    shallow(<Header />);
  });
  it('Components render img and h1 tags', () => {
    const header = shallow(<Header />);
    assert.equal(header.find('img').length, 1);
    assert.equal(header.find('h1').length, 1);
  });
});
