// src/components/TeamItem.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ITeam from '../lib/domain/entities/ITeam';

type TeamItemProps = {
    team: ITeam
}

const TeamItem: React.FC<TeamItemProps> = ({team}: TeamItemProps) => {
   const { id, name, group, coach } = team;
  return (
    <Card
      sx={{
        marginBottom: 2,
        textAlign: 'left',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
      component={Link}
      to={`/players/${id}`}
    >
      <CardContent>
        <Box
          sx={{
            padding: 2,
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.4)',  // Darker shadow as requested
          }}
        >
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Group: {group}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Coach: {coach}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamItem;
