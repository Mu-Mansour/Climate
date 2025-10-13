import { useParams, useSearchParams } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { useForecastQuery, useWeatherQuery } from "@/hooks/useWeatherQuery";
import WeatherSkeleton from "@/components/customComponents/WeatherSkeleton";
import { FavoriteButton } from "@/components/customComponents/FavoriteButton";
import { CurrentWeather } from "@/components/customComponents/CurrentWeather";
import { HourlyTemperature } from "@/components/customComponents/HourlyTemperature";
import { WeatherDetails } from "@/components/customComponents/WeatherDetails";
import { WeatherForecast } from "@/components/customComponents/WeatherForecast";

export function Component() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");

  const coordinates = { lat, lon };

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant='destructive'>
        <AlertTriangle className='h-4 w-4' />
        <AlertDescription>
          Failed to load weather data. Please try again.
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data) {
    return (
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        No Data Found
      </h2>
    );
  }
  if (weatherQuery.isLoading || forecastQuery.isLoading) {
    return <WeatherSkeleton />;
  }

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold tracking-tight'>
          {params.cityName}, {weatherQuery.data.sys.country}
        </h1>
        <div className='flex gap-2'>
          <FavoriteButton
            data={{ ...weatherQuery.data, name: params.cityName ?? "" }}
          />
        </div>
      </div>

      <div className='grid gap-6'>
        <CurrentWeather data={weatherQuery.data} />
        <HourlyTemperature data={forecastQuery.data} />
        <div className='grid gap-6 md:grid-cols-2 items-start'>
          <WeatherDetails data={weatherQuery.data} />
          <WeatherForecast data={forecastQuery.data} />
        </div>
      </div>
    </div>
  );
}
