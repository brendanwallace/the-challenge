// Count challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import DefaultChallenge from './default.js';

export default class Count extends DefaultChallenge {
  constructor(props) {
    super(props);

    this.title = "Count";
    this.challengeTimes = [45, 120, 180];
    this.rules = [
      "All players close their eyes. Count to 10 as a group without the same player " +
      "saying two numbers in a row and with every player saying at least one number. " +
      "Any time you make a mistake or two players start to speak at the same time, all " +
      "players drink and start over.\n" +
      "You may not make any strategy as to who speaks first, or in what order players " +
      "proceed. You must start with a random player and proceed in a random order using " +
      "only teamwork, chemistry, and intuition.",
      "count 2",
      "count 3",
    ];
  }
}
