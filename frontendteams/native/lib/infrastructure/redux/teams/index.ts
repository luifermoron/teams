import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';


import ITeam from '../../../domain/entities/ITeam';
import TeamsState from './TeamsState';
import { teamsCalls } from './thunks';
import { RootState } from '..';

export const teamsAdapter = createEntityAdapter<ITeam>();
const initialState: TeamsState = teamsAdapter.getInitialState({
    refreshing: false,
    loading: false,
    error: null,
});
export const { fetchTeams } = teamsCalls(teamsAdapter);

const teamsSlice = createSlice({
  name: 'teams',
  initialState: initialState,
  reducers: {
    setRefreshing: (state, action) => {
      state.refreshing = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        teamsAdapter.setAll(state, action.payload);
        state.loading = false;
        state.refreshing = false;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.loading = false;
        state.refreshing = false;
        state.error = action.error.message;
      });
  },
  selectors: {
    selectLoading: state => state.loading,
    selectRefreshing: state => state.refreshing
  }
});

export const { setRefreshing } = teamsSlice.actions;
export const { selectLoading, selectRefreshing } = teamsSlice.selectors;
export const { selectById: selectTeamById, selectAll: selectAllTeams } = teamsAdapter.getSelectors<RootState>(state => state.teams);

export default teamsSlice.reducer;