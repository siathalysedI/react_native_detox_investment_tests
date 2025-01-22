// app/tabs/explore.tsx
import WalletScreen from '@/src/screens/WalletScreen';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PortfolioScreen() {
  return (
    <WalletScreen></WalletScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1EFF',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
