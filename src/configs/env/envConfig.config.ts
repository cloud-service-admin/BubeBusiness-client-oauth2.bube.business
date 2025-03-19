const requiredEnvVars: string[] = [
  'VITE_APP_MODE',
  'VITE_APP_API_URL',
  'VITE_APP_SOCKET_URL',
  'VITE_FIREBASE_APIKEY',
  'VITE_FIREBASE_AUTHDOMAIN',
  'VITE_FIREBASE_PROJECTID',
  'VITE_FIREBASE_STORAGEBUCKET',
  'VITE_FIREBASE_MESSAGINGSENDERID',
  'VITE_FIREBASE_APPID',
  'VITE_FIREBASE_MEASUREMENTID',
  'VITE_FIREBASE_VAPIDKEY',
];

// Kiểm tra xem tất cả các biến môi trường yêu cầu có tồn tại không
const missingEnvVars: string[] = requiredEnvVars.filter(
  (varName) => !import.meta.env[varName],
);

if (missingEnvVars.length > 0) {
  console.error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
}

// Định nghĩa một interface cho cấu hình môi trường
interface EnvConfig {
  VITE_APP_MODE: string;
  VITE_APP_API_URL: string;
  VITE_APP_SOCKET_URL: string;
  VITE_FIREBASE_APIKEY: string;
  VITE_FIREBASE_AUTHDOMAIN: string;
  VITE_FIREBASE_PROJECTID: string;
  VITE_FIREBASE_STORAGEBUCKET: string;
  VITE_FIREBASE_MESSAGINGSENDERID: string;
  VITE_FIREBASE_APPID: string;
  VITE_FIREBASE_MEASUREMENTID: string;
  VITE_FIREBASE_VAPIDKEY: string;
}

// Lấy giá trị từ biến môi trường và gán vào đối tượng cấu hình
const envConfig: EnvConfig = requiredEnvVars.reduce(
  (config: EnvConfig, varName: string) => {
    config[varName as keyof EnvConfig] = import.meta.env[varName] as string;
    return config;
  },
  {} as EnvConfig,
);

export default envConfig;
