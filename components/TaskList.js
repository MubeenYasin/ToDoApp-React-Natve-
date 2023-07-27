import { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView, FlatList } from "react-native";


const TaskList = (props) => {

    const [tasklist, setTaskList] = useState([])

    function addTaskToList() {
        if (props.myInput == '') {
            alert('please write a task')
        }
        else {
            setTaskList([...tasklist, props.myInput])
        }
    }


    return (
        <View >
            {/* <Text>{props.myInput}</Text> */}
            <Button title="add task" onPress={addTaskToList} />

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

            {/* How to use FlatList */}
            <FlatList style={styles.listView} data={tasklist} renderItem={(listItem) => {
                return (
                    <Text style={styles.list}>{listItem.index+1}-  {listItem.item}</Text>
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
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 3,
        verticalAlign: 'middle',
        padding: 3,
        paddingHorizontal: 10,
    }
})