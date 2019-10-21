/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Note = () => {
  return (
      <View style={styles.container}>
          <View style={styles.note} key={this.PaymentResponse.keyval}>
            <Text style={styles.noteText}>{this.props.val.date}</Text>
            <Text style={styles.noteText}>{this.props.val.date}</Text>

            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>D</Text>
            </TouchableOpacity>
          </View>

      </View>
  );
};

const styles = StyleSheet.create({
  note: {
      position: 'absolute',
      padding: 20,
      paddingRight: 100,
      borderBottomWidth: 2,
      borderBottomColor: 'purple',
  },
  noteText: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: 'black'
  },
  noteDelete: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10,
  },
  noteDeleteText: {
      color: '#fff',
  }
  
});

export default Note;
