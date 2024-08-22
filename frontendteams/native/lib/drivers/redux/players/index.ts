import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';


import IPlayer from '../../../domain/entities/IPlayer';
import PlayersState from './PlayersState';
import { playersCalls } from './thunks';
import { RootState } from '..';

export const playersAdapter = createEntityAdapter<IPlayer>();
const initialState: PlayersState = playersAdapter.getInitialState({
    refreshing: false,
    loading: false,
    error: null,
});
export const { fetchPlayers } = playersCalls(playersAdapter);

const playersSlice = createSlice({
  name: 'players',
  initialState: initialState,
  reducers: {
    setRefreshing: (state, action) => {
      state.refreshing = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        playersAdapter.setAll(state, action.payload);
        state.loading = false;
        state.refreshing = false;
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
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

export const { setRefreshing } = playersSlice.actions;
export const { selectLoading, selectRefreshing } = playersSlice.selectors;
export const { selectById: selectPlayerById, selectAll: selectAllPlayers } = playersAdapter.getSelectors<RootState>(state => state.players);

export default playersSlice.reducer;