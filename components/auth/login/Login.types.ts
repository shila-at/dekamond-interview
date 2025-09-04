import { z } from "zod";
import { loginSchema } from "./Login.validation";

export type LoginFormValues = z.infer<typeof loginSchema>;