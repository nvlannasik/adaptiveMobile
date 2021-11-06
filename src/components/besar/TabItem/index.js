import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHomeAktif,
  IconHomeNonAktif,
  IconPencarianAktif,
  IconPencarianNonAktif,
  IconPlayAktif,
  IconPlayNonAktif,
  IconProfileAktif,
  IconProfileNonAktif,
  IconWishlistAktif,
  IconWishlistNonAktif,
} from '../../../assets';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label == 'Home') {
      return isFocused ? <IconHomeAktif /> : <IconHomeNonAktif />;
    }

    if (label == 'Pencarian') {
      return isFocused ? <IconPencarianAktif /> : <IconPencarianNonAktif />;
    }

    if (label == 'MateriSaya') {
      return isFocused ? <IconPlayAktif /> : <IconPlayNonAktif />;
    }

    if (label == 'Wishlist') {
      return isFocused ? <IconWishlistAktif /> : <IconWishlistNonAktif />;
    }

    if (label == 'Profile') {
      return isFocused ? <IconProfileAktif /> : <IconProfileNonAktif />;
    }

    return isFocused ? <IconPlayAktif /> : <IconPlayNonAktif />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    color: isFocused ? '#326CE5' : 'black',
    fontSize: 11,
    marginTop: 4,
  }),
});
