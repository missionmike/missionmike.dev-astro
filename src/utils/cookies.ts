/**
 * Get a cookie value by name
 */
export function getCookie(name: string): string | null {
  // Handle server-side rendering where document is not available
  if (typeof document === 'undefined') return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

/**
 * Set a cookie with a specified name and value
 */
export function setCookie(name: string, value: string): void {
  // Handle server-side rendering where document is not available
  if (typeof document === 'undefined') return;

  const date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000); // 365 days
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`;
}

/**
 * Get the current theme preference from cookie or system preference
 */
export function getThemePreference(): 'dark' | 'light' {
  const savedTheme = getCookie('theme');

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }

  // Default to dark.
  return 'dark';
}
