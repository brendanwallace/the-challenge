/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Intro from './components/challenges/intro.js';
import Finesse from './components/challenges/finesse.js';
import Identity from './components/challenges/identity.js';
import Order from './components/challenges/order.js';
import Stack from './components/challenges/stack.js';
import Count from './components/challenges/count.js';
import Memory from './components/challenges/memory.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

var STARTING_TIME = 100.0;
var STARTING_LIVES = 2;

var PAGE = {
  MENU: 0,
  CHALLENGE_MODE: 1,
  RACE_THE_CLOCK: 2,
  HIGH_SCORES: 3,
  ABOUT: 4,
  LEAD_IN: 5,
  GAME: 6,
  SUCCESS: 7,
  FAILURE: 8,
};

var DIFFICULTY = {
  EASY: 0,
  DIFFICULT: 1,
  CARDINAL: 2,
};

class Router extends Component {

  constructor(props) {
    super(props);

    this.state = {
      screen: PAGE.LEAD_IN,
      controller: null,
    }
  }

  goTo(screen) {
    this.setState({screen: screen});
  }

  success() {
    this.setState({
      screen: PAGE.SUCCESS,
      controller: null,
    });
  }

  failure() {    
    this.setState({
      screen: PAGE.FAILURE,
      controller: null,
    });
  }

  launchChallenge(difficulty) {
    this.setState({
      screen: PAGE.GAME,
      controller: <Controller difficulty={difficulty}
                              mode={MODE.CHALLENGE}
                              success={() => this.success()}
                              failure={() => this.failure()}/>,
    });
  }

  render() {
    return (
      <View style={styles.view}>
        <Text /><Text />
        <Text>The Challenge</Text>
        { this.content() }
      </View>
    )
  }


  content() {
    if (this.state.screen == PAGE.LEAD_IN) {
      return (
        <View>
          <Button title="start" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      );
    } else if (this.state.screen == PAGE.MENU) {
      return (
        <View>
          <Button title="challenge mode" onPress={() => this.goTo(PAGE.CHALLENGE_SELECT)} />
          <Button title="race the clock" onPress={() => this.goTo(PAGE.RACE_THE_CLOCK)} />
          <Button title="high scores" onPress={() => this.goTo(PAGE.HIGH_SCORES)} />
          <Button title="about this game" onPress={() => this.goTo(PAGE.ABOUT)} />
        </View>
      );
    } else if (this.state.screen == PAGE.CHALLENGE_SELECT) {
      return (
        <View>
          <Text>Choose your difficulty</Text>
          <Button title="the easy challenge" onPress={() => this.launchChallenge(DIFFICULTY.EASY)} />
          <Button title="the difficult challenge" onPress={() => this.launchChallenge(DIFFICULTY.DIFFICULT)} />
          <Button title="the cardinal challenge" onPress={() => this.launchChallenge(DIFFICULT.CARDINAL)} />
          <Button title="back to menu" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      )
    } else if (this.state.screen == PAGE.RACE_THE_CLOCK) {
      return (
        <View>
          <Text>Race the clock mode not yet unlocked.</Text>
          <Button title="back to menu" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      )
    } else if (this.state.screen == PAGE.HIGH_SCORES) {
      return (
        <View>
          <Text>No high scores yet.</Text>
          <Button title="back to menu" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      )
    } else if (this.state.screen == PAGE.ABOUT) {
      return (
        <View>
          <Text>No about page yet.</Text>
          <Button title="back to menu" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      )
    } else if (this.state.screen == PAGE.SUCCESS) {
      return (
        <View>
          <Text>SUCCESS!</Text>
          <Button title="back to menu" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      )
    } else if (this.state.screen == PAGE.FAILURE) {
      return (
        <View>
          <Text>fAiLuRe :( you ran out of lives</Text>
          <Button title="back to menu" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      )
    } else if (this.state.screen == PAGE.GAME) {
      return (this.state.controller);
    }
  }
}

var MODE = {
  CHALLENGE: 0,
  TIMED_MODE: 1,
};

var CHALLENGE = {
  INTRO: 0,
  FINESSE: 1,
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

    let challengeNumber = 2;

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
    } else if (challengeNumber == CHALLENGE.FINESSE) {
      return (<Finesse controller={this} difficulty={difficulty} />);
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
      <View style={styles.challengeContainer}>
        <Text /><Text />
        <Header lives={this.state.lives} difficulty={this.props.difficulty} />
        {this.state.challenge}
      </View>
    );
  }
}


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (<Router />);
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  challenge: {
    textAlign: 'center',
    flex: 1,
  },
  challengeContainer: {
    flex: 1,
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
