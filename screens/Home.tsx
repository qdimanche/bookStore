import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BookCard from "../components/BookCard";
import Menu from '../components/Menu';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";


type Props = NativeStackScreenProps<RootStackParams, 'HomeStack'>

const HomeScreen = ({navigation}:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Liste des livres disponibles</Text>
      <View>
        <Text style={styles.sectionTitle}>Livres</Text>
        <BookCard
          name="Romans"
          onPress={() => {
            /*navigation.push('Book', {name:'Romans'})*/
            navigation.navigate("BooksStack", {
              screen: "Book",
              params: {name: "Hello from Home"},
            });
          }}
        />
        <BookCard
          name="Autobiographies"
          onPress={() => {
            navigation.push('Book', {name:'Autobiographies'})
          }}
        />

      </View>
      <Menu/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 34,
  },
  bookCard: {
    backgroundColor: '#efefef',
  },
  sectionTitle: {
    fontSize: 16,
  },
  screenTitle: {
    fontSize:24,
    marginTop: 8,
    fontWeight: 'bold',
  }
})

export default HomeScreen;
