import React, { useState, useEffect } from 'react';
import { obtenerCategorias, eliminarCategoria } from '../services/categoriaService';

function CategoriaList() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = async () => {
    const categoriasObtenidas = await obtenerCategorias();
    setCategorias(categoriasObtenidas);
  };

  const handleDelete = async (id) => {
    await eliminarCategoria(id);
    cargarCategorias();
  };

  return (
    <div>
      <h2>Lista de Categorías</h2>
      <ul>
        {categorias.map(categoria => (
          <li key={categoria.id}>
            {categoria.name}
            <button onClick={() => handleDelete(categoria.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriaList;
