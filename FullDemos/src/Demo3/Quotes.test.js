import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from './Quotes';

it('quote changes when the Next button is clicked', () => {
  // arrange
  
  // act
  const component = renderer.create(<Quotes />);
  let tree = component.toJSON();

  // assert
  expect(tree).toMatchSnapshot();

  // act
  tree.children[1].props.onClick();
  tree = component.toJSON();

  // assert
  expect(tree).toMatchSnapshot();
});
