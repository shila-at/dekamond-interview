import { z } from "zod";
import { isMobile } from "@/lib/utils";

export const loginSchema = z.object({
    phone: z
        .string()
        .refine((val: string) => isMobile(val), {
            message:
                "شماره معتبر وارد کنید (09xxxxxxxxx یا +989xxxxxxxxx یا 00989xxxxxxxxx).",
        }),
});
