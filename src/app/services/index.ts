// TODO: service function to fetch weather data
const fetchWeather = async (url: string) => {
    
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const services = { fetchWeather };
export type Services = typeof services; 