import React from 'react';
import { assert } from 'chai';
import { shallow } from '../../config/setupTests';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  it('Renders children and 1 h2 element', () => {
    const body = shallow(
      <BodySection title="test title">
        <p>test</p>
      </BodySection>
    );
    assert.equal(body.find('h2').length, 1);
    body.text().includes('test title');
    assert.equal(body.find('p').length, 1);
  });
});
