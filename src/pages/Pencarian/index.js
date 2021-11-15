import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import PencarianComponent from '../../components/besar/PencarianComponent';
import ListMateriKecil from '../../components/Small/ListMateriKecil';

export default class Pencarian extends Component {
  render() {
    return (
      <View>
        <PencarianComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
