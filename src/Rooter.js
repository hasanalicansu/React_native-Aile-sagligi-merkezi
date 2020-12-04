import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './RooterNavigation';
import Main from './components/Main';
import AsiGiris from './components/AsiGiris';
import GebeList from './components/GebeList';
import AsiList from './components/AsiList';
import AllBildirim from './components/AllBildirim';
import IndeksGiris from './components/IndeksGiris';
import Mesai from './components/Mesai';
import Talep from './components/Talep';




const Stack = createStackNavigator();

const RooterComponent = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {console.log("aaaa")}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="home">
        <Stack.Screen name="home" component={Main} options={{ title:" "}}/>
        <Stack.Screen name="asiGiris" component={AsiGiris} options={{ title:"Zaman Seçimi",headerShown: true}}/>
        <Stack.Screen name="gebeList" component={GebeList} options={{ title:"Gebe Takvimi",headerShown: true}}/>
        <Stack.Screen name="asiList" component={AsiList} options={{ title:"Aşı Takvimi",headerShown: true}}/>
        <Stack.Screen name="allBildirim" component={AllBildirim} options={{ title:"Tüm Bildirimler",headerShown: true}}/>
        <Stack.Screen name="indeksGiris" component={IndeksGiris} options={{ title:"V/K indeks",headerShown: true}}/>
        <Stack.Screen name="mesai" component={Mesai} options={{ title:"Mesai bilgileri",headerShown: true}}/>
        <Stack.Screen name="talep" component={Talep} options={{ title:"Talep Formu",headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RooterComponent;
