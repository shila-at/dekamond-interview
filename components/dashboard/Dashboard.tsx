"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import { useDashboard } from "./Dashboard.hooks";

export default function Dashboard() {

    const { user, handleLogout } = useDashboard();

    return (
        <div className="flex items-center justify-center min-h-screen bg-muted/40 p-4">
            <Card className="w-full max-w-lg shadow-xl rounded-2xl">
                <CardHeader className="flex flex-col items-center justify-center pt-8">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={user?.avatar} alt="@user-avatar" />
                        <AvatarFallback className="text-sm font-bold">
                            {user?.name.full}
                        </AvatarFallback>
                    </Avatar>
                    <CardTitle className="mt-4 text-center text-3xl font-bold text-gray-800 dark:text-gray-100">
                        {`خوش آمدید، ${user?.name.first}`}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            نام کاربری:
                        </p>
                        <p className="text-xl font-semibold mt-1">
                            {user?.name.full}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            ایمیل:
                        </p>
                        <p className="text-xl font-semibold mt-1">
                            {user?.email}
                        </p>
                    </div>

                    <Button
                        onClick={handleLogout}
                        className="w-full h-12 max-w-[200px] mt-6 flex items-center gap-2"
                        variant="destructive"
                    >
                        <LogOut className="w-4 h-4" />
                        خروج
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}