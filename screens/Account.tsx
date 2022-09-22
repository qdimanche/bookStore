import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Menu from "../components/Menu";

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Écran Compte</Text>

      <Text>Nom : Quentin Dimanche</Text>
      <TouchableOpacity>
        <Text>Éditer le profil</Text>
      </TouchableOpacity>
      <Menu/>
    </View>
  );
};

const styles = StyleSheet.create({
  screenTitle: {
    fontSize:24,
    marginTop: 8,
    fontWeight: 'bold',
  },
  container: {
    padding: 16,
    marginTop: 34,
  },
})

export default AccountScreen;
