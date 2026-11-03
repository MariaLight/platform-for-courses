// если в render в одну переменную случайно вставили две строки — берём первую
const raw = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
export const API_URL = String(raw).split('\n')[0].trim();
console.log('API_URL', API_URL);
