import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import styles from './styles.js'

import Intro from '../challenges/intro.js';
import Spin from '../challenges/spin.js';
import Identity from '../challenges/identity.js';
import Order from '../challenges/order.js';
import Stack from '../challenges/stack.js';
import Count from '../challenges/count.js';
import Memory from '../challenges/memory.js';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';

var STARTING_TIME = 100.0;
var STARTING_LIVES = 2;

var DIFFICULTY = {
  EASY: 0,
  DIFFICULT: 1,
  CARDINAL: 2,
};

var MODE = {
  CHALLENGE: 0,
  TIMED_MODE: 1,
};

var CHALLENGE = {
  INTRO: 0,
  SPIN: 1,
  IDENTITY: 2,
  COUNT: 3,
  STACK: 4,
  ORDER: 5,
  MEMORY: 6,
};

// Handles the game logic and creating each challenge.
// For now only supports single difficulty mode (play
// through easy, difficult or cardinal).
class Controller extends Component {

  constructor(props) {
    super(props);

    let challengeNumber = 0;

    this.state = {

      // These all get reset when someone starts a challenge.
      mode: MODE.CHALLENGE,
      challengeNumber: challengeNumber,
      lives: 2,
      challenge: this.createChallenge(challengeNumber),
    };
  }

  loseLife() {
    let lives = this.state.lives - 1;
    if (lives <= 0) {
      this.props.failure();
    } else {
      this.setState({lives : lives});
    }
  }

  createChallenge(challengeNumber) {
    let difficulty = this.props.difficulty;
    if (challengeNumber == CHALLENGE.INTRO) {
      return (<Intro controller={this} difficulty={difficulty} />);
    } else if (challengeNumber == CHALLENGE.SPIN) {
      return (<Spin controller={this} difficulty={difficulty} />);
    } else if (challengeNumber == CHALLENGE.IDENTITY) {
      return (<Identity controller={this} difficulty={difficulty} />);
    } else if (challengeNumber == CHALLENGE.COUNT) {
      return (<Count controller={this} difficulty={difficulty} />);
    } else if (challengeNumber == CHALLENGE.STACK) {
      return (<Stack controller={this} difficulty={difficulty} />);
    } else if (challengeNumber == CHALLENGE.ORDER) {
      return (<Order controller={this} difficulty={difficulty} />);
    } else if (challengeNumber == CHALLENGE.MEMORY) {
      return (<Memory controller={this} difficulty={difficulty} />);
    }
  }

  completeChallenge() {
    var nextChallengeNumber = this.state.challengeNumber + 1;
    if (nextChallengeNumber > 6) {
      this.props.success();
    } else {
      this.setState({
        challengeNumber: nextChallengeNumber,
        challenge: this.createChallenge(nextChallengeNumber),
      });
    }
  }

  // Either renders the appropriate LeadIn/intro screen or passes off
  // rendering to the active challenge.
  render() {
    return (
      <View>
        <Header lives={this.state.lives} difficulty={this.props.difficulty} />
        {this.state.challenge}
      </View>
    );
  }
}

export {MODE, DIFFICULTY, Controller};