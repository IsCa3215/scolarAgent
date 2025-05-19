import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Style } from '../style/StyleSheet';

export const CalendarScreen = () => {
  const [selected, setSelected] = useState('');
  const [eventText, setEventText] = useState('');
  const [events, setEvents] = useState<{ [date: string]: string[] }>({});

  const addEvent = () => {
    if (!eventText || !selected) return;

    setEvents((prevEvents) => {
      const current = prevEvents[selected] || [];
      return {
        ...prevEvents,
        [selected]: [...current, eventText],
      };
    });

    setEventText('');
  };

  return (
    <View style={[Style.container, { paddingTop: 60 }]}>
      <Text style={Style.title}>Calendario</Text>

      <Calendar
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 15,
          marginBottom: 20,
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#a55eea',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#a55eea',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
        }}
        onDayPress={(day) => setSelected(day.dateString)}
        markedDates={{
          [selected]: {
            selected: true,
            marked: events[selected]?.length > 0,
            selectedColor: '#a55eea',
          },
        }}
      />

      <TextInput
        style={Style.input}
        placeholder="Añadir evento"
        placeholderTextColor="#ccc"
        value={eventText}
        onChangeText={setEventText}
      />
      <TouchableOpacity style={Style.button} onPress={addEvent}>
        <Text style={Style.buttonText}>Guardar Evento</Text>
      </TouchableOpacity>

      {selected && (
        <View style={{ marginTop: 30, width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 18, marginBottom: 10 }}>
            Eventos para {selected}:
          </Text>
          <FlatList
            data={events[selected] || []}
            keyExtractor={(item, index) => `${selected}-${index}`}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: 10,
                  marginBottom: 5,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: 'white' }}>{item}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};
