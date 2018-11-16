import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

import {text} from '../../styles/common.js';
import {common, small, medium, large, rules, rulesSmallText} from './styles.js';

export default class RoundContent extends Component {
  render() {
    var size;
    if (this.props.size == 'large') {
      size = large;
    } else if (this.props.size == 'medium') {
      size = medium;
    } else if (this.props.size == 'rules') {
      size = rules;
    } else if (this.props.size == 'rulesSmallText') {
      size = rulesSmallText;
    } else {
      size = small;
    }
    return (
      <View
        onPress={this.props.onPress}
        style={[common.view, size.view, this.props.style, {padding: 20, marginTop: -10, paddingTop: 10}]}>
        <Text style={[text.title, common.title, size.title]}>{this.props.title}</Text>
        <Text style={[text.body, common.content, size.content, {textAlign: 'justify'}]}>{this.props.content}</Text>
        {this.props.children}
      </View>);
    }
}