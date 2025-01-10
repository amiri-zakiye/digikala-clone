import { getEnvSafely } from "./config"

const API_URL = getEnvSafely('API_URL');

const env = {
  API_URL
};

export default env;