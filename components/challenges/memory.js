// Count challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import DefaultChallenge from './default.js';

export default class Memory extends DefaultChallenge {
  constructor(props) {
    super(props);

    this.title = "Memory";
    this.challengeTimes = [45, 120, 180];
    this.rules = [
      "count 1",
      "count 2",
      "count 3",
    ];
  }
}
