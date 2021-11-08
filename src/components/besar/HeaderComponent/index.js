import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {responsiveHeight, responsiveWidht} from '../../../utils';
import {LogoHeader} from '../../../assets/image';
import {TombolLonceng, TombolNotif} from '../../index';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Ini logo header */}
        <View style={styles.wraperHeader}>
          <View style={styles.searchSection}>
            <LogoHeader />
          </View>
          <TombolNotif icon="keranjang" />
          <TombolLonceng icon="lonceng" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(70),
    width: responsiveWidht(375),
  },
  wraperHeader: {
    paddingVertical: 9,
    flexDirection: 'row',
  },
  searchSection: {
    alignItems: 'center',
    marginLeft: 16,
  },
});
