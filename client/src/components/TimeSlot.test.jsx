import React from 'react';
import { shallow } from 'enzyme';

import TimeSlot from './TimeSlot';

describe('TimeSlot Component', () => {
  test('should render correctly', () => {
    expect(shallow(<TimeSlot />)).toMatchSnapshot();
  });
});
