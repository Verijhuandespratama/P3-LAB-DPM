import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BookCard = ({ book }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: book.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>By {book.author}</Text>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 150,
  },
  details: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
});
