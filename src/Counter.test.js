import React from 'react';
import Counter from './Counter';
import renderer from 'react-test-renderer';

describe('test test', () => {
  const tree = renderer
    .create(<Counter number={2} />)
    .toJSON();

  it('should work', () => {
    expect(tree).toMatchSnapshot();
  });
});