import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MobileAds, { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import {
  getTrackingPermissionsAsync,
  PermissionStatus,
  requestTrackingPermissionsAsync,
} from 'expo-tracking-transparency';

export default function App() {

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await getTrackingPermissionsAsync();
      if (status === PermissionStatus.UNDETERMINED) {
        await requestTrackingPermissionsAsync();
      }
    };

    requestPermissions();

    // Inicializar Mobile Ads SDK
    MobileAds()
      .initialize()
      .then(adapterStatuses => {
        // La inicialización se completó
        console.log('Initialization complete:', adapterStatuses);
      });
  }, []);

  return (
    <View style={styles.container}>
      <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.BANNER} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});