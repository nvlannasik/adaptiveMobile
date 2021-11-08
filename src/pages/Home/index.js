import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Countdown} from '../../components';
import {
  HeaderComponent,
  BannerSlider,
  Partner,
  Courses,
  Diskon,
} from '../../components/besar';

export default class Home extends Component {
  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.page}>
            <HeaderComponent />
            <BannerSlider />
            <Text style={styles.tulisanPartner}> Rekomendasi Materi </Text>
            <Courses />
            <Text style={styles.tulisanPartner}> Diskon Spesial </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.diskon}>Berakhir Dalam</Text>
              <Countdown />
            </View>
            <Diskon />
            <Text style={styles.tulisanPartner}> Partner Kami </Text>
            <Partner />
          </View>
        </ScrollView>
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
  diskon: {
    fontSize: 13,
    marginLeft: 19,
    marginTop: 4,
    marginRight: 7,
    fontWeight: '500',
    marginBottom: 2,
  },
});
