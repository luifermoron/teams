import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Players from './pages/Players';
import Explore from './pages/Explore';
import { Provider } from 'react-redux';
import { store } from './lib/infrastructure/redux';

const App: React.FC = () => {
  return (
    <>
    <Provider store={store}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players/:teamId" element={<Players />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
    </Provider>
    </>
  );
}

export default App;
