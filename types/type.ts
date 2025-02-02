import { StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export interface GoogleInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  initialLocation?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textInputBackgroundColor?: string;
  handlePress: (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}

export interface LocationType {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface Category {
  id: number;
  name: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

export interface Review {
  reviewId: number;
  rating: number;
  comment: string;
}

export interface Contact {
  phone: string;
  email: string;
}

export interface OpenHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface Service {
  serviceId: number;
  name: string;
  categories: string[];
  description: string;
}

export interface Product {
  productId: number;
  name: string;
  categories: string[];
  price: number;
  description: string;
}

export interface Business {
  id: number;
  name: string;
  type: 'service' | 'product' | 'mixed';
  category: string[];
  description: string;
  location: Location;
  reviews: Review[];
  contact: Contact;
  images: string[];
  coverImages: string[];
  openHours: OpenHours;
  services?: Service[];
  products?: Product[];
}
