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
          tabBarLabel: 'Proventos',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="attach-money" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: 'Carteira',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-balance-wallet" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
