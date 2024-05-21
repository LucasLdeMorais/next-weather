import type { reducedWeatherDataModel } from "./reducedWeatherData";

interface weatherDataModel {
    temp: Number;
    date: string;
    time: string;
    condition_code: string;
    description: string;
    currently: string;
    cid: string;
    city: string;
    img_id: string;
    humidity: Number;
    cloudiness: Number;
    rain: Number;
    wind_speedy: string;
    wind_direction: Number;
    wind_cardinal: string;
    sunrise: string;
    sunset: string;
    moon_phase: string;
    condition_slug: string;
    city_name: string;
    timezone: string;
    forecast: reducedWeatherDataModel[];
    cref: string;
}

export type {weatherDataModel};