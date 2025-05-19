import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';      
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuthStore from '../store/authStore';
import { Style } from '../style/StyleSheet';
import { fetchEvents } from '../../back/controller/eventsControlles';
const Stack = createNativeStackNavigator();

export const MainScreen = () => {
  const authToken = useAuthStore(state => state.token);
  const logout = useAuthStore(state => state.logout);
  return (
    <View style={Style.container}>
      <Text style={Style.title}>Main Screen</Text>
      <Button title='Go to Calendar' onPress={() => {
          fetchEvents()
      }
      } />
      <Button title='Logout' onPress={() => {
        logout();
      }
    }
        />
    
    </View>
  );
}
