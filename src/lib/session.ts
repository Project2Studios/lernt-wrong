import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto-js';

// Session management utilities
export interface SessionInfo {
  sessionToken: string;
  ipHash: string;
  browserFingerprint: string;
}

// Generate a unique session token
export function generateSessionToken(): string {
  return uuidv4();
}

// Create a hash from IP address (for privacy)
export function hashIP(ip: string): string {
  const secret = process.env.SESSION_SECRET || 'default-secret';
  return crypto.SHA256(ip + secret).toString();
}

// Generate browser fingerprint from request headers (privacy-friendly)
export function generateBrowserFingerprint(headers: Record<string, string | string[] | undefined>): string {
  const userAgent = headers['user-agent'] || '';
  const acceptLanguage = headers['accept-language'] || '';
  const acceptEncoding = headers['accept-encoding'] || '';

  // Create fingerprint from non-PII browser characteristics
  const fingerprintData = {
    userAgent: typeof userAgent === 'string' ? userAgent : '',
    acceptLanguage: typeof acceptLanguage === 'string' ? acceptLanguage : '',
    acceptEncoding: typeof acceptEncoding === 'string' ? acceptEncoding : '',
  };

  return crypto.SHA256(JSON.stringify(fingerprintData)).toString();
}

// Get client IP from request (handles proxies)
export function getClientIP(req: Request): string {
  // Check for common proxy headers
  const forwarded = req.headers.get('x-forwarded-for');
  const realIP = req.headers.get('x-real-ip');
  const cfConnectingIP = req.headers.get('cf-connecting-ip');

  if (cfConnectingIP) return cfConnectingIP;
  if (realIP) return realIP;
  if (forwarded) return forwarded.split(',')[0].trim();

  // Fallback for development
  return '127.0.0.1';
}

// Create session expiration time (24 hours from now)
export function createSessionExpiration(): Date {
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 24);
  return expiration;
}

// Check if session is expired
export function isSessionExpired(expiresAt: string | Date): boolean {
  const expiration = typeof expiresAt === 'string' ? new Date(expiresAt) : expiresAt;
  return expiration < new Date();
}