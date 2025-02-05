import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Business } from '@/types/type';
import { businesses } from '@/constants/business';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import ImageCarousel from '@/components/ImageCarousel';
import React, { useState } from 'react';

const { width } = Dimensions.get('window');

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
          size={20}
          color={i < rating ? Colors.blue : Colors.gray}
        />
      );
    }
    return stars;
  };

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
        {['Overview', 'About', 'Photo', 'Review'].map((section) => (
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
          <View style={styles.sectionContent}>
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
              <Text style={styles.ratingText}>{averageRating.toFixed(1)}</Text>
              {renderStars(averageRating)}
              <Text numberOfLines={1} style={{ fontSize: 16 }}>
                ({business.reviews.length}{' '}
                {business.reviews.length === 1 ? 'review' : 'reviews'})
              </Text>
            </View>

            <Text style={styles.address}>{business.location.address}</Text>
            <Text style={styles.description}>{business.description}</Text>
          </View>
        )}
        {activeSection === 'About' && (
          <View style={styles.sectionContent}>
            <Text>About content goes here.</Text>
          </View>
        )}
        {activeSection === 'Photo' && (
          <View style={styles.sectionContent}>
            <Text>Photo content goes here.</Text>
          </View>
        )}
        {activeSection === 'Review' && (
          <View style={styles.sectionContent}>
            <Text>Review content goes here.</Text>
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
  address: {
    fontSize: 16,
    marginVertical: 8,
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
  sectionContent: {
    // marginTop: 16,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
