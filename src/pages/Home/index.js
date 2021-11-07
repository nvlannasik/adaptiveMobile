import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {HeaderComponent, BannerSlider} from '../../components/besar';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
        <HeaderComponent />
        <BannerSlider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
