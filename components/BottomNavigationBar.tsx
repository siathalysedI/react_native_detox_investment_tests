// components/BottomNavigationBar.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';

type BottomTabParamList = {
  Proventos: undefined;
  Carteira: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNavigationBar: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = '';
          if (route.name === 'Proventos') {
            iconName = 'attach-money';
          } else if (route.name === 'Carteira') {
            iconName = 'account-balance-wallet';
          }
          return <MaterialIcons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#1E1EFF' },
      })}
    >
      <Tab.Screen name="Proventos" component={HomeScreen} />
      <Tab.Screen name="Carteira" component={PortfolioScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;
