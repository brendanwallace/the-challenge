// Finesse challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import RoundContent from '../roundContent/roundContent.js';
import RoundButton from '../roundButton/roundButton.js';
import TimerBubble from '../timerBubble/timerBubble.js';

export default class DefaultChallenge extends Component {

  constructor(props) {
    super(props);

    // Override these:
    this.title = null;
    this.challengeTimes = null;
    this.rules = null;

    this.state = {
      started: false,
      paused: true,
      remainingTime: -1,
    }
  }

  componentDidMount() {
    // This is the correct place to set up timers and do setup things
    // that require the component to have been rendered already.
    var intervalId = setInterval(() => {this.tick()}, 100);
    this.challengeTime = this.challengeTimes[this.props.difficulty];
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
    var title;
    var onPress;
    if (!this.state.started) {
      title = "start challenge";
      onPress = () => this.startChallenge();
    } else if (this.state.paused) {
      title = "resume";
      onPress = () => this.resume();
    } else {
      title = "pause";
      onPress = () => this.pause();
    }
    return (<RoundButton
              style={{marginTop: -40, marginLeft: 20}}
              size="small"
              title={title}
              onPress={onPress} />);
  }

  render() {
    return (
      <View>
        <RoundContent
          title={this.title}
          content={this.getRules()}
          size="rules" />
        <TimerBubble
          style={{marginLeft: 180, marginTop: 20}}
          time={this.state.remainingTime.toFixed(1)}
          lives={this.props.controller.state.lives}
          started={this.state.started}
          onPress={() => this.props.controller.completeChallenge()} />
        {this.getButtons()}
      </View>
    )
  }
}