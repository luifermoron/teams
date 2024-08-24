
import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../infrastructure/redux';
import { fetchTeams, selectAllTeams, selectLoading, selectRefreshing, setRefreshing } from '../../infrastructure/redux/teams';
import { UseFetchTeamsResult } from './UseFetchTeamsResult';
import { AppDispatch } from '../../infrastructure/redux';

export const useFetchTeams = (): UseFetchTeamsResult => {
  const dispatch = useAppDispatch();
  const teams = useAppSelector(selectAllTeams);
  const loading = useAppSelector(selectLoading);
  const refreshing = useAppSelector(selectRefreshing);
  
  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  return { teams, loading, refreshing };
};

export const useOnRefresh = (dispatch: AppDispatch) => {
  return useCallback(() => {
    dispatch(setRefreshing(true));
    dispatch(fetchTeams());
  }, [dispatch]);
};

