/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// Handles the current level and challenge.
// Each page should be its own top level component.
class GameController {

  constructor() {
    this.currentLevel = 1;
    this.currentChallenge = null;
    this.introScreens = {
      0: null;
      1: 
    };
    this.currentIntroScreen = introScreens[0]
  }

  nextPage() {

  }

  // Either renders the appropriate home/intro screen or passes off
  // rendering to the active challenge.
  render() {

  }
}

// Challenge is a top-level object that handles transitioning between screens
// within a single challenge and storing all the relevant state.
class Challenge {
  render() {
  }
}

var state = {
  controller = new GameController();
}


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to The Challenge</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
