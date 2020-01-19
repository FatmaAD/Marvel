import React from 'react';
import { shallow } from 'enzyme';
import ComicCard from './comicCard';

describe('<ComicCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<ComicCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
