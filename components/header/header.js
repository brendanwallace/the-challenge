// Finesse challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

// <Text style={header.text}>Difficulty: {this.props.difficulty}</Text>
// <Text style={header.text}>Lives remaining: {this.props.lives}</Text>

export default class Header extends Component {
  render() {
    return (
      <View style={header.view}>
      </View>
    );
  }
}

const header = StyleSheet.create({
  view: {

  },
  text: {
    textAlign: 'right',
  },
});