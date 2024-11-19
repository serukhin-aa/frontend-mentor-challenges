import type { TCountry } from '@/types/views/сountry-type';
import axios from 'axios';

const API_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = (): Promise<TCountry[]> => {
  return new Promise((resolve, reject) => {
    axios
      .get<TCountry[]>(`${API_URL}/all`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
        reject(error);
      });
  });
};
