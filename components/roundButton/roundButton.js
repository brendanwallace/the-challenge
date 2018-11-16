import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';

import {text, colors} from '../../styles/common.js';
import {common, tiny, small, medium, large} from './styles.js';

export default class RoundButton extends Component {
  constructor(props) {
    super(props);
    this.state = {pressed: false};
  }

  render() {
    var size;
    if (this.props.size == 'large') {
      size = large;
    } else if (this.props.size == 'medium') {
      size = medium;
    } else if (this.props.size == 'small') {
      size = small;
    } else {
      size = tiny;
    }

    var style = [common.touchableOpacity, size.touchableOpacity, this.props.style];

    if (this.state.pressed) {
      style.push(common.pressed);
    }

    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={style}
        activeOpacity={1}
        underlayColor={colors.DARKER_RED}
        onShowUnderlay={() => this.setState({pressed: true})}
        onHideUnderlay={() => this.setState({pressed: false})}
        >
        <View>
          <Text style={[text.title, common.text, size.text]}>{this.props.title}</Text>
          {this.props.children}
        </View>
      </TouchableHighlight>);
    }
}