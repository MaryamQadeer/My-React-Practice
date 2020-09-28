import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles';

const GenerateValuesCount = ({ data, cStyle }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View style={styles.containOptions}>
      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text
              style={[styles.textSmall, styles.outline, cStyle]}
              onPress={() => {
                setIsSelected(true); // TODO: Highlight the field when selected
              }}
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
