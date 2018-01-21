import React from 'react';
import Counter from './Counter';
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('Counter component', () => {
  const tree = renderer
    .create(<Counter number={2} />)
    .toJSON();

  test('should be rendered correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('number should be increased in DOM after + is clicked', () => {
    const counterComponent = mount(<Counter number={2} />);
    const button = counterComponent.find('button');
    const numberContainer = counterComponent.find('.number');

    expect(numberContainer.text()).toEqual('Button was clicked 2 times!!!');

    button.simulate('click');

    expect(numberContainer.text()).toEqual('Button was clicked 3 times!!!');
  });

  test('should return appropriate messages for different numbers', () => {
    const counter = shallow(<Counter number={0}/>).instance();

    expect(counter.getMessage(0)).toEqual('zero');
    expect(counter.getMessage(1)).toEqual('Button clicked 1 time.');
    expect(counter.getMessage(999)).toEqual('Button was clicked 999 times!!!');
  });
});

