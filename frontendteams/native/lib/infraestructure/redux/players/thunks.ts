import { createAsyncThunk, EntityAdapter } from '@reduxjs/toolkit';
import IPlayer from '@/lib/domain/entities/IPlayer';
import { RootState } from '..';

import { getPlayersUseCase } from '@/lib/application/useCases/players';

export const playersCalls = (playersAdapter: EntityAdapter<IPlayer, number>) => {
  const fetchPlayers = createAsyncThunk('players/fetchPlayers', async (teamId: number, { getState }) => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const state = getState() as RootState;
    const DELAYED_FOR_ANIMATION = 1500;
    const [players] = await Promise.all([
        getPlayersUseCase(teamId),
        delay(DELAYED_FOR_ANIMATION),
    ]);
    return players;
  }, {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      if (state.players.loading) {
        return false;
      }
    }
  });
  return { fetchPlayers };
}



