import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles';
const Headings = ({ src, text }) => {
  return (
    <View style={[styles.row, styles.center]}>
      <Image style={styles.inlinePic} source={src} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Headings;
