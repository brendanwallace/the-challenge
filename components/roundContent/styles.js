import React from 'react';
import {StyleSheet} from 'react-native';

import {colors} from '../../styles/common.js';

const common = StyleSheet.create({
  view: {
    borderWidth: 2,
    borderColor: colors.GREY,//colors.LIGHT_GREY,
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor: colors.CONTENT_BLUE,
    // shadow:
    // shadowColor: colors.BLUE_SHADOW,
    // shadowOffset: { height: -3, width: -3 }, // IOS
    // shadowOpacity: 1,  // IOS
    // shadowRadius: 0, //IOS
    // elevation: 2, // Android
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: colors.MEDIUM_GREY,
  },
  content: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: colors.LIGHT_GREY,
  },
});

const small = StyleSheet.create({
  view: {
    width:100,
    height:100,
    borderRadius:100,
  },
  title: {
    fontSize: 12,
  },
  content: {
    fontSize: 8,
  },
});

const medium = StyleSheet.create({
  view: {
    width:150,
    height:150,
    borderRadius:150,
  },
  title: {
    fontSize: 18,
  },
  content: {
    fontSize: 12,
  },
});

const large = StyleSheet.create({
  view: {
    width:220,
    height:220,
    borderRadius:220,
  },
  title: {
    fontSize: 25,
  },
  content: {
    textAlign: 'left',
    textTransform: 'none',
    fontSize: 12,
  },
});

const rules = StyleSheet.create({
  view: {
    width:350,
    height:350,
    borderRadius:350,
  },
  title: {
    fontSize: 20,
  },
  content: {
    fontSize: 15,
    textTransform: 'none',
    textAlign: 'left',
  },
});

const rulesSmallText = StyleSheet.create({
  view: {
    width:350,
    height:350,
    borderRadius:350,
  },
  title: {
    fontSize: 20,
  },
  content: {
    fontSize: 12,
    textTransform: 'none',
    textAlign: 'left',
  },
});


export {common, small, medium, large, rules, rulesSmallText}
