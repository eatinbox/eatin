import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TrackOrderButton = () => {
  return (
    <View style={style.button}>

      <Text>gandu h tu</Text>

    </View>

  );
}


const style = StyleSheet.create({

  button: {
    width: '50%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',

  },

  text: {
    color: '#fff',
  }
}
)

export default TrackOrderButton;