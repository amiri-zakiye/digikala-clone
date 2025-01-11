import { getEnvSafely } from "./config"

const API_URL = getEnvSafely('NEXT_PUBLIC_API_URL');

const env = {
  API_URL
};

export default env;