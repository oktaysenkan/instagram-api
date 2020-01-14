require('dotenv').config();

export const PORT = process.env.PORT || 3000;
export const SESSION_ID = process.env.SESSION_ID;
export const USER_AGENT = 'Mozilla/5.0 (Linux; Android 8.1.0; motorola one Build/OPKS28.63-18-3; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.80 Mobile Safari/537.36 Instagram 72.0.0.21.98 Android (27/8.1.0; 320dpi; 720x1362; motorola; motorola one; deen_sprout; qcom; pt_BR; 132081645';
export const BASE_URL = process.env.BASE_URL || 'http://localhost:' + PORT;

if (!SESSION_ID) {
  throw new Error('Session ID not found in .env file.');
}
