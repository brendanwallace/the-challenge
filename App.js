/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import Router from './components/router/router.js';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (<Router />);
  }
}
