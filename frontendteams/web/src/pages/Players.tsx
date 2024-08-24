import React from 'react';
import { useParams } from 'react-router-dom';
import PlayerList from '../components/PlayerList';

const Players: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();

  return (
    <div style={{
      width: '100vw',
    
    }}>
      <h2 style={{
      width: '100vw',
      textAlign: 'center',
      color: 'black'
      
    }}>Players for Team {teamId}</h2>
      <PlayerList  teamId={teamId!}/>
    </div>
  );
}

export default Players;