// Order challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import DefaultChallenge from './default.js';

export default class Order extends DefaultChallenge {
  constructor(props) {
    super(props);

    this.title = "Order";
    this.challengeTime = 120;
    this.rules = [
      "Order 1", "Order 2", "Order 3",
    ];
  }
}
