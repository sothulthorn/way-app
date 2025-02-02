import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { LocationType } from '@/types/type';

const Map = ({ location }: { location: LocationType | null }) => {
  if (!location) {
    return <View style={styles.loadingContainer} />;
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} region={location}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
