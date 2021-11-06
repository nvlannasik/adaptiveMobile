import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {LogoKeranjang, LogoLonceng} from '../../../assets';

const TombolNotif = ({icon}) => {
  const Icon = () => {
    if (icon === 'keranjang') {
      return <LogoKeranjang />;
    }
    if (icon === 'lonceg') {
      return <LogoLonceng />;
    }
    return <LogoLonceng />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TombolNotif;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 160,
  },
});
