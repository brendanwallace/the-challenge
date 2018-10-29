// Identity challenge
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import DefaultChallenge from './default.js';

STATE = {
  INPUT: 0,
  INPUTTED: 1,
  REVEAL: 2,
}

class Setup extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      state: STATE.INPUT,
      // writing words:
      'textValue': '',
      'words': [],
    }
  }

  restart() {
    this.setState({
      wordsEntered: false,
      wordsRevealed: false,
      words: [],
    });
  }

  entered() {
    this.setState({state: STATE.INPUTTED});
  }

  reveal() {
    this.setState({state: STATE.REVEAL});
  }

  submitWord(text) {
    this.setState({
      'words': [...this.state.words, this.state.textValue],
    });
    this.textInput.current.clear();
    this.textInput.current.focus();
  }

  complete() {
    this.props.controller.setState({"setupComplete": true});
  }

  render() {
    if (this.state.state == STATE.INPUT) {
      return (
        <View>
          <Text>Identity Setup</Text>
          <Text>Submitted words: {this.state.words.length}</Text>
          <Text>{this.state.latest}</Text>
          <TextInput ref={this.textInput}
            onChangeText={(value) => this.setState({'textValue': value})}
            onSubmitEditing={(text) => this.submitWord(text)}
            autoCapitalize="characters"
            autoCorrect={false}
            autoFocus={true}
          />
          <Button title="done entering words" onPress={() => this.entered()} />
          <Button title="start over" onPress={() => this.restart()} />
        </View>
      );
    } else if (this.state.state == STATE.INPUTTED) {
      return (
        <View>
          <Text>Identify Setup</Text>
          <Text>Pass the phone to the transcriber. That person should press to reveal.</Text>
          <Button title="reveal" onPress={() => this.reveal()} />
          <Button title="start over" onPress={() => this.restart()} />
        </View>
      )
    } else if (this.state.state == STATE.REVEAL) {
      let listWords = this.state.words.map((word, key) =>
        <Text key={key}>{word}</Text>
      );
      return (
        <View>
            <Text>Identity Setup</Text>
            <Text>Submitted words: {this.state.words.length}</Text>
            {listWords}
            <Button title="complete" onPress={() => this.props.setupComplete()} />
            <Button title="start over" onPress={() => this.restart()} />
        </View>
      );
    }
  }
}

export default class Identity extends DefaultChallenge {
  constructor(props) {
    super(props);

    this.title = "Identity";
    this.challengeTime = 180;
    this.rules = [
      "Identity 1",
      "Identity 2",
      "Identity 3",
    ];

    this.state['words'] = []
    this.state['setupComplete'] = false
  }

  setupComplete() {
    this.setState({'setupComplete': true});
  }

  render() {
    if (!this.state.setupComplete) {
      return <Setup setupComplete={() => this.setupComplete()} />
    } else {
      return (
        <View>
          <Text>{this.title}</Text>
          <Text>{this.getRules()}</Text>
          { true &&
          <Text>{this.state.remainingTime.toFixed(1)}</Text>}
          {this.getButtons()}
        </View>
      )
    }
  }
}
