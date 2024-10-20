import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface WalletAssetItem {
  code: string;
  quantity: string;
}

const walletAssetsItems: WalletAssetItem[] = [
  { code: 'MXRF11', quantity: '128 shares' },
  { code: 'CPTS11', quantity: '41 shares' },
  { code: 'MCHY11', quantity: '20 shares' },
  { code: 'RVBI11', quantity: '25 shares' },
  { code: 'VISC11', quantity: '18 shares' },
];

const WalletScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wallet</Text>

      {/* Wallet assets list */}
      <FlatList
        data={walletAssetsItems}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={styles.walletItem}>
            <Text style={styles.walletItemText}>{item.code}</Text>
            <Text style={styles.walletItemText}>{item.quantity}</Text>
          </View>
        )}
        contentContainerStyle={styles.walletList}
      />

      {/* Add investments button */}
      <TouchableOpacity style={styles.addButton} onPress={() => { /* Add your action here */ }}>
        <Text style={styles.addButtonText}>Add investments</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23374D', // Deep blue background
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 24,
  },
  walletList: {
    paddingBottom: 80, // To leave space for the button
  },
  walletItem: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  walletItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E88E5', // Blue for text
  },
  addButton: {
    backgroundColor: '#FFA000', // Vibrant orange for the button
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default WalletScreen;
