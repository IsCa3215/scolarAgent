import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    login: (token: string) => Promise<void>;
    logout: () => Promise<void>;
    loadToken: () => Promise<void>;
    setIsAuthenticated: (value: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    token: null,
    isAuthenticated: false,
    login: async (token: string) => {
        await AsyncStorage.setItem('token', token);
        set({ token, isAuthenticated: true });
    },
    logout: async () => {
        await AsyncStorage.removeItem('token');
        set({ token: null, isAuthenticated: false });
    },
    loadToken: async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            set({ token, isAuthenticated: !!token });
        } catch (error) {
            console.error("Failed to load token:", error);
            set({ isAuthenticated: false, token: null });
        }
    },
    setIsAuthenticated: (value: boolean) => {
        set({ isAuthenticated: value });
    },
}));

export default useAuthStore;
