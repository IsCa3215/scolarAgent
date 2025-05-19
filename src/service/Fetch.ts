const API_URL = 'http://192.168.1.147:5000/';

interface LoginPayload {
  email: string;
  password: string;
}

interface Event {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  date: string;
  expiresAt?: string;
  completed: boolean;
  type: 'recordatorio' | 'examen' | 'tarea' | 'otro';
}

interface CreateEventPayload {
  title: string;
  description?: string;
  date: string;
  type?: 'recordatorio' | 'examen' | 'tarea' | 'otro';
  expiresAt?: string;
  completed?: boolean; 
}

export const login = async ({ email, password }: LoginPayload): Promise<string> => {
  try {
    const res = await fetch(`${API_URL}api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      const errorMessage = errorData.message || `Error HTTP ${res.status}`;
      throw new Error(errorMessage);
    }

    const data = await res.json();
    if (!data.token) throw new Error('Token no recibido');
    
    return data.token;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

export const fetchEvents = async (token: string): Promise<Event[]> => {
  try {
    const res = await fetch(`${API_URL}api/events/fetchEvents`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      const errorMessage = errorData.message || `Error HTTP ${res.status}`;
      throw new Error(errorMessage);
    }

    const data: Event[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error en fetchEvents:', error);
    throw error;
  }
};

export const createEvent = async (token: string, event: CreateEventPayload): Promise<Event> => {
  try {
    const res = await fetch(`${API_URL}api/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(event),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      const errorMessage = errorData.message || `Error HTTP ${res.status}`;
      throw new Error(errorMessage);
    }

    const data: Event = await res.json();
    return data;
  } catch (error) {
    console.error('Error en createEvent:', error);
    throw error;
  }
};

export const updateEvent = async (token: string, eventId: string, updates: Partial<CreateEventPayload>): Promise<Event> => {
  try {
    const res = await fetch(`${API_URL}api/events/${eventId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updates),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      const errorMessage = errorData.message || `Error HTTP ${res.status}`;
      throw new Error(errorMessage);
    }

    const data: Event = await res.json();
    return data;
  } catch (error) {
    console.error('Error en updateEvent:', error);
    throw error;
  }
};

export const deleteEvent = async (token: string, eventId: string): Promise<{ success: boolean }> => {
  try {
    const res = await fetch(`${API_URL}api/events/${eventId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      const errorMessage = errorData.message || `Error HTTP ${res.status}`;
      throw new Error(errorMessage);
    }

    return { success: true };
  } catch (error) {
    console.error('Error en deleteEvent:', error);
    throw error;
  }
};

export const toggleEventCompletion = async (token: string, eventId: string, completed: boolean): Promise<Event> => {
  return updateEvent(token, eventId, { completed });
};
