require('dotenv').config();

export const PORT = process.env.PORT || 3000;
export const SESSION_ID = process.env.SESSION_ID;

if (!SESSION_ID) {
  throw new Error('Session ID not found in .env file.');
}
