const API_URL = 'http://192.168.1.147:5000/'; // ← cámbialo por tu URL real

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
