import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Business } from '@/types/type';
import { businesses } from '@/constants/business';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import ImageCarousel from '@/components/ImageCarousel';
import { useState } from 'react';

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
            <View style={styles.categoryContainer}>
              {business.category.map((cat, index) => (
                <View key={index} style={styles.categoryTag}>
                  <Text style={styles.categoryText}>{cat}</Text>
                </View>
              ))}
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
    fontSize: 14,
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginVertical: 8,
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
    marginTop: 16,
  },
});
