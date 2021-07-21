import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList } from 'react-native';
import AppBar from './components/AppBar';
import NewNoteModal from './components/NewNoteModal';
import NoteCard from './components/NoteCard';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Sample task",
      description: "Let's get familiar with React Native components! Exciting, isn't it?"
    },
    {
      id: 2,
      title: "Another Task",
      description: "React Native uses stylesheets for styling that is simiilar to CSS. Beware though that vh and vw for width and height does not work in native. Use instead percentage dimensions."
    }
  ]);
  const [visible, setVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const addNote = () => {
    if (newTitle && newDescription) {
      const id = Math.max(...notes.map(note => note.id)) + 1;
      const newNote = {
        id,
        title: newTitle,
        description: newDescription
      }
      clearInput();
      closeModal();
      setNotes([...notes, newNote]);
    }
  }

  const clearInput = () => {
    setNewTitle("");
    setNewDescription("");
  }

  const showModal = () => {
    setVisible(true);
  }

  const closeModal = () => {
    setVisible(false);
  }

  return (
    <View style={styles.container}>
      <AppBar appTitle="To-Do App" />
      <NewNoteModal
        visible={visible}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        addNote={addNote}
        closeModal={closeModal}
      />
      <FlatList
        data={notes}
        renderItem={NoteCard}
        keyExtractor={item => item.id.toString()}
        extraData={true}
      />
      <TouchableOpacity style={styles.button} onPress={showModal}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 12,
    bottom: 12,
    backgroundColor: "#1e1f22",
    width: 64,
    height: 64,
    borderRadius: 100
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 32
  }
});
