import {useEffect, useState, useCallback} from 'react';
import SnackOrBoozeApi from './Api';

export function useSnacks() {
  const [isLoading, setIsLoading] = useState(false);
  const [snacks, setSnacks] = useState([]);

  async function getSnacks() {
    setIsLoading(true)
    let snacks = await SnackOrBoozeApi.getSnacks();
    setSnacks(snacks);
    setIsLoading(false);
  }
  useEffect(() => {
    getSnacks();
  }, []);

  const refetch = useCallback(() => {
    getSnacks()
  },[]) 
  return {isLoading, snacks, refetch}
}

export function useDrinks() {
  const [isLoading, setIsLoading] = useState(false);
  const [drinks, setDrinks] = useState([]);

  async function getDrinks() {
    setIsLoading(true)
    let drinks = await SnackOrBoozeApi.getDrinks();
    setDrinks(drinks);
    setIsLoading(false);
  }
  useEffect(() => {
    getDrinks();
  }, []);
  const refetch = useCallback(() => {
    getDrinks()
  },[])
  return {isLoading, drinks, refetch}
}

export function useItemMutation() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [data, setData] = useState(null)

  const mutate = useCallback((input) => {
    setIsLoading(true)
    SnackOrBoozeApi.createItem(input).then((output) => {
      setIsLoading(false)
      setData(output)
      setIsDone(true)
    })
  }, [])

  return {isLoading, mutate, data, isDone}
}