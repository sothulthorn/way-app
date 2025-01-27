import { View, StyleSheet } from 'react-native';
import { GoogleInputProps } from '@/types/type';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from '@expo/vector-icons/Ionicons';

const googlePlacesApiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View style={[styles.container, containerStyle]}>
    <GooglePlacesAutocomplete
      fetchDetails={true}
      placeholder="Search"
      debounce={200}
      styles={{
        textInputContainer: styles.textInputContainer,
        textInput: [
          styles.textInput,
          { backgroundColor: textInputBackgroundColor ?? 'white' },
        ],
        listView: [
          styles.listView,
          { backgroundColor: textInputBackgroundColor ?? 'white' },
        ],
      }}
      onPress={(data, details = null) => {
        handlePress({
          latitude: details?.geometry.location.lat!,
          longitude: details?.geometry.location.lng!,
          address: data.description,
        });
      }}
      query={{
        key: googlePlacesApiKey,
        language: 'en',
      }}
      renderLeftButton={() => (
        <View style={styles.leftButtonContainer}>
          <Ionicons
            name={icon}
            size={24}
            color="gray"
            style={styles.leftButtonIcon}
          />
        </View>
      )}
      textInputProps={{
        placeholderTextColor: 'gray',
        placeholder: initialLocation ?? 'Where are you?',
      }}
    />
  </View>
);

export default GoogleTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 50,
    borderRadius: 20,
    marginBottom: 5,
  },
  textInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 20,
    position: 'relative',
    shadowColor: '#d4d4d4',
  },
  textInput: {
    backgroundColor: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
    width: '100%',
    borderRadius: 200,
  },
  listView: {
    backgroundColor: 'white',
    position: 'relative',
    top: 0,
    width: '100%',
    borderRadius: 10,
    shadowColor: '#d4d4d4',
    zIndex: 99,
  },
  leftButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  leftButtonIcon: {
    alignSelf: 'center',
  },
});
