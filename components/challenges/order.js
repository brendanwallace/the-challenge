// Order challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

class RulesScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is the Order rules screen</Text>
        <Button title="next" onPress={this.props.next} />
      </View>
    );
  }
}

class InProgressScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is the Order in progress screen</Text>
        <Button title="next" onPress={this.props.next} />
      </View>
    );
  }
}

var SCREENS = {
  RULES: 0,
  INPROGRESS: 1,
}

export default class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0,
    }
  }

  next() {
    var nextScreen = this.state.currentScreen + 1;
    if (nextScreen > 1) {
      this.props.onSuccess();
    } else {
      this.setState({currentScreen: nextScreen});
    }
  }

  render() {
    switch(this.state.currentScreen) {
      case SCREENS.RULES:
        return <RulesScreen next={() => this.next()}/>;
      case SCREENS.INPROGRESS:
        return <InProgressScreen next={() => this.next()}/>;
    }
  }
}