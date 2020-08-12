import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import MainStackNavigator from './src/components/navigation/MainStackNavigation';
import * as Font from 'expo-font';

export default function App() {

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
    })();

    return () => { };
  }, []);

  return (
    <MainStackNavigator />
  );
}