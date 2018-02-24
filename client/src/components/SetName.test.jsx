import React from 'react';
import { shallow } from 'enzyme';

import SetName from './SetName';

describe('SetName Component', () => {
  test('should render correctly', () => {
    expect(shallow(<SetName />)).toMatchSnapshot();
  });
});
