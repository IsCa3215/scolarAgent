import { useEffect, useState } from 'react';      
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Style } from '../style/StyleSheet';

export const CalendarScreen = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={Style.container}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Calendar Screen</Text>
      <Calendar  style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#dd99ee'
      }} onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
      />
      <Text>Calendar functionality will be implemented here.</Text>
    </View>
  );
};
