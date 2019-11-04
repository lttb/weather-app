
const APP_ID = process.env.OPEN_WEATHER_APP_ID;

export const getWeatherByCityName = async (searchValue) => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&APPID=${APP_ID}`);
    if (!result.ok) {
        const error = await result.json();
        throw new Error(error);
    }
    return await result.json();
};
