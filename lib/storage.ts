import { User } from "@/typings/User";

const USER_KEY = 'dekamond_user';

export function setUser(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}
export function getUser(): User | null {
    try {
        const user = localStorage.getItem(USER_KEY);
        return user ? JSON.parse(user) as User : null;
    } catch { return null; }
}
export function clearUser() {
    localStorage.removeItem(USER_KEY);
}
