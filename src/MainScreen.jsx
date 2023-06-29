import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Modal, Pressable } from "react-native";
import React, { useState } from "react";

const MainScreen = ({ taskList }) => {


  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  console.log(input)

  const onAddTask = () => {

    console.log("se agregó una taza");
    setList([
      ...list,
      {
        id: list.length + 1,
        task: input,
        completed: false,
      }
    ])
    console.log(list)
  }


  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>

      <View style={styles.view1}>
        <TextInput
          placeholder="Ingrese una tarea"
          style={styles.input}
          value={input}
          onChangeText={setInput} />


        <TouchableOpacity
          style={styles.button}
          onPress={onAddTask} >


          <Text>Agregar Tarea</Text>
        </TouchableOpacity>


      </View>

      <View style={styles.view2}>

        <FlatList
          data={list}
          keyExtractor={(item) => item.id}

          renderItem={({ item }) => {

            return (
              <View style={styles.tasks} key={item.id}>
                <Text>{item.task}</Text>
              </View>
            );

          }} />

        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>    


    </View >
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    width: "100%",
  },
  view2: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 15,
  },
  input: {
    borderBottomColor: "deepskyblue",
    borderBottomWidth: 3,
    marginBottom: 8,
    width: "100%",
  },
  tasks: {
    backgroundColor: "azure",
    padding: 10,
    width: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default MainScreen;
