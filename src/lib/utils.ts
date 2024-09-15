import { env } from '@/root/env.mjs'
import { ClassValue, clsx } from 'clsx'
import ms from 'ms'
import { twMerge } from 'tailwind-merge'

// https://hosnaqasmei.com/posts/nextjs14-blog-view-counter-and-minute-read
export function calculateReadingTime(mdxContent: any) {
  // Define the average reading speed (words per minute)
  const wordsPerMinute = 200

  // Strip MDX/HTML tags and count the words
  const text = mdxContent.replace(/<\/?[^>]+(>|$)/g, '')
  const wordCount = text
    .split(/\s+/)
    .filter((word: any) => word.length > 0).length

  // Calculate reading time
  const readingTime = Math.ceil(wordCount / wordsPerMinute)

  return readingTime
}

/**
 * Combines class names using clsx and tailwind-merge.
 * @param inputs - A variadic set of class values to be combined.
 * @returns A string with combined class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string or timestamp into a human-readable format.
 * @param input - A date string or timestamp.
 * @returns A formatted date string.
 */
export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

/**
 * Formats a Date object into an ISO 8601 date string (YYYY-MM-DD).
 *
 * This function takes a JavaScript Date object and formats it to an ISO 8601
 * compliant date string representing the year, month, and day. The time portion
 * is omitted in the output. If the input date is invalid or not provided,
 * an error will be thrown by the Date object's toISOString() method.
 *
 * @param {Date} date - A JavaScript Date object.
 * @returns {string} An ISO 8601 formatted date string in 'YYYY-MM-DD' format.
 */
export function formatDateToISO(date: Date): string {
  return date.toISOString().split('T')[0]
}

/**
 * Generates an absolute URL based on a given path.
 * @param path - The path to be appended to the base URL.
 * @returns A complete URL string.
 */
export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

/**
 * Calculates the time elapsed since a given date.
 * @param timestamp - The date to calculate from.
 * @param timeOnly - If true, returns only the time without 'ago' suffix.
 * @returns A string representing the time elapsed.
 */
export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never'
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? '' : ' ago'
  }`
}

/**
 * Fetches JSON data from a given URL and handles errors.
 * @param input - The URL to fetch data from.
 * @param init - Additional options for the fetch request.
 * @returns A promise that resolves with the fetched JSON data.
 */
export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number
      }
      error.status = res.status
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }

  return res.json()
}

/**
 * Formats a number into a more readable form using metric prefixes.
 * @param num - The number to format.
 * @param digits - The number of decimal places to include.
 * @returns A formatted string representing the number.
 */
export function nFormatter(num: number, digits?: number) {
  if (!num) return '0'
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value
    })
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, '$1') + item.symbol
    : '0'
}

/**
 * Capitalizes the first letter of a string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export function capitalize(str: string) {
  if (!str || typeof str !== 'string') return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Truncates a string to a specified length and adds an ellipsis.
 * @param str - The string to truncate.
 * @param length - The maximum length of the truncated string.
 * @returns The truncated string.
 */
export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str
  return `${str.slice(0, length)}...`
}

/**
 * Splits an array into a specified number of subarrays.
 * @param array - The array to split.
 * @param numParts - The number of parts to split the array into.
 * @returns An array of subarrays.
 */
export function splitArray<T>(array: T[], numParts: number): T[][] {
  let result: T[][] = []
  for (let i = 0; i < numParts; i++) {
    result.push([])
  }

  for (let i = 0; i < array.length; i++) {
    result[i % numParts].push(array[i])
  }

  return result
}

/**
 * Extracts initials from a given name.
 *
 * This function takes a name string and returns the initials based on the following rules:
 * - For a single name, it returns the first letter.
 * - For two or more names, it returns the first letter of the first and last name.
 * - If the name is empty, null, or undefined, it returns "Guest".
 *
 * @param {string | null | undefined} name - The full name to extract initials from.
 * @returns {string} The extracted initials or "Guest" if no valid name is provided.
 *
 * @example
 * getInitials("Johan Guse") // Returns "JG"
 * getInitials("Johan Robertt Guse") // Returns "JG"
 * getInitials("Johan") // Returns "J"
 * getInitials("") // Returns "Guest"
 * getInitials(null) // Returns "Guest"
 * getInitials(undefined) // Returns "Guest"
 */
export function getInitials(name: string | null | undefined): string {
  if (!name || name.trim() === '') return 'Guest'

  const words = name.trim().split(/\s+/)

  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase()
  }

  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase()
}
