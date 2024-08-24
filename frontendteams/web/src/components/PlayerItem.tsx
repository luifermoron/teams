import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import IPlayer from '../lib/domain/entities/IPlayer';

type PlayerItemProps  = {
  player: IPlayer
}

const PlayerItem: React.FC<PlayerItemProps> = ({ player }: PlayerItemProps) => {
  const { name, position, age, number, nationality } = player;
  return (
    <Card
      sx={{
        marginBottom: 2,
        textAlign: 'left',
        padding: 1,
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.4)', 
      }}
    >
      <CardContent>
        <Box
        >
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Position: {position}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Age: {age}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Number: {number}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Nationality: {nationality}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlayerItem;
