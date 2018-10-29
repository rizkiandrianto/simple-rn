import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Layout from './Layout';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.title || 'Ini Title'}</Text>
        <Button onPress={(e) => { this.props.navigation.navigate('App') }} title="Move to App" />
      </View>
    );
  }
}

export default Layout({ Screen: Home });
