import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  name:string;
  onPress: (name:string) => void
}

const BookCard: React.FC<Props> = ({name, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 12,
    marginTop: 12,
  }
})

export default BookCard;
