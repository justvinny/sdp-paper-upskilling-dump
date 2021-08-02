import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList } from 'react-native';
import AppBar from './components/AppBar';
import NewNoteModal from './components/NewNoteModal';
import NoteCard from './components/NoteCard';
import { NoteContext } from './NoteContext';
import firebase from "./firebase/config";

const App = () => {
  const db = firebase.firestore();
  const [notes, setNotes] = useState([]);
  const [visible, setVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = () => {
    db.collection("notes").get().then(qs => {
      setNotes(qs.docs.map(doc => {
        const id = doc.id;
        const title = doc.data().title;
        const description = doc.data().description;
        const note = {id, title, description};
        return note;
      }));
    }).catch((error) => console.error("Could not get collection: ", error));
  }

  const addNote = () => {
    if (newTitle && newDescription) {
      const newNote = {
        title: newTitle,
        description: newDescription
      }
      db.collection("notes").doc().set(newNote)
      .then(() => {
        clearInput();
        closeModal();
        getAllNotes();
      }).catch((error) => console.error("Error adding document: ", error));
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
      <NoteContext.Provider value={{ notes, setNotes }}>
        {notes.length > 0 ? <FlatList
          data={notes}
          renderItem={({ item }) => (
            <NoteContext.Consumer>
              {noteContext => (
                <NoteCard item={item} noteContext={noteContext}  />
              )}
            </NoteContext.Consumer>
          )}
          keyExtractor={item => item.id.toString()}
          extraData={notes}
        /> : <></> }
      </NoteContext.Provider>
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
