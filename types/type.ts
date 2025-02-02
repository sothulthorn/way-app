import { StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// export interface ProductType {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   category: Category;
// }

// interface Category {
//   id: number;
//   name: string;
//   image: string;
// }

// export interface CategoryType {
//   id: number;
//   name: string;
//   image: string;
// }

// export interface CartItemType {
//   id: number;
//   title: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// export interface NotificationType {
//   id: number;
//   title: string;
//   message: string;
//   timestamp: string;
// }

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
  id: string;
  name: string;
  icon?: keyof typeof Ionicons.glyphMap;
}
