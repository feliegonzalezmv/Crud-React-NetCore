import React, { useState } from 'react';

import { Header } from './components/Header';
import { MasterForm } from './components/MasterForm';
import { Provider } from './components/context/appContext';
import './App.css';

function App() {
  const [isValid, setIsValid] = useState(false);

  return (
    <Provider value={{ isValid, setIsValid }}>
      <div className="App">
        <Header></Header>
        <MasterForm></MasterForm>
      </div>
    </Provider>
  );
}

export default App;
