import { NavigationContainer, useNavigation, NavigationProp } from '@react-navigation/native';
import { useEffect, useState } from 'react';      
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {login} from '../service/Fetch';


export const LoginScreen = () => {
  const Stack = createNativeStackNavigator();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginStore = useAuthStore(state => state.login);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    try {
      const token = await login({ email, password });
      await loginStore(token);
      navigation.navigate('CalendarScreen');
    } catch (err: any) {
      Alert.alert('Error', err.message || 'No se ha podido iniciar sesión');
    }
  };

  return (
    <View style={Style.container}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <TextInput
        style={Style.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={Style.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

import { StyleSheet } from 'react-native';
import useAuthStore from '../store/authStore';
import { RootStackParamList } from '../navigation/AppNavigator';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    borderRadius: 10,
  },
});
