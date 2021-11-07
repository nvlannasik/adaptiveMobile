import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import {Course1, Course2, Course3, IconBintang} from '../../../assets';

export default class Diskon extends Component {
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={Course1} style={styles.gambarCourse} />
          <Text style={styles.judulCourse}>
            Belajar Docker Dengan Mudah Cocok Untuk Pemula
          </Text>
          <Text style={styles.pemateri}>Imbron bin Somat & Imbron bin cos</Text>
          <View style={styles.containerReview}>
            <Image source={IconBintang} style={styles.bintaing} />
            <Image source={IconBintang} style={styles.bintaing} />
            <Image source={IconBintang} style={styles.bintaing} />
            <Image source={IconBintang} style={styles.bintaing} />
            <Image source={IconBintang} style={styles.bintaing} />
            <Text style={styles.jumlahReview}>5 (9999)</Text>
          </View>
          <Text style={styles.hargaCourse}>Rp. 350.000</Text>
          <View style={styles.containerlarisManis}>
            <Text style={styles.textLaris}>Terlaris</Text>
          </View>
        </View>

        <View style={styles.container2}>
          <Image source={Course2} style={styles.gambarCourse} />
          <Text style={styles.judulCourse}>
            Belajar Docker Dengan Mudah Cocok Untuk Pemula
          </Text>
          <Text style={styles.pemateri}>Imbron bin Somat & Imbron bin cos</Text>
          <View style={styles.containerReview}>
            <Image source={IconBintang} style={styles.bintaing} />
            <Image source={IconBintang} style={styles.bintaing} />
            <Image source={IconBintang} style={styles.bintaing} />
            <Image source={IconBintang} style={styles.bintaing} />
            <Image source={IconBintang} style={styles.bintaing} />
            <Text style={styles.jumlahReview}>5 (9999)</Text>
          </View>
          <Text style={styles.hargaCourse}>Rp. 350.000</Text>
          <View style={styles.containerlarisManis}>
            <Text style={styles.textLaris}>Terlaris</Text>
          </View>
        </View>

        <View style={styles.container2}>
          <Image source={Course3} style={styles.gambarCourse} />
          <Text style={styles.judulCourse}>
            Belajar Docker Dengan Mudah Cocok Untuk Pemula
          </Text>
          <Text style={styles.pemateri}>Imbron bin Somat & Imbron bin cos</Text>
          <View style={styles.containerReview}>
            <Image source={IconBintang} style={styles.bintaing} />
            <Image source={IconBintang} style={styles.bintaing} />
            <Image source={IconBintang} style={styles.bintaing} />
            <Image source={IconBintang} style={styles.bintaing} />
            <Image source={IconBintang} style={styles.bintaing} />
            <Text style={styles.jumlahReview}>5 (9999)</Text>
          </View>
          <Text style={styles.hargaCourse}>Rp. 350.000</Text>
          <View style={styles.containerlarisManis}>
            <Text style={styles.textLaris}>Terlaris</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 233,
    height: 286,

    marginLeft: 16,
    marginTop: 8,
  },
  container2: {
    width: 233,
    height: 286,

    marginLeft: 8,
    marginTop: 8,
  },
  containerReview: {
    height: 18,
    width: 158,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 8,
  },
  gambarCourse: {
    borderRadius: 10,
    width: 233,
    height: 131,
  },
  judulCourse: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 9,
    marginBottom: 4,
  },
  pemateri: {
    fontSize: 13,
  },
  bintaing: {
    width: 17,
    height: 16,
    marginHorizontal: 1,
  },
  jumlahReview: {
    fontSize: 12,
    marginLeft: 9,
    fontWeight: 'bold',
  },
  hargaCourse: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
  },
  containerlarisManis: {
    width: 63,
    height: 24,
    alignItems: 'center',
    backgroundColor: '#ffe992',
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 8,
  },
  textLaris: {
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: 'center',
    marginVertical: 3,
    marginHorizontal: 9,
  },
});
