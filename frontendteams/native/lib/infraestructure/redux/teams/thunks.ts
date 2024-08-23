import { createAsyncThunk, EntityAdapter } from '@reduxjs/toolkit';
import ITeam from '@/lib/domain/entities/ITeam';
import { RootState } from '..';
import { getTeamsUseCase } from '@/lib/application/useCases/teams';


export const teamsCalls = (teamsAdapter: EntityAdapter<ITeam, number>) => {
  const fetchTeams = createAsyncThunk('teams/fetchTeams', async (_, { getState }) => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const state = getState() as RootState;
    const DELAYED_FOR_ANIMATION = 1500;
    const [teams] = await Promise.all([
        getTeamsUseCase(teamsAdapter.getSelectors().selectAll(state.teams)),
        delay(DELAYED_FOR_ANIMATION),
    ]);
    return teams;
  }, {
    condition: (_, { getState }) => {
      const state = getState() as RootState;
      if (state.teams.loading) {
        return false;
      }
    }
  });
  return { fetchTeams };
}



