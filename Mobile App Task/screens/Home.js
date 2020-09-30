import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles';
import HomeRequirements from '../Components/HomeRequirements';
import GenerateValuesCount from '../Components/GenerateValuesCount';
import HomeContacts from '../Components/HomeContacts';
const Home = ({ navigation }) => {
  let data = [];
  const arr = ['Home', 'Flat', 'Upper Portion', 'Lower Portion'];
  const generate = (limit) => {
    data = [];
    for (let i = 0; i < limit; i++) {
      data[i] = i + 1;
    }
    return data;
  };
  const items = [
    {
      id: 0,
      src: require('../assets/home.png'),
      text: 'Type',
      additionalStyle: '',
      data: arr,
    },
    {
      id: 1,
      src: require('../assets/bed.png'),
      text: 'Beds',
      additionalStyle: styles.circularItems,
      data: generate(7),
    },
    {
      id: 2,
      src: require('../assets/bath.png'),
      text: 'Baths',
      additionalStyle: styles.circularItems,
      data: generate(6),
    },
    {
      id: 3,
      src: require('../assets/members.png'),
      text: 'Family Members',
      additionalStyle: styles.circularItems,
      data: generate(7),
    },
  ];
  const contacts = [
    {
      id: 0,
      src: require('../assets/phone.png'),
      text: '+92 347 1111111',
      additionalStyle: styles.circularItems,
      source: require('../assets/edit.png'),
    },
    {
      id: 1,
      src: require('../assets/person.jpg'),
      text: '+92 347 2222222',
      additionalStyle: styles.circularItems,
      source: require('../assets/edit.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoCenter}
            source={require('../assets/logo.jpeg')}
          />
        </View>
        <Text style={styles.text}>I want to</Text>
        <GenerateValuesCount cStyle={styles.fixSize} data={['RENT', 'BUY']} />
        <HomeRequirements data={items} />
        <HomeContacts data={contacts} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
