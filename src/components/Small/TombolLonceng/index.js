import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {LogoLonceng} from '../../../assets';

const TombolLonceng = ({icon}) => {
  const Icon = () => {
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

export default TombolLonceng;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 17,
  },
});
