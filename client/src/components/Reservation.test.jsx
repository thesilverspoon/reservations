import React from 'react';
import { shallow } from 'enzyme';

import Reservation from './Reservation';

describe('Reservation Component', () => {
  test('should render correctly', () => {
    expect(shallow(<Reservation />)).toMatchSnapshot();
  });
});
