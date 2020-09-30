import React from 'react';
import { View, FlatList } from 'react-native';
import GenerateValuesCount from '../Components/GenerateValuesCount';
import Headings from '../Components/Headings';
const HomeRequirements = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Headings src={item.src} text={item.text} />
          <GenerateValuesCount cStyle={item.additionalStyle} data={item.data} />
        </View>
      )}
    />
  );
};

export default HomeRequirements;
