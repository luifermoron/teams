import React from 'react';

import { useFetchTeams } from '../lib/controllers/teams';
import { UseFetchTeamsResult } from '../lib/controllers/teams/UseFetchTeamsResult';
import { Container, Box, CircularProgress } from '@mui/material';
import TeamItem from './TeamItem';


const TeamList: React.FC = () => {
    
  const { teams, loading }: UseFetchTeamsResult = useFetchTeams();

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
          {teams.map(team => (
            <TeamItem team={team}/>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default TeamList;
