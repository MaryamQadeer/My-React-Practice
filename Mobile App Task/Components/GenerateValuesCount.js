import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles';

const GenerateValuesCount = ({ data, cStyle }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [getItem, setItem] = useState('');
  return (
    <View style={styles.containOptions}>
      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setItem(item);
              isSelected ? setIsSelected(false) : setIsSelected(true); // TODO: Highlight the field when selected
            }}
          >
            <Text
              style={[
                styles.textSmall,
                styles.outline,
                cStyle,
                isSelected && item === getItem && styles.selected,
              ]}
              selected={isSelected}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default GenerateValuesCount;
