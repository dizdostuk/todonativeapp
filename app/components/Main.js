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
import Note from "./Note";

export default class Main extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
    }
  
  render() {
      let notes = this.state.noteArray.map((val, key) => {
          return <Note key={key} val={val} deleteMethod={() => this.deleteNote(key)} />
      })
        return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>* Noter *</Text>

            </View>

            <ScrollView style={styles.scrollContainer}>
                {notes}
            </ScrollView>

            <View styel={styles.footer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(noteText) => this.setState({noteText})}
                    value={this.state.noteText}
                    placeholder="note"
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                >
                </TextInput>
            </View>

            <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                <Text style={styles.adaButtonText}>+</Text>
            </TouchableOpacity>

        </View>
    );
  }

  addNote() {
      if(this.state.noteText) {
          let d = new Date();
          let notes = [...this.state.noteArray]
          notes.push({
              date: d.getFullYear() + '/' + (d.getMonth+1) + '/' + d.getDate(),
              note: this.state.noteText
          });
          this.setState({noteArray: notes, noteText: ''});
      }
  }

  deleteNote(key) {
      let notes = [...this.state.noteArray];
      notes.splice(key, 1);
      this.setState({noteArray: notes});
  }
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd'
  },
  headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26,
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100,
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#e91e63',
      width: 90,
      height: 90,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 0
  },
  addButtonText: {
      color: '#fff',
      fontSize: 24,
  }
});

export default Main;
