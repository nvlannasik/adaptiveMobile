import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {responsiveHeight} from '../../../utils';
import {Course1} from '../../../assets';

export default class Partner extends Component {
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={Course1} style={styles.gambarPartner} />
        </View>
        <View style={styles.container2}>
          <Image source={Course1} style={styles.gambarPartner} />
        </View>
        <View style={styles.container2}>
          <Image source={Course1} style={styles.gambarPartner} />
        </View>
        <View style={styles.container2}>
          <Image source={Course1} style={styles.gambarPartner} />
        </View>
        <View style={styles.container2}>
          <Image source={Course1} style={styles.gambarPartner} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    width: responsiveHeight(200),
    height: responsiveHeight(100),
    marginTop: 8,
    marginLeft: 16,
  },
  container2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    width: responsiveHeight(200),
    height: responsiveHeight(100),
    marginTop: 8,
    marginLeft: 8,
  },
  gambarPartner: {
    borderRadius: 10,
    width: responsiveHeight(200),
    height: responsiveHeight(100),
  },
});
