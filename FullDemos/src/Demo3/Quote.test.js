import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

it('renders a div with some text', () => {
  // arrange
  const testText = 'This is some test text.';
  
  // act
  const compoent = renderer.create(<Quote text={testText} />);
  const tree = compoent.toJSON();

  // assert
  expect(tree).toMatchSnapshot();
  expect(tree.children[0]).toBe(testText);
});
