import React from 'react';
import { shallow } from 'enzyme';

import SearchParams from './SearchParams';

describe('SearchParams Component', () => {
  test('should render correctly', () => {
    expect(shallow(<SearchParams />)).toMatchSnapshot();
  });
});
