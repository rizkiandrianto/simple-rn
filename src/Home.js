import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Hello World</Text>
        <Button onPress={(e) => { this.props.navigation.navigate('App') }} title="Move to App" />
      </View>
    );
  }
}

export default Home;
