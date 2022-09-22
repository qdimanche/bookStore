import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BookCard from "../components/BookCard";
import Menu from '../components/Menu';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";


type Props = NativeStackScreenProps<RootStackParams, 'Book'>

const HomeScreen = ({navigation}:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Liste des livres disponibles</Text>
      <View>
        <Text style={styles.sectionTitle}>Livres populaires</Text>
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

        <Text style={styles.sectionTitle}>Dernières parutions</Text>
        <BookCard
          name="Livre 6"
          onPress={name => {
            navigation.navigate('Book', {name})
          }}
        />
        <BookCard
          name="Livre 5"
          onPress={name => {
            navigation.navigate('Book', {name})
          }}
        />
        <BookCard
          name="Livre 6"
          onPress={name => {
            navigation.navigate('Book', {name})
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
