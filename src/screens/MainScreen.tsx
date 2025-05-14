import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';      
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuthStore from '../store/authStore';
import { Style } from '../style/StyleSheet';
import { LinearGradient } from 'expo-linear-gradient';
const Stack = createNativeStackNavigator();

export const MainScreen = () => {
  const logout = useAuthStore(state => state.logout);
  return (
    <View style={Style.container}>
      <Text style={Style.title}>Main Screen</Text>
      <Button title='Logout' onPress={() => {
        logout();
      }
    }
        />
    
    </View>
  );
}
