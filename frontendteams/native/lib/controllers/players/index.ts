
import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../infraestructure/redux';
import { fetchPlayers, selectAllPlayers, selectLoading, selectRefreshing, setRefreshing } from '../../infraestructure/redux/players';
import { UseFetchPlayersResult } from './UseFetchPlayersResult';
import { AppDispatch } from '../../infraestructure/redux';

export const useFetchPlayers = (teamId: number): UseFetchPlayersResult => {
  const dispatch = useAppDispatch();
  const players = useAppSelector(selectAllPlayers);
  const loading = useAppSelector(selectLoading);
  const refreshing = useAppSelector(selectRefreshing);
  
  useEffect(() => {
    dispatch(fetchPlayers(teamId));
  }, [dispatch, teamId]);

  return { players, loading, refreshing };
};

export const useOnRefresh = (dispatch: AppDispatch, teamId: number) => {
  return useCallback(() => {
    dispatch(setRefreshing(true));
    dispatch(fetchPlayers(teamId));
  }, [dispatch, teamId]);
};

