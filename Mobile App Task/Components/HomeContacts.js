import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
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
          <TouchableOpacity>
            <Image style={item.additionalStyle} source={item.source} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default HomeContacts;
