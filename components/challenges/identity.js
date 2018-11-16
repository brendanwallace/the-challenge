// Identity challenge
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import DefaultChallenge from './default.js';

import RoundButton from '../roundButton/roundButton.js';
import RoundContent from '../roundContent/roundContent.js';
import TimerBubble from '../timerBubble/timerBubble.js';

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
      state: STATE.INPUT,
      words: [],
      textValue: '',
    });
  }

  entered() {
    this.setState({state: STATE.INPUTTED});
  }

  shuffle(words) {
    var i;
    for (i = words.length - 1; i > 0; i--) {
      let randomSpot = Math.floor(Math.random() * (i + 1));
      let temp = words[i];
      words[i] = words[randomSpot];
      words[randomSpot] = temp;
    }
  }

  reveal() {
    this.shuffle(this.state.words);
    this.setState({
      state: STATE.REVEAL,
    });
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
          <RoundButton size="small" title="done entering words" onPress={() => this.entered()} />
          <RoundButton size="tiny" title="restart setup" onPress={() => this.restart()} />
        </View>
      );
    } else if (this.state.state == STATE.INPUTTED) {
      return (
        <View>
          <Text>Identify Setup</Text>
          <Text>Pass the phone to the transcriber.</Text>
          <Text>
            Transcriber: if the number of submitted words equals 
            the number of players, press "reveal". Otherwise go back to "enter more words".
          </Text>
          <Text>Submitted words: {this.state.words.length}</Text>
          <RoundButton size="tiny" title="enter more words" onPress={() => this.setState({state: STATE.INPUT})} />
          <RoundButton size="small" title="reveal" onPress={() => this.reveal()} />
          <RoundButton size="tiny" title="restart setup" onPress={() => this.restart()} />
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
            <RoundButton
              size="small"
              title="complete"
              onPress={() => this.props.setupComplete()} />
            <RoundButton
              size="tiny"
              title="restart setup"
              onPress={() => this.restart()} />
        </View>
      );
    }
  }
}

export default class Identity extends DefaultChallenge {
  constructor(props) {
    super(props);

    this.title = "Identity";
    this.challengeTimes = [180, 180, 180];
    this.rules = [
    "To begin this challenge, each player flips over the card dealt in front " +
    "of them during setup. From this point on, players may not speak.\n" +
    "Players now attempt to rearrange the cards so that each player has the " +
    "card with their response in front of them. However, players may not " +
    "freely move cards: to move cards, a player may tap their drink on the " +
    "three times, take a sip, and then switch the cards in front of two " +
    "*other* players (they may never move the card in front of themselves).\n" +
    "At any point a player may say \"we're done\", at which point you must " +
    "pause the game",
      "Identity 2",
      "Identity 3",
    ];

    this.state['words'] = []
    this.state['setupComplete'] = false
  }

  redoSetup() {
    this.pause();
    this.setState({'setupComplete': false});
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
        <RoundContent
          title={this.title}
          content={this.getRules()}
          size="rulesSmallText" />
        <TimerBubble
          style={{marginLeft: 180, marginTop: 0}}
          time={this.state.remainingTime.toFixed(1)}
          lives={this.props.controller.state.lives}
          onPress={() => this.props.controller.completeChallenge()} />
        {this.getButtons()}
        <RoundButton
          style={{marginLeft: 140, marginTop: -60}}
          size="tiny"
          title="redo setup"
          onPress={() => this.redoSetup()} />
      </View>
      )
    }
  }
}
