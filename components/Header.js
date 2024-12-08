import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#6200ea',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
