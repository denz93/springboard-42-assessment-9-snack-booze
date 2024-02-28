import {useEffect, useState} from 'react';
import SnackOrBoozeApi from './Api';

export function useSnacks() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);
  return {isLoading, snacks}
}

export function useDrinks() {
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);
  return {isLoading, drinks}
}