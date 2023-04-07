/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View, Button, Alert} from 'react-native';


const logout = (navigation) => {
  navigation.toggleDrawer();
  Alert.alert('Logout!','Are you sure want to logout',[
    {
      text:'Cancel',
      onPress:() =>{navigation.replace('Home')},
    },
    {
      text:'Ok',
      onPress:() =>{logouttoken(navigation)},
    }
  ]);
};
const logouttoken= (navigation) =>{
  AsyncStorage.clear();
  navigation.replace('SignIn');
}
const LogoutScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={logout(navigation)} title="logout" />
      </View>
    );
  }

  
export default LogoutScreen;