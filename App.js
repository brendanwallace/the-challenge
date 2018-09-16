/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Intro from './components/challenges/intro.js';
import Finesse from './components/challenges/finesse.js';
import Memory from './components/challenges/memory.js';

// Handles the current level and challenge.
// Each page should be its own top level component.
class GameController extends Component {

  constructor(props) {
    super(props);

    this.currentLevel = 1

    this.state = {
      challenges: [
        <Finesse onSuccess={() => this.nextChallenge()}/>,
        <Memory onSuccess={() => this.nextChallenge()}/>,
        <Intro onSuccess={() => this.nextChallenge()}/>,
      ],
    };
  }

  nextLevel() {
    this.currentLevel += 1;
    this.state.challenges = [
      <Finesse onSuccess={() => this.nextChallenge()}/>,
      <Intro onSuccess={() => this.nextChallenge()}/>,
    ];
  }

  nextChallenge() {
    this.state.challenges.pop();
    if (this.state.challenges.length <= 0) {
      this.nextLevel();
    }
    this.forceUpdate();
  }

  // Either renders the appropriate home/intro screen or passes off
  // rendering to the active challenge.
  render() {
    return (this.state.challenges[this.state.challenges.length - 1]);
  }
}


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <GameController />
    )
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
