// intro challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import RoundButton from '../roundButton/roundButton.js';
import RoundContent from '../roundContent/roundContent.js';

class RulesAndRequirements extends Component {
  render() {
    return (
      <View>
        <RoundContent
            style={{marginLeft: 20}}
            title="Rules"
            size="rules"
            content="Over the following minutes, you and your team will work together
          to complete a series of timed drinking-game challenges. Take too long
          during any of them, and you lose a life. Complete all 6 challenges
          before losing all of your lives to complete a difficulty level.
          Complete all 3 difficulty levels and you have bested The Challenge." />

        <RoundContent
            style={{marginLeft: 0}}
            size="large"
            content="Each challenge is a cooperative drinking game.  Mistakes
          will often require each player to take a sip of their drink to
          proceed.  Before you begin, make sure that each player has a suitable
          drink." />
        <RoundButton
          style={{marginLeft: 250, marginTop: -50}}
          title="next"
          onPress={this.props.next} />
      </View>
    );
  }
}

export default class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rulesShown: false,
      levelIntroShown: false,
    }
  }

  next() {
    this.props.controller.completeChallenge();
  }

  render() {
    return <RulesAndRequirements next={() => this.next()} />;
  }
}
