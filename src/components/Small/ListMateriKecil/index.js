import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

export default class ListMateriKecil extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sprator} />
        <View style={styles.containerKedua}>
          <View style={styles.Gambarmateri} />
          <Text style={styles.textContainer}>
            {' '}
            Belajar Kubernetes Besama Imbron bin Somat{' '}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.width,
    height: 151,
    backgroundColor: 'white',
    alignContent: 'center',
  },
  containerKedua: {
    width: Dimensions.width,
    height: 135,
    backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: 16,
  },
  Gambarmateri: {
    width: 80,
    height: 83,
    marginLeft: 16,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginTop: 18,
  },
  sprator: {
    height: 1,
    backgroundColor: 'black',
    width: 355,
    marginHorizontal: 16,
  },
  textContainer: {
    marginTop: 16,
    fontSize: 15,
    marginLeft: 8,
    marginRight: 16,
    fontWeight: 'bold',
  },
});
