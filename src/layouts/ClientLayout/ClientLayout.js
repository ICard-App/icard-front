import React, { useEffect } from "react";
import { Container, Button, Icon } from "semantic-ui-react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useTable } from "../../hooks";
import "./ClientLayout.scss";

export function ClientLayout(props) {
  const { children } = props;
  // Obtener el estado y la función para verificar la existencia de la mesa desde el hook useTable
  const { isExistTable } = useTable();
  const { tableNumber } = useParams();
  const history = useHistory();
  
  // Función de efecto que se ejecuta cuando cambia el número de mesa
  useEffect(() => {
    (async () => {
      // Verificar la existencia de la mesa asincrónicamente
      const exist = await isExistTable(tableNumber);
      if (!exist) closeTable(); // Cerrar la mesa si no existe
    })();
  }, [tableNumber]);
  
// Función para cerrar la mesa y redireccionar a la página principal
  const closeTable = () => {
    history.push("/");
  };


  return (
    <div className="client-layout-bg">
      <Container className="client-layout">
        <div className="client-layout__header">
          <Link to={`/client/${tableNumber}`}>
            <h1>iCard</h1>
          </Link>
          <span>Mesa {tableNumber}</span>
        </div>

        <div className="client-layout__content">{children}</div>
      </Container>
    </div>
  );
}
