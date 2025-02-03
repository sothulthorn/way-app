import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Business } from '@/types/type';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

const BusinessCard = ({ business }: { business: Business }) => {
  const router = useRouter();

  if (!business) return null;

  const { id, name, category, location, reviews, coverImages } = business;

  // Calculate the average rating safely
  const averageRating =
    reviews?.length > 0
      ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
      : 0;

  // Function to render stars for rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i < rating ? 'star' : 'star-outline'}
          size={15}
          color={i < rating ? Colors.blue : Colors.gray}
        />
      );
    }
    return stars;
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => router.push(`/business/${id}`)}
    >
      <View style={styles.cardContent}>
        <View style={styles.rowBetween}>
          <Image
            source={{
              uri: coverImages[0],
            }}
            style={styles.image}
          />

          <View style={styles.detailContainer}>
            <View style={styles.rowCenter}>
              <Text style={styles.title} numberOfLines={1}>
                {name}
              </Text>
            </View>

            <View style={styles.categoryContainer}>
              {category.slice(0, 2).map((cat, index) => (
                <View key={index} style={styles.categoryTag}>
                  <Text style={styles.categoryText}>{cat}</Text>
                </View>
              ))}

              {category.length > 2 && (
                <View style={styles.categoryTag}>
                  <Text style={styles.categoryText}>
                    +{category.length - 2} more
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.rowCenter}>
              {renderStars(averageRating)}
              <Text numberOfLines={1}>
                ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
              </Text>
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
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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
    gap: 8,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  line: {
    height: 1,
    backgroundColor: Colors.lightGray,
    flex: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  categoryTag: {
    backgroundColor: Colors.lightBlue,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  categoryText: {
    fontSize: 12,
    color: Colors.blue,
  },
});
