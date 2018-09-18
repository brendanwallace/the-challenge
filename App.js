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
import Identity from './components/challenges/identity.js';
import Order from './components/challenges/order.js';
import Stack from './components/challenges/stack.js';
import Count from './components/challenges/count.js';
import Memory from './components/challenges/memory.js';

var STARTING_TIME = 100.0;

var CHALLENGES = {
  INTRO: 0,
  FINESSE: 1,
  IDENTITY: 2,
  COUNT: 3,
  STACK: 4,
  ORDER: 5,
  MEMORY: 6,
};

// Handles the current level and challenge.
// Each page should be its own top level component.
class GameController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 1,
      // this.nextChallenge() will update this to 0 (INTRO) correctly:
      currentChallengeNumber: -1,
      challenges: null,
      time: STARTING_TIME,
      timerRunning: false,
    };
  }

  componentDidMount() {
    // This is the correct place to set up timers and do setup things
    // that require the component to have been rendered already.
    setInterval(() => {this.tick()}, 100);
    this.completeChallenge();
  }

  startTimer() {
    this.setState({timerRunning: true});
  }

  stopTimer() {
    this.setState({timerRunning: false});
  }

  tick() {
    // Tick at 0.1 second increments to make the starting and stopping 
    // basically smooth.
    if (this.state.timerRunning) {
      this.setState({time: this.state.time - 0.1});
    }
  }

  completeChallenge() {
    this.state.currentChallengeNumber += 1;
    // Completed a level:
    if (this.state.currentChallengeNumber > 6) {
      this.state.currentChallengeNumber = 0;
      this.state.currentLevel += 1;
    }

    // Props passed to all the challenges:
    var props = {
      level: this.state.currentLevel,
      onSuccess: () => this.completeChallenge(),
      startTimer: () => this.startTimer(),
      stopTimer: () => this.stopTimer(),
    };
    var challengeElement = null;
    switch (this.state.currentChallengeNumber) {
      case CHALLENGES.INTRO:
        challengeElement = Intro;
        break;
      case CHALLENGES.FINESSE:
        challengeElement = Finesse;
        break;
      case CHALLENGES.IDENTITY:
        challengeElement = Identity;
        break;
      case CHALLENGES.COUNT:
        challengeElement = Count;
        break;
      case CHALLENGES.STACK:
        challengeElement = Stack;
        break;
      case CHALLENGES.ORDER:
        challengeElement = Order;
        break;
      case CHALLENGES.MEMORY:
        challengeElement = Memory;
        break;
    }
    this.setState({
      currentChallenge: React.createElement(
        challengeElement, props)});
  }

  // Either renders the appropriate home/intro screen or passes off
  // rendering to the active challenge.
  render() {
    return (
      <View style={styles.challengeContainer}>
        <Text>{Math.round(this.state.time)}</Text>
        {this.state.currentChallenge}
      </View>
    );
  }
}


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (<GameController />);
  }
}

const styles = StyleSheet.create({
  challengeContainer: {
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
