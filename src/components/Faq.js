import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../styles/faq.css";
// importar estilos desde app.css

function Faq() {
  return (
    <div className="main">
      <h1 className="title-faq">Preguntas Frecuentes</h1>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {/* <ion-icon name="bag-handle-outline"></ion-icon> */}
            <h2 className="subtitle-faq">Comprar en LoanaJeans.com.ar</h2>
          </Accordion.Header>
          <Accordion.Body>
          <h3> Tras finalizar tu compra, te enviaremos un email de confirmación con el detalle de la misma.
Te recordamos que no será posible cancelar o modificar tu pedido si ya se encuentra en un estado avanzado de preparación.</h3>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            {/* <ion-icon name="car-outline"></ion-icon> */}
            <h2 className="subtitle-faq">Envios y Estado del pedido</h2>
          </Accordion.Header>
          <Accordion.Body>
          Recibirás actualizaciones del estado de tu pedido por email.

También puedes acceder a esta información a través del apartado Compras. 

Estos son los estados por los que pasará tu pedido:

Comprado: has finalizado correctamente la compra de tu pedido.

En curso: hemos recibido la información de tu compra.

En preparación: tu pedido está siendo preparado en el almacén.

Enviado: el pedido ya ha salido de nuestras instalaciones.

Recogido por transportista: tu pedido está en camino, lo recibirás próximamente.

Entregado a cliente: ya has recibido tu pedido.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            {/* <ion-icon name="refresh-outline"></ion-icon> */}
            <h2 className="subtitle-faq">Cambios y Devoluciones</h2>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            {/* <ion-icon name="cash-outline"></ion-icon> */}
            <h2 className="subtitle-faq">Pagos</h2>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            {/* <ion-icon name="gift-outline"></ion-icon> */}
            <h2 className="subtitle-faq">Productos</h2>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            {/* <ion-icon name="card-outline"></ion-icon> */}
            <h2 className="subtitle-faq">Tarjeta de regalos</h2>
          </Accordion.Header>
          <Accordion.Body>Lorem</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            {/* <ion-icon name="storefront-outline"></ion-icon> */}
            <h2 className="subtitle-faq">Tienda y Empresa</h2>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            {/* <ion-icon name="bookmark-outline"></ion-icon> */}
            <h2 className="subtitle-faq">Compra Segura</h2>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            {/* <ion-icon name="call-outline"></ion-icon> */}
            <h2 className="subtitle-faq">
              Como ponerte en Contacto con Nuestras Tiendas
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faq;
