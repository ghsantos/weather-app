import { Stack } from 'expo-router';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { WeatherScreen } from '~/components/WeatherScreen';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Weather', headerShown: false }} />
      <View style={styles.container}>
        <WeatherScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));
