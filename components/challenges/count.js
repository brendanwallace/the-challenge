// Count challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

class RulesScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is the Count rules screen</Text>
        <Button title="Start challenge" onPress={this.props.startChallenge} />
      </View>
    );
  }
}

class InProgressScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is the Count in progress screen</Text>
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

export default class Count extends Component {

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
        return <RulesScreen startChallenge={() => this.startChallenge()}/>;
      case SCREENS.INPROGRESS:
        return <InProgressScreen
                showRules={() => this.showRules()}
                completeChallenge={() => this.completeChallenge()}/>;
    }
  }
}