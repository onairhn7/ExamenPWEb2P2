import React from 'react';
import './App.css';
import CategoriaList from './components/CategoriaList';
import CategoriaForm from './components/CategoriaForm';

function App() {
  return (
    <div className="App">
      <h1>Gestión de Categorías</h1>
      <CategoriaList />
      <CategoriaForm />
    </div>
  );
}

export default App;

