import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface OpenHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

interface BusinessHoursProps {
  openHours: OpenHours;
}

const BusinessHours = ({ openHours }: BusinessHoursProps) => {
  const daysOfWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const currentDay = daysOfWeek[new Date().getDay()] as keyof OpenHours;

  const todayHours = openHours[currentDay];

  // Function to parse time (AM/PM)
  const parseTime = (time: string) => {
    const [hourMinute, period] = time.split(' ');
    let [hour, minute] = hourMinute.split(':').map(Number);
    const isPM = period === 'PM';

    if (isPM && hour !== 12) hour += 12; // Convert PM hour
    if (!isPM && hour === 12) hour = 0; // Convert 12 AM to 0

    return new Date().setHours(hour, minute, 0, 0);
  };

  const isOpen = () => {
    if (todayHours.toLowerCase() === 'closed') return false;

    const [start, end] = todayHours.split(' - ');

    const openTime = parseTime(start);
    const closeTime = parseTime(end);

    const currentTime = new Date().getTime();
    return currentTime >= openTime && currentTime <= closeTime;
  };

  return (
    <View style={styles.container}>
      <Ionicons name="time-outline" size={30} color={Colors.gray} />
      <View style={styles.textContainer}>
        <Text
          style={[styles.statusText, isOpen() ? styles.open : styles.closed]}
        >
          {isOpen() ? 'Open Now' : 'Closed Now'}
        </Text>
        <Text style={styles.hoursText}>{todayHours}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.lightGray,
    marginVertical: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  open: {
    color: 'green',
  },
  closed: {
    color: 'red',
  },
  hoursText: {
    color: Colors.gray,
    fontSize: 14,
  },
});

export default BusinessHours;
