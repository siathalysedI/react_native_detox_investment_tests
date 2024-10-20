// app/tabs/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Earnings',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="attach-money" color={color} size={size} />
          ),
          headerShown:false
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-balance-wallet" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
