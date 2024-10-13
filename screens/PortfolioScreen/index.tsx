// screens/PortfolioScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PortfolioScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfólio em desenvolvimento...</Text>
    </View>
  );
};

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

export default PortfolioScreen;
