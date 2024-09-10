import React from 'react';
import { SafeAreaView, View, StyleSheet, Platform } from 'react-native';
import Paneldisp from '@/components/Paneldisp';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Paneldisp />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Add padding for Android
  },
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
});
