import React from 'react';
import TeamList from '../components/TeamList';

const Home: React.FC = () => {
  return (
    <div style={{
      width: '100vw'
    }}>
      <h2 style={{
      width: '100vw',
      textAlign: 'center',
      color: 'black'
      
    }}>Teams</h2>
      <TeamList />
    </div>
  );
}

export default Home;