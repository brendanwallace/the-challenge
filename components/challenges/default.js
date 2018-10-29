// Finesse challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class DefaultChallenge extends Component {

  constructor(props) {
    super(props);

    // Override these:
    this.title = "";
    this.challengeTime = -1;
    this.rules = ["default 1", "default 2", "default 3"];

    this.state = {
      started: false,
      paused: true,
      remainingTime: this.challengeTime,
    }
  }

  componentDidMount() {
    // This is the correct place to set up timers and do setup things
    // that require the component to have been rendered already.
    var intervalId = setInterval(() => {this.tick()}, 100);
    this.setState({
        intervalId: intervalId,
        remainingTime: this.challengeTime,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  tick() {
    if (this.state.started && !this.state.paused) {
      // Tick at 0.1 second increments to make the starting and stopping 
      // basically smooth.
      var time = this.state.remainingTime - 0.1;
      // lose a life:
      if (time <= 0) {
        this.setState({ remainingTime: this.challengeTime});
        this.props.controller.loseLife();
      } else {
        this.setState({remainingTime : time});
      }
    }
  }

  getRules() {
    return this.rules[this.props.difficulty];
  }

  startChallenge() {
    this.setState({
        started : true,
        paused: false,
        remainingTime: this.challengeTime,
    });
  }

  pause() {
    this.setState({paused: true});
  }

  resume() {
    this.setState({paused: false});
  }

  getButtons() {
    if (!this.state.started) {
      return (<Button title="Start challenge" onPress={() => this.startChallenge()} />);
    }
    if (this.state.paused) {
      return (<Button title="Resume" onPress={() => this.resume()} />);
    }
    return (
      <View>
        <Button title="Pause" onPress={() => this.pause()} />
        <Button title="Complete!" onPress={() => this.props.controller.completeChallenge()} />
      </View>
    )
  }

  render() {
    return (
      <View style={defaultChallenge.view}>
        <Text>{this.title}</Text>
        <Text>{this.getRules()}</Text>
        { true &&
        <Text>{this.state.remainingTime.toFixed(1)}</Text>}
        {this.getButtons()}
      </View>
    )
  }
}

const defaultChallenge = StyleSheet.create({
  view: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    textAlign: 'right',
  },
});