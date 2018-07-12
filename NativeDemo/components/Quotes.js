import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Quote = (props) => (
  <View>
    <Text>
      {props.text}
    </Text>
  </View>
);

class Quotes extends PureComponent {
  render() {
    return (
      <View>
        <Quote text={this.props.quote} />
        <Button title={'Next'} onPress={this.props.getNextQuote} />
      </View>
    );
  }
}

export default Quotes;
