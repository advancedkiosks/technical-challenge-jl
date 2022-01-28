import { services } from '../../services';

const getWeatherData = async (dispatch: any, url: string) => {
  try {
    const data = await services.fetchWeather(url);

    dispatch({ type: 'GET_WEATHER', payload: data });

    return undefined;
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getWeatherData };