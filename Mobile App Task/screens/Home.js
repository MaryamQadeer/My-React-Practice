import React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from '../styles';
import GenerateValuesCount from '../Components/GenerateValuesCount';
import Headings from '../Components/Headings';
import Map from '../Components/Map';
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
        <Headings src={require('../assets/home.png')} text="Type" />
        <GenerateValuesCount data={arr} />
        <Headings src={require('../assets/bed.png')} text="Beds" />
        <GenerateValuesCount cStyle={styles.circularItems} data={generate(7)} />
        <Headings src={require('../assets/bath.png')} text="Baths" />
        <GenerateValuesCount cStyle={styles.circularItems} data={generate(6)} />
        <Headings
          src={require('../assets/members.png')}
          text="Family Members"
        />
        <GenerateValuesCount cStyle={styles.circularItems} data={generate(7)} />
        <View style={[styles.spaceBetweenRow]}>
          <Headings
            src={require('../assets/phone.png')}
            text="+92 347 1111111"
          />
          <Image
            style={styles.inlinePic}
            source={require('../assets/edit.png')}
          />
        </View>
        <View style={[styles.spaceBetweenRow]}>
          <Headings
            src={require('../assets/person.jpg')}
            text="+92 347 1111111"
          />
          <Image
            style={styles.inlinePic}
            source={require('../assets/edit.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
