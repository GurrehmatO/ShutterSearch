import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../HomeScreen.component';

describe('HomeScreen component', () => {
  it('should render correctly', () => {
    const component = renderer.create(<HomeScreen />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
