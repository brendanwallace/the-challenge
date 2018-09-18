// Finesse challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

var LEVEL_ONE_RULES = (
  "Going in turn around the table, each player must spin a coin on the "
  + "table, take a sip from their drink while it’s still spinning, and then "
  + "pick the coin up cleanly between their pointer and middle fingers of one "
  + "hand (making a gesture like cutting scissors).  If any player fails, the "
  + "whole group must start over. You may reorder the players however you "
  + "like.");

class RulesScreen extends Component {
  getRules() {
    switch (this.props.level) {
      case 1:
        return LEVEL_ONE_RULES;
      case 2:
        return "";
      case 3:
        return "";
    }
  }

  render() {
    return (
      <View>
        <Text>{this.getRules()}</Text>
        <Button title="Start challenge" onPress={this.props.startChallenge} />
      </View>
    );
  }
}

class InProgressScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is the Finesse in progress screen</Text>
        <Button title="Show rules" onPress={this.props.showRules} />
        <Button title="Complete challenge" onPress={this.props.completeChallenge} />
      </View>
    );
  }
}

var SCREENS = {
  RULES: 0,
  INPROGRESS: 1,
}

export default class Finesse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0,
    }
  }

  startTimer() {
    this.props.startTimer();
  }
  stopTimer() {
    this.props.stopTimer();
  }

  showRules() {
    this.stopTimer();
    this.setState({currentScreen: SCREENS.RULES});
  }

  startChallenge() {
    this.startTimer();
    this.setState({currentScreen: SCREENS.INPROGRESS});
  }

  completeChallenge() {
    this.stopTimer();
    this.props.onSuccess();
  }

  render() {
    switch(this.state.currentScreen) {
      case SCREENS.RULES:
        return <RulesScreen level={this.props.level} startChallenge={() => this.startChallenge()}/>;
      case SCREENS.INPROGRESS:
        return <InProgressScreen
                showRules={() => this.showRules()}
                completeChallenge={() => this.completeChallenge()}/>;
    }
  }
}