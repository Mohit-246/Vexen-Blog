import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

/**
 * Create JWT
 */
export function signToken(payload, expiresIn = "5h") {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

/**
 * Verify JWT
 */
export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

/**
 * Decode JWT (no verification)
 */
export function decodeToken(token) {
  return jwt.decode(token);
}
