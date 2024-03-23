import React, { useState } from 'react';
import { crearCategoria } from '../services/categoriaService';

function CategoriaForm() {
  const [nuevaCategoria, setNuevaCategoria] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearCategoria({ name: nuevaCategoria });
    setNuevaCategoria('');
  };

  return (
    <div>
      <h2>Agregar Nueva Categoría</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nuevaCategoria} onChange={(e) => setNuevaCategoria(e.target.value)} />
        <button type="submit">Agregar Categoría</button>
      </form>
    </div>
  );
}

export default CategoriaForm;
