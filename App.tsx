/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AccountScreen from "./screens/Account";
import HomeScreen from './screens/Home';
import BooksScreen from './screens/Books';
import BookScreen from './screens/Book'
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


export type RootStackParams = {
  Book: {
    name:string;
  }
  Home:undefined;
  Account:undefined;
  Books: undefined;
};


const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen}/>
        <RootStack.Screen name="Account" component={AccountScreen}/>
        <RootStack.Screen name="Books" component={BooksScreen}/>
        <RootStack.Screen name="Book" component={BookScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150
  }
});

export default App;
