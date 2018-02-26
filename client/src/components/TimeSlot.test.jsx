import React from 'react';
import { shallow } from 'enzyme';

import TimeSlot from './TimeSlot';

describe('TimeSlot Component', () => {
  test('should render available times correctly', () => {
    expect(shallow(<TimeSlot
      time={5}
      available
      clickHandler={() => {}}
    />)).toMatchSnapshot();
  });

  test('should render unavailable times correctly', () => {
    expect(shallow(<TimeSlot
      time={5}
      available={false}
      clickHandler={() => {}}
    />)).toMatchSnapshot();
  });

  test('should be disabled if not available', () => {
    const mockHandler = jest.fn();
    const component = shallow(<TimeSlot
      time={5}
      available={false}
      clickHandler={mockHandler}
    />);

    const button = component.find('button').first();

    expect(button.props().disabled).toBe(true);
  });

  test('should call clickHandler function with appropriate arguments when clicked', () => {
    const mockHandler = jest.fn();
    const component = shallow(<TimeSlot
      time={5}
      available
      clickHandler={mockHandler}
    />);

    const button = component.find('button').first();
    button.props().onClick();

    expect(mockHandler.mock.calls.length).toBe(1);
    expect(mockHandler.mock.calls[0][0]).toBe(5);
  });
});
