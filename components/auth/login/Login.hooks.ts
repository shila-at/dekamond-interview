"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginFormValues } from "./Login.types";
import { loginSchema } from "./Login.validation";
import { loginUser } from "@/api/login";
import { setUser } from "@/lib/storage";
import { DASHBOARD_URL } from "@/config/urls";

export function useLoginForm() {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone: "",
        },
        mode: "onBlur",
    })


    const onSubmit = async (values: LoginFormValues) => {
        try {
            setLoading(true);
            const apiUser = await loginUser();
            const user = {
                ...apiUser,
                phone: values.phone,
            };
            setUser(user);
            router.replace(DASHBOARD_URL);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        errors,
        register,
        onSubmit,
        handleSubmit
    };
}
