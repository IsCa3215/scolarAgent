/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import useAuthStore from './src/store/authStore';
import { LogBox } from 'react-native';

const App: React.FC = () => {
  const loadToken = useAuthStore((state) => state.loadToken);
  
  useEffect(() => {
    const initializeApp = async () => {
      try {
        await loadToken();
      } catch (error) {
        console.error('Error inicializando la app:', error);
      }
    };
    
    initializeApp();
  }, [loadToken]);

  return (
        <AppNavigator />
  );
};

export default App;