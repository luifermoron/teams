import React from 'react';

import { Container, Box, CircularProgress } from '@mui/material';
import PlayerItem from './PlayerItem';
import { useFetchPlayers } from '../lib/controllers/players';
import { UseFetchPlayersResult } from '../lib/controllers/players/UseFetchPlayersResult';

type PlayersProps = {
  teamId: string
}

const PlayerList: React.FC<PlayersProps> = ({teamId}: PlayersProps) => {
  const { players, loading }: UseFetchPlayersResult = useFetchPlayers(parseInt(teamId, 10));

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      {loading ? (
        <CircularProgress/>
      ) : (
        <Box sx={{ width: '100%', maxWidth: 600 }}>
          {players.map(player => (
            <PlayerItem player={player}/>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default PlayerList;
