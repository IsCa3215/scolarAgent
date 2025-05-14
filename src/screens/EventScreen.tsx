import { fetchEvents } from "../service/Fetch";
import useAuthStore from "../store/authStore";



export const EventScreen = () => {
    const {token} = useAuthStore((state) => ({
        token: state.token,
    }));
    const events = token ? fetchEvents(token) : null;
    const eventElements = [];

}
