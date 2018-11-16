// Order challenge

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import DefaultChallenge from './default.js';


EASY_CHALLENGE = "";
DIFFICULT_CHALLENGE = "";
CARDINAL_CHALLENGE = "";

export default class Order extends DefaultChallenge {
  constructor(props) {
    super(props);

    this.title = "Order";
    this.challengeTimes = [90, 120, 120];
    this.rules = [EASY_CHALLENGE, DIFFICULT_CHALLENGE, CARDINAL_CHALLENGE];
  }
}
