import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';

import { WeatherCard } from './WeatherCard';

const { width } = Dimensions.get('window');

const mockData = [
  {
    location: 'Tuscany',
    temperature: 23,
    condition: 'Sunny',
    isNight: false,
    time: 'Today, Oct 18',
    date: '9:10',
    hourlyForecast: [
      { time: '05:00 AM', temperature: 23, icon: 'sunny' },
      { time: '08:00 AM', temperature: 16, icon: 'partlyCloudy' },
      { time: '07:00 AM', temperature: 3, icon: 'cloudy' },
      { time: '08:00 AM', temperature: 23, icon: 'sunny' },
    ],
  },
  {
    location: 'Tuscany',
    temperature: 10,
    condition: 'Sunny',
    isNight: true,
    hourlyForecast: [
      { time: '05:00 AM', temperature: 23, icon: 'sunny' },
      { time: '08:00 AM', temperature: 16, icon: 'partlyCloudy' },
      { time: '07:00 AM', temperature: 3, icon: 'cloudy' },
      { time: '08:00 AM', temperature: 23, icon: 'sunny' },
    ],
  },
  {
    location: 'Tuscany',
    temperature: 23,
    condition: 'Sunny',
    isNight: false,
    time: 'Today, Oct 18',
    date: '9:10',
    hourlyForecast: [
      { time: '05:00 AM', temperature: 23, icon: 'sunny' },
      { time: '08:00 AM', temperature: 16, icon: 'partlyCloudy' },
      { time: '07:00 AM', temperature: 3, icon: 'cloudy' },
      { time: '08:00 AM', temperature: 23, icon: 'sunny' },
    ],
  },
];

export const WeatherScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}>
        {mockData.map((data, index) => (
          <View key={index} style={styles.cardWrapper}>
            <WeatherCard {...data} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {mockData.map((_, index) => (
          <View
            key={index}
            style={[styles.paginationDot, index === currentIndex && styles.paginationDotActive]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
  },
  cardWrapper: {
    width,
    // paddingHorizontal: 20,
    justifyContent: 'center',
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#2f80ed',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
