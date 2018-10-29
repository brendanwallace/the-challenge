// Count challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import DefaultChallenge from './default.js';

export default class Count extends DefaultChallenge {
  constructor(props) {
    super(props);

    this.title = "Count";
    this.challengeTime = 120;
    this.rules = [
      "count 1", "count 2", "count 3",
    ];
  }
}
