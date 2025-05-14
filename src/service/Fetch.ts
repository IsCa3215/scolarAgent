const API_URL = 'http://192.168.1.147:5000/'; 

interface LoginPayload {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginPayload) => {
  const res = await fetch(`${API_URL}api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data = await res.json();

  if (!data.token) throw new Error('Token no recibido');

  return data.token;
};

export const fetchEvents = async (token: string) => {
  const res = await fetch(`${API_URL}api/events`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data = await res.json();

  return data;
}

export const createEvent = async (token: string, event: any) => {
  const res = await fetch(`${API_URL}api/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(event),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data = await res.json();

  return data;
};