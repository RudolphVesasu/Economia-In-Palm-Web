import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WalletScreen from './screens/WalletScreen';
import MapScreen from './screens/MapScreen';
import MissionsScreen from './screens/MissionsScreen';
import ChatScreen from './screens/ChatScreen';
import NewsScreen from './screens/NewsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Carteira" component={WalletScreen} />
        <Tab.Screen name="Mapa" component={MapScreen} />
        <Tab.Screen name="Missões" component={MissionsScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Notícias" component={NewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}