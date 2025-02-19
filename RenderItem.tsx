import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import {Task} from "./App";



interface ItemProps {
    item: Task;
    markCompleted: () => void;
    deleteFunction: () => void;
  }

export default function RenderItem({
    item, 
    markCompleted, 
    deleteFunction,
}: ItemProps) {
        return (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={markCompleted}>
              <Text style={item.completed ? styles.textDone : styles.text}>
                {item.title}
              </Text>;
              <Text style={item.completed ? styles.textDone : styles.text}>
                {item.date.toLocaleString()}
              </Text>;
            </TouchableOpacity>
            {item.completed &&  (
                <TouchableOpacity style={styles.deleteButton} onPress={deleteFunction}>
                    <Text style={styles.whiteText}> Delete </Text>
                </TouchableOpacity>
            )}
    
          </View>
        );
      }
