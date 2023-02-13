//import './App.css';
import React from 'react'

import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App(props) {

  //*****Componentes */
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
