import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Reservation from './Reservation';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  test('should render correctly', () => {
    expect(Enzyme.shallow(<Reservation />)).toMatchSnapshot();
  });
});
