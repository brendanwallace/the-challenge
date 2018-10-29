// Stack challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import DefaultChallenge from './default.js';

export default class Stack extends DefaultChallenge {
  constructor(props) {
    super(props);

    this.title = "Stack";
    this.challengeTime = 5;
    this.rules = [
      "Stack 1", "Stack 2", "Stack 3",
    ];
  }
}
