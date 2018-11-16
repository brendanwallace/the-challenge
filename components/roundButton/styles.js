import React from 'react';
import {StyleSheet} from 'react-native';

import {colors} from '../../styles/common.js';

const common = StyleSheet.create({
  touchableOpacity: {
    borderWidth:0,
    borderColor: 'white',//'rgba(0,0,0,0.6)',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: colors.RED,
    //shadow:
    shadowColor: colors.RED_SHADOW, // IOS
    shadowOffset: { height: 3, width: 3}, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 0, //IOS
    elevation: 2, // Android
  },
  text: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  pressed: {
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    elevation: 0,
  }
});

const tiny = StyleSheet.create({
  touchableOpacity: {
    width:70,
    height:70,
    borderRadius:70,
  },
  text: {
    fontSize: 11,
  },
});

const small = StyleSheet.create({
  touchableOpacity: {
    width:100,
    height:100,
    borderRadius:100,
  },
  text: {
    fontSize: 12,
  },
});

const medium = StyleSheet.create({
  touchableOpacity: {
    width:150,
    height:150,
    borderRadius:150,
  },
  text: {
    fontSize: 18,
  },
});

const large = StyleSheet.create({
  touchableOpacity: {
    width:220,
    height:220,
    borderRadius:220,
  },
  text: {
    fontSize: 25,
  },
});


export {common, tiny, small, medium, large}
