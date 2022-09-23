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
import { NavigationContainer, NavigatorScreenParams } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from 'react-native-vector-icons/Ionicons';


export type RootStackParams = {
  Book: {
    name:string;
  }
  HomeStack:undefined;
  Account:undefined;
  BooksStack: NavigatorScreenParams<BooksStackParams>;
};


const RootStack = createBottomTabNavigator<RootStackParams>();

export type BooksStackParams = {
  Home: undefined,
  Books: undefined,
  Book: {
    name:string;
  },
}

const BooksStack = createNativeStackNavigator<BooksStackParams>();


export type HomeStackParams = {
  Home: undefined,
  Book: {
    name:string;
  },
}


const HomeStack = createNativeStackNavigator<HomeStackParams>();

const HomeScreenStack = () => {
  return <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={{
        headerShown: false,
      }}
  >
    <HomeStack.Screen name="Home" component={HomeScreen}/>
    <HomeStack.Screen name="Book" component={BookScreen}/>
  </HomeStack.Navigator>
}


const BookScreenStack = () => {
  return <BooksStack.Navigator
    initialRouteName="Books"
    screenOptions={{
      headerShown: false,
    }}
  >
    <BooksStack.Screen name="Books" component={BooksScreen}/>
    <BooksStack.Screen name="Book" component={BookScreen}/>
  </BooksStack.Navigator>
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#e67a15",
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <RootStack.Screen
          name="HomeStack"
          component={HomeScreenStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name='home-outline' color={color} size={size}/>
            )
          }}
        />
        <RootStack.Screen name="BooksStack" component={BookScreenStack}/>
        <RootStack.Screen name="Account" component={AccountScreen}/>
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
