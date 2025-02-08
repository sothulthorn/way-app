import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Business } from '@/types/type';
import { businesses } from '@/constants/business';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import ImageCarousel from '@/components/ImageCarousel';
import React, { useState } from 'react';
import BusinessHours from '@/components/BusinessHours';
import { PhotoGallery } from 'react-native-photos-gallery';
import * as Progress from 'react-native-progress';

const BusinessDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const businessId = Number(id);
  const router = useRouter();

  // Fetch the business data based on the ID
  const business: Business | undefined = businesses.find(
    (b) => b.id === businessId
  );

  if (!business) {
    return <Text>Business not found</Text>;
  }

  const [activeSection, setActiveSection] = useState('Overview');

  const handleTabPress = (section: string) => {
    setActiveSection(section);
  };

  const averageRating =
    business.reviews?.length > 0
      ? business.reviews.reduce((acc, review) => acc + review.rating, 0) /
        business.reviews.length
      : 0;

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i < rating ? 'star' : 'star-outline'}
          size={14}
          color={i < rating ? Colors.blue : Colors.gray}
        />
      );
    }
    return stars;
  };

  // Calculate the number of reviews for each rating (1 to 5 stars)
  const ratingCounts = [1, 2, 3, 4, 5].map(
    (rating) =>
      business.reviews.filter((review) => review.rating === rating).length
  );

  return (
    <ScrollView style={styles.container}>
      {/* Cover Image */}
      <ImageCarousel images={business.coverImages} />

      {/* Back Button (Top Left) */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back-outline" size={20} color={Colors.white} />
      </TouchableOpacity>

      {/* Share & Bookmark Buttons (Top Right) */}
      <View style={styles.topRightButtons}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons
            name="share-social-outline"
            size={20}
            color={Colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="heart-outline" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {['Overview', 'Photo', 'Reviews'].map((section) => (
          <TouchableOpacity
            key={section}
            style={[
              styles.tabButton,
              activeSection === section && styles.activeTabButton,
            ]}
            onPress={() => handleTabPress(section)}
          >
            <Text
              style={[
                styles.tabText,
                activeSection === section
                  ? styles.activeTabText
                  : styles.inactiveTabText,
              ]}
            >
              {section}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Sections */}
      <View style={styles.sectionContainer}>
        {activeSection === 'Overview' && (
          <View>
            {/* Business Details with Padding */}
            <Text style={styles.title}>{business.name}</Text>
            <View style={styles.rowCenter}>
              {business.category.map((cat, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <Text style={styles.dot}>•</Text>}
                  <Text style={styles.categoryText}>{cat}</Text>
                </React.Fragment>
              ))}
            </View>

            <View style={styles.rowCenter}>
              {renderStars(averageRating)}
              <Text numberOfLines={1} style={{ fontSize: 16 }}>
                {business.reviews.length}{' '}
                {business.reviews.length === 1 ? 'review' : 'reviews'}
              </Text>
            </View>

            <Text style={styles.description}>{business.description}</Text>

            <BusinessHours openHours={business.openHours} />

            <Image
              source={{
                uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${business.location.longitude},${business.location.latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
              }}
              style={styles.mapWrapper}
            />

            <View style={styles.addressContainer}>
              <Ionicons name="location-outline" size={24} color={Colors.gray} />
              <Text style={styles.addressText}>
                {business.location.address}
              </Text>
            </View>
          </View>
        )}

        {activeSection === 'Photo' && (
          <View style={{ flex: 1 }}>
            <PhotoGallery
              data={business.images.map((image) => ({
                id: image.id,
                source: { uri: image.url },
              }))}
              animatedImageDelay={60}
              modalBackgroundStyle={{ backgroundColor: 'white' }}
            />
          </View>
        )}

        {activeSection === 'Reviews' && (
          <View>
            <View style={styles.ratingContainer}>
              {/* Average Rating */}
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.ratingText}>
                  {averageRating.toFixed(1)}{' '}
                </Text>
                <View style={styles.rowCenter}>
                  {renderStars(averageRating)}
                </View>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 16, color: Colors.gray }}
                >
                  ({business.reviews.length})
                </Text>
              </View>

              {/* Progress Bars for each rating */}
              <View
                style={{
                  flexDirection: 'column-reverse',
                  alignItems: 'center',
                }}
              >
                {ratingCounts.map((count, index) => (
                  <View key={index} style={styles.progressRow}>
                    <Progress.Bar
                      progress={count / business.reviews.length}
                      width={200}
                      height={5}
                      color={Colors.blue}
                      unfilledColor={Colors.lightGray}
                      borderWidth={0}
                    />
                  </View>
                ))}
              </View>
            </View>

            {/* Reviews Section */}
            <View>
              {business.reviews.map((review) => (
                <View key={review.reviewId} style={styles.reviewContainer}>
                  <View style={styles.rowCenter}>
                    <Image
                      source={{ uri: review.user.profilePicture }}
                      style={{ width: 40, height: 40, borderRadius: 20 }}
                    />

                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <Text style={{ fontWeight: 'bold' }}>
                        {review.user.username}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: Colors.gray,
                          marginTop: 10,
                        }}
                      >
                        {new Date(review.timestamp).toLocaleString()}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.rowCenter}>
                    {renderStars(review.rating)}
                  </View>
                  <Text style={{ marginTop: 10 }}>{review.comment}</Text>

                  {/* Render Replies */}
                  {review.replies.map((reply) => (
                    <View key={reply.replyId} style={styles.replyContainer}>
                      <View style={styles.rowCenter}>
                        <Image
                          source={{ uri: reply.replyUser.profilePicture }}
                          style={{ width: 30, height: 30, borderRadius: 15 }}
                        />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                          <Text style={{ fontWeight: 'bold' }}>
                            {reply.replyUser.username}
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              color: Colors.gray,
                              marginTop: 5,
                            }}
                          >
                            {new Date(reply.timestamp).toLocaleString()}
                          </Text>
                        </View>
                      </View>
                      <Text style={{ marginTop: 5 }}>{reply.replyText}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default BusinessDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 25,
  },
  topRightButtons: {
    position: 'absolute',
    top: 20,
    right: 15,
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.lightGray,
    marginVertical: 10,
  },
  addressText: {
    fontSize: 14,
    color: Colors.gray,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.gray,
  },
  dot: {
    fontSize: 14,
    color: Colors.gray,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.blue,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: Colors.blue,
  },
  inactiveTabText: {
    color: Colors.gray,
  },
  sectionContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginVertical: 5,
  },
  mapWrapper: {
    width: '100%',
    height: 200,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.lightGray,
    marginVertical: 10,
  },
  ratingText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginLeft: 40,
  },
  reviewContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.lightGray,
  },
  replyContainer: {
    marginTop: 10,
    padding: 10,
    paddingLeft: 20,
    borderLeftWidth: 2,
    borderColor: Colors.lightGray,
  },
});
