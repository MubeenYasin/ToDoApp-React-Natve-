import { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import TaskList from "./TaskList";

const Input = () => {
    const [inputText, setInputText] = useState('')

    function inputedText(inputtext) {
        setInputText(inputtext)
    }

    return (
        <View>
            {/* to get input from user */}
            <TextInput style={styles.inputBar} placeholder='write a task' value={inputText} onChangeText={inputedText} />

            {/* parsing inputText and setInputText via props to TaskList */}
            <TaskList myInput={inputText} clearInput={setInputText}/>
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({

    inputBar: {
        borderWidth: 1,
        borderRadius: 5,
        height: 35,
        marginVertical: 10,
        paddingHorizontal: 10,
        fontSize: 18,
    }
});