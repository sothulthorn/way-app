import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Category } from '@/types/type';

const Categories = ({ categories }: { categories: Category[] }) => {
  const onSelectCategory = (category: string) => {
    console.log(category);
  };

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categoryList}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => onSelectCategory(item.name)}
        >
          <View style={styles.iconContainer}>
            <Ionicons name={item.icon} size={20} color="#3B82F6" />
          </View>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryList: {
    marginTop: 10,
  },
  categoryItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 5,
  },
});
