import * as React from 'react';
import {Searchbar, DefaultTheme} from 'react-native-paper';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import ListMateriKecil from '../../Small/ListMateriKecil';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const PencarianComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.container}
        theme={theme}
      />
      <Text style={{marginBottom: 8}}> Materi Populer </Text>
      <ListMateriKecil />
    </View>
  );
};

export default PencarianComponent;

const styles = StyleSheet.create({
  container: {
    width: 355,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 18,
    marginHorizontal: 16,
    marginBottom: 14,
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
