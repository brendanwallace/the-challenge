// intro challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is the home screen</Text>
        <Button title="next" onPress={this.props.next} />
      </View>
    );
  }
}

class SelectScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is the select screen</Text>
        <Button title="next" onPress={this.props.next} />
      </View>
    );
  }
}

class RulesAndRequirementsScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is the rules and requirements screen</Text>
        <Button title="next" onPress={this.props.next} />
      </View>
    );
  }
}

class LevelIntroScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is the level intro screen</Text>
        <Button title="next" onPress={this.props.next} />
      </View>
    );
  }
}

var SCREENS = {
  HOME: 0,
  SELECT: 1,
  RULESANDREQUIREMENTS: 2,
  LEVELINTRO: 3,
}

export default class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentScreen: SCREENS.HOME,
    }
  }

  next() {
    var nextScreen = this.state.currentScreen + 1;
    if (nextScreen > 3) {
      this.props.onSuccess();
    } else {
      this.setState({currentScreen: nextScreen});
    }
  }

  render() {
    switch(this.state.currentScreen) {
      case SCREENS.HOME:
        return <HomeScreen next={() => this.next()}/>;
      case SCREENS.SELECT:
        return <SelectScreen next={() => this.next()}/>;
      case SCREENS.RULESANDREQUIREMENTS:
        return <RulesAndRequirementsScreen next={() => this.next()}/>;
      case SCREENS.LEVELINTRO:
        return <LevelIntroScreen next={() => this.next()}/>;
    }
  }
}