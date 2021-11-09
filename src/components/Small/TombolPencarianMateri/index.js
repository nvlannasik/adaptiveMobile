import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated, {Easing} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchIcon} from '../../../assets';

const {Value, timing} = Animated;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class TombolPencarianMateri extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      keyword: '',
    };
    this._input_box_translate_x = new Value(width);
    this._back_button_opacity = new Value(0);
    this._content_translate_y = new Value(height);
    this._content_opacity = new Value(0);
  }

  _onFocus = () => {
    this.setState({isFocused: true});
    const input_box_translate_x_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    const back_button_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };
    const content_translate_y_config = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    const content_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };
    timing(this._input_box_translate_x, input_box_translate_x_config).start();
    timing(this._back_button_opacity, back_button_opacity_config).start();
    timing(this._content_translate_y, content_translate_y_config).start();
    timing(this._content_opacity, content_opacity_config).start();
    this.refs.input.focus();
  };

  _onBlur = () => {
    this.setState({isFocused: false});
    const input_box_translate_x_config = {
      duration: 200,
      toValue: width,
      easing: Easing.inOut(Easing.ease),
    };
    const back_button_opacity_config = {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    const content_translate_y_config = {
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease),
    };
    const content_opacity_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    timing(this._input_box_translate_x, input_box_translate_x_config).start();
    timing(this._back_button_opacity, back_button_opacity_config).start();
    timing(this._content_translate_y, content_translate_y_config).start();
    timing(this._content_opacity, content_opacity_config).start();

    this.refs.input.blur();
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.containerSafeArea}>
          <View style={styles.headerContainer}>
            <View style={styles.isiHeader}>
              <View>
                <Text> Materi Saya </Text>
              </View>
              <TouchableHighlight
                activeOpacity={1}
                underlayColor={'#ccd0d5'}
                onPress={this._onFocus}
                style={styles.buatIconContainer}>
                <Icon name="search" size={22} />
              </TouchableHighlight>
              <Animated.View
                style={[
                  styles.inputBox,
                  {transform: [{translateX: this._input_box_translate_x}]},
                ]}>
                <Animated.View style={{opacity: this._back_button_opacity}}>
                  <TouchableHighlight
                    activeOpacity={1}
                    underlayColor={'#ccd0d5'}
                    onPress={this._onBlur}
                    style={styles.backIconContainer}>
                    <Icon name="chevron-back" size={22} />
                  </TouchableHighlight>
                </Animated.View>
                <TextInput
                  ref="input"
                  placeholder="Seacrh Facebook"
                  clearButtonMode="always"
                  value={this.state.keyword}
                  onChangeText={value => this.setState({keyword: value})}
                  style={styles.input}
                />
              </Animated.View>
            </View>
          </View>
        </SafeAreaView>
        <Animated.View
          style={
            (styles.content,
            {
              opacity: this._content_opacity,
              transform: [{translateY: this._content_translate_y}],
            })
          }>
          <SafeAreaView style={styles.contentSafeArea}>
            <View style={styles.contentInner}>
              <View style={styles.separator} />
              {this.state.keyword === '' ? (
                <View style={styles.imagePlaceholderContainer}>
                  <Image source={SearchIcon} style={styles.imagePlaceholder} />
                  <Text style={styles.imagePlaceholderText}>Enter word</Text>
                </View>
              ) : (
                <ScrollView>
                  <View style={styles.searchItem}>
                    <Icon
                      style={styles.itemIcon}
                      name="search"
                      size={16}
                      color="cccccc"
                    />
                    <Text>result</Text>
                  </View>
                  <View style={styles.searchItem}>
                    <Icon
                      style={styles.itemIcon}
                      name="search"
                      size={16}
                      color="cccccc"
                    />
                    <Text>result2</Text>
                  </View>
                  <View style={styles.searchItem}>
                    <Icon
                      style={styles.itemIcon}
                      name="search"
                      size={16}
                      color="cccccc"
                    />
                    <Text>result3</Text>
                  </View>
                  <View style={styles.searchItem}>
                    <Icon
                      style={styles.itemIcon}
                      name="search"
                      size={16}
                      color="cccccc"
                    />
                    <Text>result4</Text>
                  </View>
                </ScrollView>
              )}
            </View>
          </SafeAreaView>
        </Animated.View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerSafeArea: {
    zIndex: 1000,
  },
  headerContainer: {
    height: 50,
    paddingHorizontal: 16,
  },
  isiHeader: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  buatIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#e4e6eb',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    width: width - 32,
  },
  backIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#e4e6eb',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  content: {
    width: width,
    height: height,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 999,
  },
  contentSafeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentInner: {
    flex: 1,
    paddingTop: 50,
  },
  separator: {
    margin: 5,
    height: 1,
    backgroundColor: '#e6e4eb',
  },
  imagePlaceholderContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '-50%',
  },
  imagePlaceholder: {
    width: 150,
    height: 113,
    alignSelf: 'center',
  },
  imagePlaceholderText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 5,
  },
  searchItem: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e4eb',
    marginLeft: 16,
  },
  itemIcon: {
    marginLeft: 15,
  },
});
