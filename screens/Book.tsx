import {NativeStackScreenProps} from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParams } from "../App";

type Props = NativeStackScreenProps<RootStackParams, 'Book'>


const BookScreen = ({route}:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>{route.params.name}</Text>
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
