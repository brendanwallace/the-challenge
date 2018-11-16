import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

import styles from './styles.js';

import {colors, text} from '../../styles/common.js';

import {Controller, MODE, DIFFICULTY} from '../controller/controller.js';
import RoundButton from '../roundButton/roundButton.js'
import RoundContent from '../roundContent/roundContent.js'

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

export default class Router extends Component {

  constructor(props) {
    super(props);

    this.state = {
      screen: PAGE.MENU,
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
      <View style={[styles.view, {justifyContent: 'space-between'}]}>
        <View
          style={{height: 25,
                  //backgroundColor: colors.RED,
                  borderBottomWidth: 2,
                  borderColor: colors.LIGHT_GREY}}>
          <Text style={[text.title, {fontSize: 12, color: colors.GREY}]}></Text>
        </View>
        <Text />
        { this.content() }
        <View
          style={{height: 25,
                  //backgroundColor: colors.GREY,
                  borderTopWidth: 2,
                  borderColor: colors.LIGHT_GREY,
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row'}}>
          <Text style={[text.title, {fontSize: 12, color: colors.GREY}]}>THE CARDINAL CHALLENGE</Text>
          <Text style={[text.title, {fontSize: 12, color: colors.RED, fontWeight: 'bold'}]}>LIVES: 2</Text>
        </View>
      </View>
    )
  }


  content() {
    if (this.state.screen == PAGE.LEAD_IN) {
      return (
        <View style={styles.leadinView}>
          <RoundButton title="start" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      );
    } else if (this.state.screen == PAGE.MENU) {
      return (
        <View>
          <RoundContent
            size="large"
            title="THE CARDINAL CHALLENGE"
            style={{marginLeft: 140, marginTop: 20}}>
          </RoundContent>
          <RoundButton
            style={{marginLeft: 30, marginTop: -30}}
            size="medium"
            title="CHALLENGE MODE"
            onPress={() => this.goTo(PAGE.CHALLENGE_SELECT)} />
          <RoundButton
            style={{marginLeft: 170, marginTop: -30}}
            size="medium"
            title="RACE THE CLOCK"
            onPress={() => this.goTo(PAGE.RACE_THE_CLOCK)} />
          <RoundButton
            style={{marginLeft: 30, marginTop: -70}}
            size="small"
            title="HIGH SCORES"
            onPress={() => this.goTo(PAGE.HIGH_SCORES)} />
          <RoundButton
            style={{marginLeft: 120}}
            size="small"
            title="ABOUT THIS GAME"
            onPress={() => this.goTo(PAGE.ABOUT)} />
        </View>
      );
    } else if (this.state.screen == PAGE.CHALLENGE_SELECT) {
      return (
        <View>
          <RoundContent
            style={{marginLeft: 100}}
            title="Pick a difficulty"
            size="large"
            content="" />
          <RoundButton
            style={{marginLeft: 60, marginTop: 40}}
            title="the easy challenge"
            size="small"
            onPress={() => this.launchChallenge(DIFFICULTY.EASY)} />
          <RoundButton
            style={{marginLeft: 200, marginTop: -40}}
            title="the difficult challenge"
            size="small"
            onPress={() => this.launchChallenge(DIFFICULTY.DIFFICULT)} />
          <RoundButton
            style={{marginLeft: 70, marginTop: 0}}
            title="the cardinal challenge"
            size="small"
            onPress={() => this.launchChallenge(DIFFICULT.CARDINAL)} />
          <RoundButton
            style={{marginLeft: 200}}
            title="back to menu"
            size="tiny"
            onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      )
    } else if (this.state.screen == PAGE.RACE_THE_CLOCK) {
      return (
        <View>
          <Text>Race the clock mode not yet unlocked.</Text>
          <RoundButton title="back to menu" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      )
    } else if (this.state.screen == PAGE.HIGH_SCORES) {
      return (
        <View>
          <Text>No high scores yet.</Text>
          <RoundButton title="back to menu" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      )
    } else if (this.state.screen == PAGE.ABOUT) {
      return (
        <View>
          <Text>No about page yet.</Text>
          <RoundButton title="back to menu" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      )
    } else if (this.state.screen == PAGE.SUCCESS) {
      return (
        <View>
          <RoundContent
            size="large"
            title="SUCCESS" 
            style={{}} />
          <RoundButton title="back to menu" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      )
    } else if (this.state.screen == PAGE.FAILURE) {
      return (
        <View>
          <Text>fAiLuRe :( you ran out of lives</Text>
          <RoundButton title="back to menu" onPress={() => this.goTo(PAGE.MENU)} />
        </View>
      )
    } else if (this.state.screen == PAGE.GAME) {
      return (this.state.controller);
    }
  }
}