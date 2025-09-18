import crypto from 'crypto';
import { submitVote, getVoteCounts, createOrGetSession } from './_lib/database.js';

// Helper to hash IP addresses
function hashIP(ip) {
  return crypto.createHash('sha256').update(ip || 'unknown').digest('hex');
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { factId, voteType, sessionToken, browserFingerprint } = req.body || {};

    // Get IP and hash it
    const ip = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || req.socket?.remoteAddress;
    const ipHash = hashIP(ip);

    const debugInfo = {
      method: req.method,
      body: req.body,
      factId,
      voteType,
      sessionToken: sessionToken ? 'Present' : 'Missing',
      browserFingerprint: browserFingerprint ? 'Present' : 'Missing',
      ip: ip ? 'Present' : 'Missing',
      ipHash,
    };

    if (req.method === 'GET') {
      return res.status(200).json({
        success: true,
        debug: debugInfo,
        message: 'Debug endpoint - use POST to test voting'
      });
    }

    // Test session creation if no session token
    if (!sessionToken) {
      debugInfo.sessionCreationTest = 'Attempting to create session...';
      try {
        const newSession = await createOrGetSession(
          crypto.randomUUID(),
          ipHash,
          browserFingerprint || 'test-fingerprint'
        );
        debugInfo.sessionCreationResult = 'Success';
        debugInfo.newSessionToken = newSession.session_token;
      } catch (sessionError) {
        debugInfo.sessionCreationError = sessionError.message;
      }
    }

    // Test vote submission if we have required data
    if (factId && voteType && sessionToken) {
      try {
        await submitVote(factId, voteType, sessionToken, ipHash, browserFingerprint || 'test-fingerprint');
        debugInfo.voteSubmissionResult = 'Success';
      } catch (voteError) {
        debugInfo.voteSubmissionError = voteError.message;
        debugInfo.voteErrorCode = voteError.code;
        debugInfo.voteErrorDetail = voteError.detail;
      }
    }

    res.status(200).json({
      success: true,
      debug: debugInfo,
    });

  } catch (error) {
    console.error('Debug endpoint error:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      errorCode: error.code,
      errorDetail: error.detail,
    });
  }
}