import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Banner1, Banner2, Banner3, Banner4} from '../../../assets/index';
import {responsiveHeight, responsiveWidht} from '../../../utils';

export default class BannerSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [Banner1, Banner2, Banner3, Banner4],
      active: 0,
    };
  }

  render() {
    return (
      <View>
        <SliderBox
          images={this.state.images}
          autoplay
          circleLoop
          sliderBoxHeight={responsiveHeight(189)}
          ImageComponentStyle={styles.slider}
          dotColor={'#326CE5'}
          imageLoadingColor={'#326CE5'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dotstyle: {
    backgroundColor: 'blue',
  },
  slider: {
    borderRadius: 10,
    width: responsiveWidht(343),
    height: responsiveHeight(189),
  },
});
