import { StyleSheet, Text, View } from 'react-native';
import MapLayout from '@/components/MapLayout';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <MapLayout snapPoints={['5%', '40%', '80%']}>
      <View style={styles.container}>
        <Ionicons name="location" size={24} color="#2f80ed" />
        <Text style={styles.locationText}>Current Location</Text>
      </View>
    </MapLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#2f80ed',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
