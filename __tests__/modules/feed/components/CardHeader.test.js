import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { CardHeader } from '../../../../src/modules/feed/components/CardHeader';

const props = {
  title: 'title',
  tag: 'tag',
  readingTime: 'readingtime',
  level: 'level',
  color: 'red',
  image: 'url'
};

describe('<CardHeader />', () => {
  it('Should have a snapshot', () => {
    const wrapper = shallow(<CardHeader {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
