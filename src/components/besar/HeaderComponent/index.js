import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {responsiveHeight, responsiveWidht} from '../../../utils';
import {LogoHeader, LogoKeranjang, LogoLonceng} from '../../../assets/image';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wraperHeader}>
          <LogoHeader style={styles.logoHeader} />
          <LogoKeranjang />
          <LogoLonceng />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: responsiveHeight(70),
    width: responsiveWidht(375),
  },
  wraperHeader: {
    paddingVertical: 9,
  },
  logoHeader: {
    marginLeft: 16,
    marginRight: 206,
    alignItems: 'center',
  },
});
