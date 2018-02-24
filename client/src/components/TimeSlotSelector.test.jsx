import React from 'react';
import { shallow } from 'enzyme';

import TimeSlotSelector from './TimeSlotSelector';

describe('TimeSlotSelector Component', () => {
  test('should render correctly', () => {
    expect(shallow(<TimeSlotSelector />)).toMatchSnapshot();
  });
});
