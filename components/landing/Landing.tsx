"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LOGIN_URL } from "@/config/urls";
import { useRouter } from "next/navigation";

export default function Landing() {
    const router = useRouter();

    const handleLoginRedirect = () => {
        router.push(LOGIN_URL);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-slate-900 dark:to-slate-800 p-4">
            <Card className="w-full max-w-xl text-center shadow-2xl rounded-3xl backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50">
                <CardHeader className="pt-12">
                    <CardTitle className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight">
                        Deka<span className="text-indigo-600 dark:text-indigo-400">mond</span>
                    </CardTitle>
                    <p className="text-xl md:text-2xl mt-2 text-slate-600 dark:text-slate-300">
                        Interview
                    </p>
                </CardHeader>
                <CardContent className="mt-8">
                    <p className="text-lg text-slate-700 dark:text-slate-200 mb-8">
                        به مصاحبه دکامند خوش آمدید.
                    </p>
                    <Button
                        onClick={handleLoginRedirect}
                        className="h-12 w-full mx-auto max-w-xs text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-2"
                    >
                        ورود به سامانه
                       
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}