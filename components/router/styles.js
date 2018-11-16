import React from 'react';
import {StyleSheet} from 'react-native';

import {colors} from '../../styles/common.js';

export default styles = StyleSheet.create({
  view: {
    backgroundColor: colors.GREY_SHADOW,//'white',//"#E6F5F4",//colors.LIGHT_GREY,
    flex: 1,
  },
  challenge: {
    textAlign: 'center',
    flex: 1,
  },
  challengeContainer: {
    flex: 1,
    backgroundColor: '#EDF1F1',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
