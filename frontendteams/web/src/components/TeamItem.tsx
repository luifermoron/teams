import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import ITeam from '../lib/domain/entities/ITeam';
import { useNavigate } from 'react-router-dom';

type TeamItemProps = {
    team: ITeam
}

const TeamItem: React.FC<TeamItemProps> = ({team}: TeamItemProps) => {
   const { id, name, group, coach } = team;
   const navigate = useNavigate();

   const handleClick = () => {
     navigate(`/players/${id}`, {
       state: { name },
     });
   };
  return (
    <Card
      sx={{
        marginBottom: 2,
        padding: 2,
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.4)',
        cursor: 'pointer'
      }}
      className="clickable-card"
      onClick={handleClick}
    >
      <CardContent
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
      </CardContent>
    </Card>
  );
};

export default TeamItem;
