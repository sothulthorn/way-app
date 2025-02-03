import { StyleSheet, Image, View, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useState } from 'react';

const { width } = Dimensions.get('window');

const ImageCarousel = ({ images }: { images: string[] }) => {
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.carouselImage} />
        )}
        width={width}
        height={300}
        loop={images.length > 1}
        scrollAnimationDuration={1000}
      />
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'relative',
  },
  carouselImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  inactiveDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});
