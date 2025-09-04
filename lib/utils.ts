import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const MOBILE_REGEX = [
  /^09\d{9}$/,
  /^\+989\d{9}$/,
  /^00989\d{9}$/
];

export function isMobile(input: string): boolean {
  return MOBILE_REGEX.some((re) => re.test(input.trim()));
}