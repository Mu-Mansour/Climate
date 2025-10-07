type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiOptions {
  baseUrl?: string;
  params?: Record<string, string | number>;
  body?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export class DynamicAPI {
  private BASE_API_CONFIG = {
    BASE_URL: "https://api.openweathermap.org/data/2.5",
    DEFAULT_PARAMS: {
      units: "metric",
      appid: import.meta.env.WEATHER_API_KEY,
    },
  };
  private createUrl(endpoint: string, options: ApiOptions = {}): string {
    const { baseUrl = this.BASE_API_CONFIG.BASE_URL, params = {} } = options;
    const effectiveParams = {
      ...this.BASE_API_CONFIG.DEFAULT_PARAMS,
      ...params,
    };
    const searchParams = new URLSearchParams(effectiveParams);
    return `${baseUrl}${endpoint}?${searchParams.toString()}`;
  }

  private async request<T = unknown>(
    method: HttpMethod,
    endpoint: string,
    options: ApiOptions = {}
  ): Promise<T> {
    const url = this.createUrl(endpoint, options);
    const { body, headers = {} } = options;

    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (body && (method === "POST" || method === "PUT" || method === "PATCH")) {
      fetchOptions.body = JSON.stringify(body);
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json() as T;
  }

  async create<T = unknown>(
    endpoint: string,
    options: ApiOptions = {}
  ): Promise<T> {
    return this.request<T>("POST", endpoint, options);
  }

  async read<T = unknown>(
    endpoint: string,
    options: ApiOptions = {}
  ): Promise<T> {
    return this.request<T>("GET", endpoint, options);
  }

  async update<T = unknown>(
    endpoint: string,
    options: ApiOptions = {}
  ): Promise<T> {
    return this.request<T>("PUT", endpoint, options);
  }

  async partialUpdate<T = unknown>(
    endpoint: string,
    options: ApiOptions = {}
  ): Promise<T> {
    return this.request<T>("PATCH", endpoint, options);
  }

  async delete<T = unknown>(
    endpoint: string,
    options: ApiOptions = {}
  ): Promise<T> {
    return this.request<T>("DELETE", endpoint, options);
  }

  async requestMethod<T = HttpMethod>(
    method: HttpMethod,
    endpoint: string,
    options: ApiOptions = {}
  ): Promise<T> {
    return this.request<T>(method, endpoint, options);
  }
}
