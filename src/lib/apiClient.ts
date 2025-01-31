import ky, { Options, KyInstance, HTTPError } from "ky";

const KyIntrceptors = {
  beforeRequest: [],
  afterResponse: [],
  beforeError: [
    (error: HTTPError) => {
      if (error.response?.status === 401) {
        console.error("Unauthorized: Redirecting to login...");
        window.location.href = "/login";
      }
      return error;
    },
  ],
};

class ApiClient {
  private client: KyInstance;

  constructor(baseURL: string, defaultOptions: Options = {}) {
    this.client = ky.create({
      prefixUrl: baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
      },
      hooks: KyIntrceptors,
      ...defaultOptions,
    });
  }

  async get<T>(url: string, options?: Options): Promise<T> {
    return this.client.get(url, options).json();
  }

  async post<T>(url: string, json: JSON, options?: Options): Promise<T> {
    return this.client.post(url, { json, ...options }).json();
  }

  async put<T>(url: string, json: JSON, options?: Options): Promise<T> {
    return this.client.put(url, { json, ...options }).json();
  }
}

export const apiClient = new ApiClient(process.env.NEXT_PUBLIC_API_URL || "");
