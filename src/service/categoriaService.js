const API_URL = 'https://api.escuelajs.co/api/v1/categories/';

export async function obtenerCategorias() {
  const response = await fetch(API_URL);
  const categorias = await response.json();
  return categorias;
}

export async function eliminarCategoria(id) {
  await fetch(`${API_URL}${id}`, {
    method: 'DELETE'
  });
}
