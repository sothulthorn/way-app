import { StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Map from '@/components/Map';
import GoogleTextInput from '@/components/GoogleTextInput';
import Categories from '@/components/Categories';
import { categories } from '@/constants/categories';
import { LocationType } from '@/types/type';
import { Colors } from '@/constants/Colors';

const MapViewLayout = ({
  children,
  snapPoints,
  location,
}: {
  children: React.ReactNode;
  snapPoints: string[];
  location: LocationType | null;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <View style={styles.header}>
            <GoogleTextInput
              icon="search"
              containerStyle={styles.googleTextInputContainerStyle}
              handlePress={() => {}}
            />

            <Categories categories={categories} />
          </View>

          <Map location={location} />
        </View>

        <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={0}>
          <BottomSheetView style={[styles.bottomSheetContent, { flex: 1 }]}>
            {children}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default MapViewLayout;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: Colors.blue,
  },
  header: {
    position: 'absolute',
    top: 16,
    zIndex: 10,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  bottomSheetContent: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  googleTextInputContainerStyle: {
    backgroundColor: 'white',
    shadowColor: '#d4d4d4',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
});
