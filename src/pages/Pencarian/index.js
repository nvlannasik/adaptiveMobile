import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import PencarianComponent from '../../components/besar/PencarianComponent';

export default class Pencarian extends Component {
  render() {
    return (
      <View>
        <PencarianComponent />
        <Text>Materi Populer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
