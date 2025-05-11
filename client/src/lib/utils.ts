import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge Tailwind CSS classes
 * @param inputs Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Delays execution for a specified amount of time
 * @param ms Time in milliseconds
 * @returns Promise that resolves after the specified time
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Checks if the current environment is a browser
 * @returns Boolean indicating if code is running in a browser
 */
export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

/**
 * Gets a random number between min and max (inclusive)
 * @param min Minimum value
 * @param max Maximum value
 * @returns Random number
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Smoothly scroll to an element on the page
 * @param elementId The ID of the element to scroll to
 * @param offset Optional offset from the top of the element
 */
export function scrollToElement(elementId: string, offset: number = 0): void {
  if (!isBrowser()) return;
  
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
  
  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}

/**
 * Formats a phone number to a standardized format
 * @param phone Phone number string
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");
  
  // Check if the number is valid
  if (cleaned.length !== 10) {
    return phone;
  }
  
  // Format as (XXX) XXX-XXXX
  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
}
