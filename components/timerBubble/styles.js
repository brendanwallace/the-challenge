import React from 'react';
import {StyleSheet} from 'react-native';

import {colors} from '../../styles/common.js';

export default styles = StyleSheet.create({
  touchableOpacity: {
    borderWidth:2,
    borderColor:'rgba(0,0,0,0.6)',
    alignItems:'center',
    justifyContent:'center',
    width:150,
    height:150,
    borderRadius:150,
    // backgroundColor: colors.LIGHT_GREY,
    // shadow:
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  text: {
    textAlign: 'center',
  },
  lives: {
    fontSize: 15
  },
  time: {
    fontSize: 25,
    
  },
  complete: {
  },
});