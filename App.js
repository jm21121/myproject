/*Example of RealM Database in React Native*/
import React from 'react';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Import external files
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      headerTitleStyle: { alignSelf: 'center' },
      headerStyle: { backgroundColor: '#030C20' },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'Find User',
      headerStyle: { backgroundColor: '#030C20' },
      headerTintColor: '#ffffff',
    },
    backgroundColor: '#030C20',
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#030C20' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#030C20' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#030C20' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#030C20' },
      headerTintColor: '#ffffff',
    },
  },
});
export default createAppContainer(App);