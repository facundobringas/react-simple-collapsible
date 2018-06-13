import {Collapsible} from '../index';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('Search renders correctly', () => {
    const component = renderer.create(<Collapsible />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

it('renders without crashing', () => {
    shallow(<Collapsible />);
});