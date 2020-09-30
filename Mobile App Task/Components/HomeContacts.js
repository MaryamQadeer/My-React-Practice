import React from 'react';
import { View, FlatList, Image } from 'react-native';
import Headings from '../Components/Headings';
import styles from '../styles';
const HomeContacts = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={[styles.spaceBetweenRow]}>
          <Headings src={item.src} text={item.text} />
          <Image style={item.additionalStyle} source={item.source} />
        </View>
      )}
    />
  );
};

export default HomeContacts;
