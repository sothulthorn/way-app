import { StyleSheet, Text } from 'react-native';
import MapLayout from '@/components/MapLayout';

const HomeScreen = () => {
  return (
    <MapLayout snapPoints={['10%', '80%']}>
      <Text>Map Layout</Text>
    </MapLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
