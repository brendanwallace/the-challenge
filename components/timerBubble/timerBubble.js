import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import {text, colors} from '../../styles/common.js'
import styles from './styles.js';
import RoundButton from '../roundButton/roundButton.js';
import RoundContent from '../roundContent/roundContent.js';

export default class TimerBubble extends Component {
  render() {
    return (
      <RoundButton
        onPress={this.props.onPress}
        size='medium'
        style={this.props.style}>
        <Text style={[text.body, styles.text, styles.time]}>{this.props.time}</Text>
        <Text style={[text.title, styles.text, styles.complete]}>PRESS WHEN COMPLETE</Text>
      </RoundButton>);
  }
}