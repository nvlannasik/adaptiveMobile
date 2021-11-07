import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {HeaderComponent, BannerSlider, Partner} from '../../components/besar';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
        <HeaderComponent />
        <BannerSlider />
        <Text style={styles.tulisanPartner}> Partner Kami </Text>
        <Partner />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  tulisanPartner: {
    marginLeft: 16,
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 16,
  },
});
