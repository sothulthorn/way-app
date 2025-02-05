import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Business } from '@/types/type';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

const BusinessCard = ({ business }: { business: Business }) => {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  if (!business) return null;

  const { id, name, category, location, reviews, coverImages } = business;

  const averageRating =
    reviews?.length > 0
      ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
      : 0;

  const renderStars = (rating: number) => (
    <View style={styles.rowCenter}>
      <Ionicons name="star" size={15} color={Colors.blue} />
      <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
    </View>
  );

  return (
    <TouchableOpacity onPress={() => router.push(`/business/${id}`)}>
      <View style={styles.cardContent}>
        <View style={styles.rowBetween}>
          <Image
            source={{
              uri: coverImages[0],
            }}
            style={styles.image}
          />

          <View style={styles.detailContainer}>
            <View style={styles.rowBetween}>
              <Text style={styles.title} numberOfLines={1}>
                {name}
              </Text>
              <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                <Ionicons
                  name={isFavorite ? 'heart' : 'heart-outline'}
                  size={20}
                  color={isFavorite ? Colors.blue : Colors.gray}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.rowCenter}>
              {renderStars(averageRating)}
              <Text numberOfLines={1}>({reviews.length})</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.categoryText}>{category[0]}</Text>
            </View>

            <View style={styles.rowCenter}>
              <Text numberOfLines={1}>{location.address}</Text>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.line} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessCard;

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    gap: 10,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    color: Colors.blue,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: Colors.lightGray,
    flex: 1,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.gray,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  dot: {
    fontSize: 14,
    color: Colors.gray,
  },
});
