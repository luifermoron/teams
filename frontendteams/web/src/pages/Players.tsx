import React from 'react';
import { useParams } from 'react-router-dom';
import PlayerList from '../components/PlayerList';
import { useLocation } from 'react-router-dom';

const Players: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const location = useLocation();
  const { name } = location.state || {};
  return (
    <div style={{
      width: '100vw',
    
    }}>
      <h2 style={{
      width: '100vw',
      textAlign: 'center',
      color: 'black'
      
    }}>Players for Team: {name}</h2>
      <PlayerList  teamId={teamId!}/>
    </div>
  );
}

export default Players;