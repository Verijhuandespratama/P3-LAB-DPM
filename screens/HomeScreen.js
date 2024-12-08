import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BookCard from '../components/BookCard';
import Header from '../components/Header';

const HomeScreen = () => {
  // Daftar buku statis
  const books = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      image: 'https://example.com/images/gatsby.jpg', // Ganti dengan URL gambar yang valid
    },
    {
      id: '2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      image: 'https://example.com/images/mockingbird.jpg',
    },
    {
      id: '3',
      title: '1984',
      author: 'George Orwell',
      image: 'https://example.com/images/1984.jpg',
    },
    {
      id: '4',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      image: 'https://example.com/images/pride.jpg',
    },
    {
      id: '5',
      title: 'Moby-Dick',
      author: 'Herman Melville',
      image: 'https://example.com/images/mobydick.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Daftar Buku" />
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookCard book={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
