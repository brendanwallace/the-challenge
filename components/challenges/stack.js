// Stack challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import DefaultChallenge from './default.js';

export default class Stack extends DefaultChallenge {
  constructor(props) {
    super(props);

    this.title = "Stack";
    this.challengeTimes = [45, 120, 90];
    this.rules = [
      "Build a card pyramid. Each player must add a triangle (/\\) of cards. " +
      "Any time the pyramid falls, all players drink and start over.",
      "Stack 2",
      "Stack 3",
    ];
  }
}
