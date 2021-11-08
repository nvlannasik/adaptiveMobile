import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {AlarmIcon} from '../../../assets';

const Countdown = () => {
  const [secondsLeft, setSecondsLeft] = useState(360001);
  const [timerOn, setTimerOn] = useState(true);

  useEffect(() => {
    if (timerOn) startTimer();
    else BackgroundTimer.stopBackgroundTimer();
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(secs => {
        if (secs > 0) return secs - 1;
        else return 0;
      });
    }, 1000);
  };

  useEffect(() => {
    if (secondsLeft === 0) BackgroundTimer.stopBackgroundTimer();
  }, [secondsLeft]);

  const waktunya = () => {
    let hours = Math.floor(secondsLeft / 60 / 60);
    let min = Math.floor((secondsLeft / 60) % 60);
    let seconds = Math.floor(secondsLeft % 60);

    let displayJam = hours < 10 ? `0${hours}` : hours;
    let displayMenit = min < 10 ? `0${min}` : min;
    let displayDetik = seconds < 10 ? `0${seconds}` : seconds;

    return {
      displayJam,
      displayMenit,
      displayDetik,
    };
  };
  return (
    <View style={styles.container}>
      <Image source={AlarmIcon} style={styles.Alarm} />
      <Text style={styles.tulisan}>
        {' '}
        {waktunya().displayJam} Jam {waktunya().displayMenit} Menit{' '}
        {waktunya().displayDetik} Detik
      </Text>
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  container: {
    width: 185,
    height: 22,
    borderRadius: 10,
    backgroundColor: '#C82222',
    flexDirection: 'row',
    marginTop: 2,
  },
  tulisan: {
    fontSize: 13,
    fontWeight: '500',
    color: 'white',
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 2,
  },
  Alarm: {
    width: 12,
    height: 12,
    marginVertical: 5,
    marginLeft: 5,
  },
});
