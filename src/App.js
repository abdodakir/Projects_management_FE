import React from 'react';
import './App.css';
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';

function App() {
  return (
    // <Provider store={"store"}>
       <BrowserRouter >
        <div>
          <Main />
        </div>
      </BrowserRouter>
    //</Provider>
  );
}

export default App;
