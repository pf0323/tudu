import React from 'react';
import {
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList
} from 'react-native';
import styles from './styles';
import RenderItem from './RenderItem';

const tasks: Task[] = [
  {
    title: 'task 1',
    completed: false,
    date: new Date(),
  },
  {
    title: 'task 2',
    completed: true,
    date: new Date(),
  }
];

export interface Task {
  title: string;
  completed: boolean;
  date: Date;
}

export default function App() {
  const markCompleted = (item: Task) => {
    console.log('markCompleted', item);
  };

  const deleteFunction = (item: Task) => {
    console.log('delete', item);
  };

  return (
    <View style={styles.container}> 
      <Text style={styles.title}> tudu </Text>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='got a new task?' 
          style={styles.TextInput} 
        />
        <TouchableOpacity style={styles.addButtom}>
          <Text style={styles.whiteText} >Add</Text>
        </TouchableOpacity>
      </View> 
      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({item}) => 
          <RenderItem 
            item={item} 
            deleteFunction={() => deleteFunction(item)} 
            markCompleted={() => markCompleted(item)}
          />}
          data={tasks}
        />
      </View>
    </View>
  );
}
