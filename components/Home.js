import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder='Search country...'
            placeholderTextColor='lightgrey'
          />
          <TouchableOpacity style={styles.searchBtn}>
            <Icon name='search' color='white' size={30} />
          </TouchableOpacity>
        </View>

        <View style={styles.heardingContainer}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Stay Home</Text>
            <Text style={styles.headingText}>Stay Safe</Text>
          </View>
          <Image
            style={styles.headingImage}
            source={require('../assets/dose.webp')}
          />
        </View>
        <View style={styles.divider}></View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#2f3a64',
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  input: {
    backgroundColor: '#3e4f7a',
    height: 50,
    borderRadius: 15,
    paddingLeft: 20,
    fontSize: 18,
    width: '80%',
    marginRight: 10,
    color: 'lightgrey',
  },
  searchBtn: {
    backgroundColor: '#3e4f7a',
    borderRadius: 15,
    padding: 10,
    width: 60,
    alignItems: 'center',
  },
  heardingContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {},
  headingText: { color: 'white', fontSize: 30, fontWeight: '700' },
  headingImage: { width: 150, height: 90, borderRadius: 15 },
  divider: {
    width: '100%',
    backgroundColor: '#3e4f7a',
    height: 3,
    marginTop: 15,
  },
});
