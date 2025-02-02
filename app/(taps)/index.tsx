import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MapViewLayout from '@/components/MapViewLayout';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Location from 'expo-location';
import { LocationType } from '@/types/type';
import { Colors } from '@/constants/Colors';
import BusinessCard from '@/components/BusinessCard';
import { businesses } from '@/constants/business';

const HomeScreen = () => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [specificLocation, setSpecificLocation] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;

      // Set location state
      setLocation({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      // Reverse geocoding to get detailed location information
      const geocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (geocode.length > 0) {
        const address = geocode[0];

        let shortLocation =
          address.district ||
          address.city ||
          address.region ||
          address.subregion;

        if (!shortLocation) {
          shortLocation = 'Location not found';
        }
        setSpecificLocation(shortLocation);
      } else {
        setSpecificLocation('Location not found');
      }
    };

    fetchLocation();
  }, []);

  return (
    <MapViewLayout snapPoints={['5%', '40%', '80%']} location={location}>
      <View style={styles.container}>
        <Ionicons name="location" size={24} color={Colors.blue} />
        {errorMsg ? (
          <Text style={styles.errorText}>{errorMsg}</Text>
        ) : specificLocation ? (
          <Text style={styles.locationText}>{specificLocation}</Text>
        ) : (
          <ActivityIndicator size="small" color={Colors.blue} />
        )}
      </View>

      {/* Nearby text with line */}
      <View style={styles.row}>
        <Text style={styles.nearbyText}>Nearby</Text>
        <View style={styles.line} />
      </View>

      {/* Business cards */}
      <FlatList
        data={businesses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BusinessCard business={item} />}
        showsVerticalScrollIndicator={false}
      />
    </MapViewLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  nearbyText: {
    fontFamily: 'SpaceMono',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  line: {
    height: 1,
    backgroundColor: Colors.lightGray,
    flex: 1,
  },
});
