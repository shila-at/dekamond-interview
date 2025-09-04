import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import { User } from '@/typings/User';
import { clearUser, getUser } from '@/lib/storage';
import { LOGIN_URL } from '@/config/urls';
import { toast } from 'react-toastify';

export function useDashboard() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userData = getUser();
        if (!userData) {
            handleLogout();
        } else {
            setUser(userData);
        }
    }, [router]);

    const handleLogout = () => {
        router.replace(LOGIN_URL);
        toast.error(`${user ? 'خروج با موفقیت انجام شد.' : 'برای دسترسی به داشبورد باید وارد شوید.'}`, {
            position: "top-right",
            autoClose: 5000,
        });
        clearUser();
    };

    return {
        user,
        handleLogout
    }
}
