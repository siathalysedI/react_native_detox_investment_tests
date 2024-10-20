import InvestmentCard from '@/components/InvestmentCard';
import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

const EarningScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Total Balance */}
      <Text style={styles.balance}>R$ 43,62</Text>

      {/* Investment Cards */}
      <InvestmentCard code="MXRF11" earnings="Earnings: R$ 0.09" amount="R$ 11.52" date="IN 2 DAYS" />
      <InvestmentCard code="VISC11" earnings="Earnings: R$ 0.80" amount="R$ 10.40" date="IN 2 DAYS" />
      <InvestmentCard code="RVBI11" earnings="Earnings: R$ 0.75" amount="R$ 18.75" date="IN 3 DAYS" />
      <InvestmentCard code="CPTS11" earnings="Earnings: R$ 0.07" amount="R$ 2.95" date="IN 5 DAYS" />
      <InvestmentCard code="MCHY11" earnings="Earnings: NOT INFORMED" amount="--" date="NOT INFORMED" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#23374D', // Deep blue background
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white', // White text for contrast
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default EarningScreen;
