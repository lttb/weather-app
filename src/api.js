
const APP_ID = process.env.OPEN_WEATHER_APP_ID;

export const getWeatherByCityName = (searchValue) => `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&APPID=${APP_ID}`;
