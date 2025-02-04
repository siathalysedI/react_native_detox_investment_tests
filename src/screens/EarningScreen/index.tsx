import InvestmentCard from '@/src/components/InvestmentCard';
import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

const EarningScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.balance}>$ 43.62 MXN</Text>

      <InvestmentCard code="MXRF11" earnings="Earnings: $ 0.09 MXN" amount="$ 11.52 MXN" date="IN 2 DAYS" />
      <InvestmentCard code="VISC11" earnings="Earnings: $ 0.80 MXN" amount="$ 10.40 MXN" date="IN 2 DAYS" />
      <InvestmentCard code="RVBI11" earnings="Earnings: $ 0.75 MXN" amount="$ 18.75 MXN" date="IN 3 DAYS" />
      <InvestmentCard code="CPTS11" earnings="Earnings: $ 0.07 MXN" amount="$ 2.95 MXN" date="IN 5 DAYS" />
      <InvestmentCard code="MCHY11" earnings="Earnings: NOT INFORMED" amount="--" date="NOT INFORMED" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#23374D',
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default EarningScreen;
