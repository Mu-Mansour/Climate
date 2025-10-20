import { DynamicAPI } from "./BaseApiClient";
import type {
  Coordinates,
  ForecastData,
  GeocodingResponse,
  WeatherData,
} from "./types";
// const GEO_API = "/api-weather/geo/1.0";
const GEO_API = "https://api.openweathermap.org/geo/1.0";

class WeatherAPI extends DynamicAPI {
  async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
    return this.read<WeatherData>("/weather", {
      params: { lat: lat.toString(), lon: lon.toString() },
    });
  }

  async getForecast({ lat, lon }: Coordinates): Promise<ForecastData> {
    return this.read<ForecastData>("/forecast", {
      params: { lat: lat.toString(), lon: lon.toString() },
    });
  }

  async reverseGeocode({
    lat,
    lon,
  }: Coordinates): Promise<GeocodingResponse[]> {
    return this.read<GeocodingResponse[]>("/reverse", {
      baseUrl: GEO_API,
      params: { lat: lat.toString(), lon: lon.toString(), limit: "1" },
    });
  }

  async searchLocations(query: string): Promise<GeocodingResponse[]> {
    return this.read<GeocodingResponse[]>("/direct", {
      baseUrl: GEO_API,
      params: { q: query, limit: "5" },
    });
  }
}

export const weatherAPI = new WeatherAPI();
