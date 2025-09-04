"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLoginForm } from "./Login.hooks";
import { Lock, Smartphone, LoaderCircle, AlertTriangle } from "lucide-react";

export default function LoginForm() {
    const { loading, errors, register, onSubmit, handleSubmit } = useLoginForm();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-slate-900 dark:to-slate-800 px-4">
            <Card className="w-full max-w-md shadow-2xl rounded-3xl backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50">
                <CardHeader className="pt-8">
                    <CardTitle className="text-center text-2xl font-extrabold text-slate-800 dark:text-white flex items-center justify-center gap-2">
                        <Lock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        ورود به حساب کاربری
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        <div className="space-y-2 relative">
                            <label htmlFor="phone" className="text-md font-medium text-slate-700 dark:text-slate-300 flex items-center">
                                <Smartphone />
                                شماره موبایل
                            </label>
                            <div className="relative mt-3">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">🇮🇷</span>
                                <Input
                                    id="phone"
                                    inputMode="numeric"
                                    placeholder="مثال: 09121234567"
                                    aria-invalid={errors.phone ? "true" : "false"}
                                    aria-describedby={errors.phone ? "phone-error" : undefined}
                                    className={`pr-10 text-right h-12 ${errors.phone
                                        ? "border-destructive focus-visible:ring-destructive"
                                        : ""
                                        }`}
                                    {...register("phone")}
                                />
                            </div>
                            {errors.phone && (
                                <p id="phone-error" className="text-sm text-destructive flex items-center gap-1 mt-2">
                                    <AlertTriangle className="w-4 h-4" />
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            disabled={!!errors.phone || loading}
                            aria-busy={loading}
                            className="w-full h-12 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 bg-emerald-500 hover:bg-emerald-600 text-white"
                        >
                            {loading ? (
                                <LoaderCircle className="h-6 w-6 animate-spin" />
                            ) : (
                                "ورود"
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}