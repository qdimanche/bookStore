import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import BookCard from "../components/BookCard";
import Menu from '../components/Menu';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

type Props = NativeStackScreenProps<RootStackParams, "Books">

const BooksScreen = ({navigation}:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Liste des livres disponibles</Text>
      <ScrollView>
        <Text style={styles.sectionTitle}>Catégories de livre</Text>
        <BookCard
          name="df"
          onPress={name => {
            navigation.navigate('Book', {name})
          }}
        />
        <BookCard
          name="Livre 2"
          onPress={name => {
            navigation.navigate('Book', {name})
          }}
        />
        <BookCard
          name="Livre 3"
          onPress={name => {
            navigation.navigate('Book', {name})
          }}
        />

      </ScrollView>
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

export default BooksScreen;
