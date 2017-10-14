/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Storage from 'react-native-storage';

import Home from './src'//首页

const SimpleApp = StackNavigator({
  Home: { screen: Home },
})

export default SimpleApp;
