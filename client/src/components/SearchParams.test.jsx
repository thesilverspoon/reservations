import React from 'react';
import { shallow } from 'enzyme';
import MockDate from 'mockdate';

import SearchParams from './SearchParams';

describe('SearchParams Component', () => {
  beforeAll(() => {
    // hard code a date for 'new Date()'
    MockDate.set('4/1/2018', 480);
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('should render correctly', () => {
    expect(shallow(<SearchParams clickHandler={() => {}} />)).toMatchSnapshot();
  });

  test('should set state on party size selection', () => {
    const component = shallow(<SearchParams clickHandler={() => {}} />);
    const partySelect = component.find('select').first();

    expect(component.state().partyVal).toBe(2);
    partySelect.simulate('change', { target: { value: '6' } });
    expect(component.state().partyVal).toBe(6);
  });

  test('should set state on time selection', () => {
    const component = shallow(<SearchParams clickHandler={() => {}} />);
    const timeSelect = component.find('select').last();

    expect(component.state().timeVal).toBe(19);
    timeSelect.simulate('change', { target: { value: '21' } });
    expect(component.state().timeVal).toBe(21);
  });

  test('should set state on date change', () => {
    const component = shallow(<SearchParams clickHandler={() => {}} />);
    const dayPicker = component.find('DayPickerInput').first();

    expect(component.state().dateVal).toBe('2018-04-01');
    dayPicker.simulate('dayChange', new Date('2018-04-05'));
    expect(component.state().dateVal).toBe('2018-04-05');
  });

  test('should call clickHandler with appropriate arguments', () => {
    const mockFn = jest.fn();
    const component = shallow(<SearchParams clickHandler={mockFn} />);

    const partySelect = component.find('select').first();
    const dayPicker = component.find('DayPickerInput').first();
    const timeSelect = component.find('select').last();

    partySelect.simulate('change', { target: { value: '5' } });
    dayPicker.simulate('dayChange', new Date('2018-04-05'));
    timeSelect.simulate('change', { target: { value: '20' } });

    // .update() waits for state change to happen before clicking button
    const button = component.update().find('button').first();
    button.simulate('click');

    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe('2018-04-05');
    expect(mockFn.mock.calls[0][1]).toBe(20);
    expect(mockFn.mock.calls[0][2]).toBe(5);
  });
});
