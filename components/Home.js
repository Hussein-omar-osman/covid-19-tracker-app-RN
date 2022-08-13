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
        </View>
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
});
