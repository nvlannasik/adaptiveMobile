import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Countdown} from '../../components/Small';

export default class Pencarian extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Countdown />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
