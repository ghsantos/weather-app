import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { CurvedHeader } from './CurvedHeader';
import { LandscapeSvg } from './LandscapeSvg';

const { width } = Dimensions.get('window');

type WeatherCardProps = {
  location: string;
  temperature: number;
  condition: string;
  time?: string;
  date?: string;
  isNight?: boolean;
  hourlyForecast: {
    time: string;
    temperature: number;
    icon: string;
  }[];
};

export const WeatherCard = ({
  location,
  temperature,
  condition,
  time,
  date,
  isNight = false,
  hourlyForecast,
}: WeatherCardProps) => {
  const gradientColors = isNight
    ? (['#0f2027', '#203a43'] as const)
    : (['#87CEEB', '#1E90FF'] as const);

  const renderWeatherIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'sunny':
        return <Ionicons name="sunny" size={size} color="#FFD700" />;
      case 'partlyCloudy':
        return <MaterialCommunityIcons name="weather-partly-cloudy" size={size} color="#FFD700" />;
      case 'cloudy':
        return <MaterialCommunityIcons name="weather-cloudy" size={size} color="#CCCCCC" />;
      case 'rainy':
        return <MaterialCommunityIcons name="weather-pouring" size={size} color="#CCCCCC" />;
      default:
        return <Ionicons name="help-circle" size={size} color="white" />;
    }
  };

  return (
    <View style={styles.cardContainer}>
      <LinearGradient colors={gradientColors} style={styles.gradientBackground}>
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={16} color="white" />
            <Text style={styles.locationText}>{location}</Text>
          </View>
          <Ionicons name="menu" size={24} color="white" />
        </View>

        <View style={styles.temperatureContainer}>
          <Text style={styles.temperatureText}>{temperature}°</Text>
          <View style={styles.conditionContainer}>
            <Text style={styles.conditionText}>{`It's ${condition}`}</Text>
          </View>
        </View>

        {/* SVG Landscape */}
        <View style={styles.landscapeContainer}>
          <LandscapeSvg width={width} height={376} isNight={isNight} />
        </View>

        <CurvedHeader title="Weather Today" width={width} height={180} curveHeight={20}>
          <View style={styles.hourlyForecast}>
            {hourlyForecast.map((item, index) => (
              <View key={index} style={styles.hourlyItem}>
                {renderWeatherIcon(item.icon, 28)}
                <Text style={styles.hourlyTime}>{item.time}</Text>
                <View style={styles.hourlyTempContainer}>
                  <Text style={styles.hourlyTemp}>{item.temperature}</Text>
                  <Text style={styles.hourlyTempUnit}>°</Text>
                </View>
              </View>
            ))}
          </View>
        </CurvedHeader>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  cardContainer: {
    overflow: 'hidden',
    // width: '100%',
    // height: 600,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  gradientBackground: {
    flex: 1,
    // padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: rt.insets.top,
    paddingHorizontal: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 5,
  },
  temperatureContainer: {
    paddingHorizontal: 26,
    marginTop: 20,
    width: '100%',
  },
  temperatureText: {
    color: 'white',
    fontSize: 130,
    fontWeight: '300',
  },
  conditionContainer: {
    position: 'absolute',
    right: 40,
    top: 40,
    transform: [{ rotate: '-90deg' }],
    transformOrigin: 'right top',
  },
  conditionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  dateTimeText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  landscapeContainer: {
    width: '100%',
    height: 250,
    position: 'relative',
    // overflow: 'hidden',
    // borderRadius: 15,
  },
  forecastContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    marginTop: 'auto',
    paddingBottom: 50,
  },
  forecastTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  hourlyForecast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  hourlyItem: {
    alignItems: 'center',
  },
  hourlyTime: {
    fontSize: 10,
    color: '#888',
    marginTop: 5,
  },
  hourlyTempContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginTop: 5,
  },
  hourlyTemp: {
    fontSize: 25,
    fontWeight: '400',
  },
  hourlyTempUnit: {
    fontSize: 12,
    fontWeight: '400',
  },
}));
