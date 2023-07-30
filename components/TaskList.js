import { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView, FlatList, Pressable } from "react-native";


const TaskList = (props) => {

    const myInput = props.myInput // props from Input

    const [tasklist, setTaskList] = useState([])

    function addTaskToList() {
        if (myInput == '') {
            alert('please write a task')
        }
        else {
            // convert myInput into an object to make id 
            setTaskList([...tasklist, { text: myInput, id: Math.random().toString() }]) //to set a task list 
            props.clearInput('') // to clear input bar
        }
    }
    // console.log(tasklist)

    return (
        <View >
            {/* <Text>{props.myInput}</Text> */}
            {/* Button to add a task */}
            <Button title="add task" width={45} onPress={addTaskToList} />

            {/* to scroll the view use ScrollView or FlatList component*/}
            {/* How to use ScrollView */}
            {/* <ScrollView style={styles.listView}>
                {
                    tasklist2.map((item, i) =>
                        <Text style={styles.list} key={i}>
                            {i + 1}- {item}
                        </Text>
                    )
                }
            </ScrollView> */}

            {/* How to use FlatList, data for  Task List, renderItem convrt the list into an object*/}
            <FlatList style={styles.listView} data={tasklist} renderItem={(listItem) => {
                return (
                    <View style={styles.list}>
                        <View>
                            <Pressable >
                                {/* listItem.item is a single item from the Task List */}
                                <Text style={styles.task} >{listItem.index + 1}-{listItem.item.text}</Text>
                            </Pressable>
                        </View>
                        <View style={styles.status}>
                            <Pressable>
                                <Text style={styles.complete}>Comple</Text>
                            </Pressable>
                            <Pressable>
                                <Text style={styles.edit}>Edit</Text>
                            </Pressable>
                            {/* to remove a task from the listItem */}
                            <Pressable onPress={() => setTaskList(tasklist.filter(task => task.id != listItem.item.id))}>
                                <Text style={styles.dell}>Remove</Text>
                            </Pressable>
                        </View>
                    </View>
                )
            }} keyExtractor={(item, index) => {
                return (
                    item.id
                )
            }} />
        </View>
    );
}
export default TaskList;

const styles = StyleSheet.create({
    listView: {
        marginTop: 15,
        marginBottom: 12,
        height: '80%',
    },
    list: {
        // flexDirection: 'row',
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 3,
        verticalAlign: 'middle',
        padding: 3,
        paddingHorizontal: 10,
    },
    task: {

    },
    status: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5,
        borderTopWidth: 1,
        verticalAlign: 'middle',
    },
    complete: {
        color: 'green',
    },
    edit: {
        color: 'blue',
        marginHorizontal: 10,
    },
    dell: {
        color: 'red',
    },
})