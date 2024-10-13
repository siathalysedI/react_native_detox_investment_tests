import InvestmentCard from '@/components/InvestmentCard';
import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.balance}>R$ 43,62</Text>
      <InvestmentCard code="MXRF11" earnings="Rendimento: R$ 0,09" amount="R$ 11,52" date="DAQUI A 2 DIAS" />
      <InvestmentCard code="VISC11" earnings="Rendimento: R$ 0,80" amount="R$ 10,40" date="DAQUI A 2 DIAS" />
      <InvestmentCard code="RVBI11" earnings="Rendimento: R$ 0,75" amount="R$ 18,75" date="DAQUI A 3 DIAS" />
      <InvestmentCard code="CPTS11" earnings="Rendimento: R$ 0,07" amount="R$ 2,95" date="DAQUI A 5 DIAS" />
      <InvestmentCard code="MCHY11" earnings="Rendimento: NÃO INFORMADO" amount="--" date="NÃO INFORMADO" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#1E1EFF',
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default HomeScreen;
