import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useProduct } from "../../hooks";
import { ListProducts } from "../../components/Client";

/**
 * Componente funcional para mostrar los productos de una categoría.
 */
export function Products() {
  // Obtiene los parámetros de la URL usando el hook useParams de react-router-dom.
  const { tableNumber, idCategory } = useParams();

  // Obtiene los productos y otras variables relacionadas utilizando el hook personalizado useProduct.
  const { loading, products, getProductsByCategory } = useProduct();

  // Utiliza el hook useEffect para ejecutar la función getProductsByCategory
  // cuando el id de la categoría cambia.
  useEffect(() => {
    getProductsByCategory(idCategory);
  }, [idCategory]);

  // Renderiza el componente de productos y un enlace para volver a las categorías.
  return (
    <div>
      <Link to={`/client/${tableNumber}`}>Volver a categorias</Link>

      {loading ? <p>Cargando...</p> : <ListProducts products={products} />}
    </div>
  );
}

