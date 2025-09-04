import { User } from "@/typings/User";

export const loginUser = async (): Promise<User> => {
    const res = await fetch('https://randomuser.me/api/?results=1&nat=us', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch user');
    const data = await res.json();
    const u = data.results[0];
    return {
        id: u.login.uuid,
        name: {
            first: u.name.first,
            last: u.name.last,
            full: `${u.name.first} ${u.name.last}`,
        },
        email: u.email,
        avatar: u.picture?.medium ?? u.picture?.thumbnail ?? '',
        phone: ''
    };
}
