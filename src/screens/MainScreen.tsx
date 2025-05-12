import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';      
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuthStore from '../store/authStore';
const Stack = createNativeStackNavigator();

export const MainScreen = () => {
  const logout = useAuthStore(state => state.logout);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Screen</Text>
      <Button title='Logout' onPress={() => {
        logout();
      }
    }
        />
    
    </View>
  );
}
