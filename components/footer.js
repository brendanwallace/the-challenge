// Finesse challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <Text style={styles.footer}></Text>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});