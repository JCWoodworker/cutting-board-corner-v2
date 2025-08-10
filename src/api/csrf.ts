let csrfToken: string | null = null;

export function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

export async function fetchAndStoreCsrfToken(): Promise<string> {
  try {
    const baseUrl = import.meta.env.DEV ? '/api' : '/api';
    const res = await fetch(`${baseUrl}/get-csrf-token/`, {
      credentials: 'include',
      method: 'GET',
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch CSRF token: ${res.status}`);
    }
    
    const data = await res.json();
    csrfToken = data.csrfToken as string;
    
    // Also try to get from cookie as backup
    if (!csrfToken) {
      csrfToken = getCookie('csrftoken');
    }
    
    return csrfToken!;
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
    // Fallback to cookie
    csrfToken = getCookie('csrftoken');
    if (!csrfToken) {
      throw new Error('Unable to obtain CSRF token');
    }
    return csrfToken;
  }
}

export function getCsrfToken(): string | null {
  // Always check cookie first, then memory
  const cookieToken = getCookie('csrftoken');
  return cookieToken || csrfToken;
}

export async function ensureCsrfHeader(headers: Record<string, string> = {}): Promise<Record<string, string>> {
  let token = getCsrfToken();
  
  if (!token) {
    token = await fetchAndStoreCsrfToken();
  }

  if (!token) {
    throw new Error('Unable to obtain CSRF token for request');
  }

  return {
    ...headers,
    'X-CSRFToken': token,
  };
}