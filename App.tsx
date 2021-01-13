/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

// import AddScreen from './src/components/Add';
import HomeScreen from './src/components/Home';
import SettingsScreen from './src/components/Setting';
// import Navigation from './src/components/Navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeStackScreen, SettingsStackScreen} from './src/routes';

declare const global: {HermesInternal: null | {}};
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'list';
              } else if (route.name === 'Settings') {
                iconName = 'person';
              } else {
                iconName = 'infomation';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#d49948',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
