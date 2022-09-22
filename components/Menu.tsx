import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParams } from "../App";



const Menu = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <TouchableOpacity onPress= {() => {
        navigation.navigate("Home")
      }}>
        <Text style={styles.link}>Accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {() => {
        navigation.navigate("Books")
      }}>
        <Text style={styles.link}>Livres</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress= {() => {
        navigation.navigate("Account")
      }}>
        <Text style={styles.link}>Compte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 12,
    marginTop: 12,
  },
  link: {
    color: '#097ade',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 4,
  },
  title: {
    fontSize: 22,
    marginBottom: 24,
  }
})

export default Menu;
