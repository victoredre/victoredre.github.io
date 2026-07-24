import { clsx, type ClassValue } from "clsx"  // ← Esto ya lo tienes bien ✅
import { twMerge } from "tailwind-merge"

/**
 * Merges multiple class values into a single string and eliminates duplicates.
 *
 * @param {...ClassValue[]} inputs - An array of class values which could be strings, arrays, or objects.
 * @return {string} - A single merged string of class names.
 */
export function cn(...inputs: ClassValue[]): string {  // ← Agrega el tipo de retorno :string
  return twMerge(clsx(inputs))
}

/**
 * Formats the given datetime value into a localized date string.
 *
 * @param {Date | string} datetime - El datetime a formatear
 * @returns {string} - Fecha formateada
 */
export const formatDatetime = (datetime: Date | string): string => {  // ← Cambia 'any' por tipo específico
  const d = new Date(datetime);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
};
