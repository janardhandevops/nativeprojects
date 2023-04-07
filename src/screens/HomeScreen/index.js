/* eslint-disable prettier/prettier */

import React,{useEffect, useState} from 'react';
import {StyleSheet,FlatList} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NewPasswordScreen from '../NewPasswordScreen/NewPasswordScreen';
import LogoutScreen from '../LogoutScreen/LogoutScreen';
import Home from '../Home/Home';
import ProductList from '../ProductList/ProductList';

const Drawer = createDrawerNavigator();




const index = () => {
  
  return (
  //  <View>
  //   <Text>Home Screen</Text>
  //  </View>
  
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
      <Drawer.Screen name="NewPassword" component={NewPasswordScreen} />
      <Drawer.Screen name="ProductList" component={ProductList} />
    </Drawer.Navigator>
   
  );
};
export default index;
