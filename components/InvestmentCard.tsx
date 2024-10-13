import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface InvestmentCardProps {
  code: string;
  earnings: string;
  amount: string;
  date: string;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({ code, earnings, amount, date }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{code}</Text>
      <Text style={styles.earnings}>{earnings}</Text>
      <View style={styles.row}>
        <Text style={styles.amount}>{amount}</Text>
        <Button title={date} color="#F9A825" onPress={() => {}} />
      </View>
      <Button title="Mais detalhes" onPress={() => {}} color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  earnings: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F9A825',
  },
});

export default InvestmentCard;
