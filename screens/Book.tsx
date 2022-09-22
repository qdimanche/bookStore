import {NativeStackScreenProps} from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParams } from "../App";
import BookCard from "../components/BookCard";

type Props = NativeStackScreenProps<RootStackParams, 'Book'>


const BookScreen = ({route, navigation}:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>{route.params.name}</Text>
      <Text>Related restaurants</Text>
      <BookCard
        name="Livre 1"
        onPress={() => {
          navigation.push("Book", {name: 'Livre 1'})
        }}
      />
      <BookCard
        name="Livre 2"
        onPress={() => {
          navigation.push("Book", {name: 'Livre 2'})
        }}
      />
      <BookCard
        name="Livre 3"
        onPress={() => {
          navigation.push("Book", {name: 'Livre 3'})
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 6,
  },
  screenTitle: {
    fontSize:24,
    marginTop: 8,
    fontWeight: 'bold',
  }
})

export default BookScreen;
