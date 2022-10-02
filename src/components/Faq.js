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
        <h3>          CÓMO DEVOLVER
Dispones de 30 días desde la fecha de envío de tu pedido para devolver la compra de LoanaJeans.com.ar  Los artículos deben conservar todas las etiquetas y estar en perfecto estado.

Estas son las opciones para devolver tu mercancía:


Tienda LoanaJeans
Puedes devolver tu pedido de forma gratuita en cualquier tienda LoanaJeans.com.ar del país/región donde realizaste la compra.

Solo tendrás que presentar los artículos que quieras devolver junto con el ticket de compra. Puedes llevarlo en tu móvil o impreso.

Recuerda que para la devolución en tienda no es necesario realizar una solicitud en la web/APP.

Ten en cuenta que si no puedes acudir a la tienda, la persona que tú elijas podrá hacerlo en tu lugar.

¿Cómo puedes acceder a tu ticket de compra?

Inicia sesión con tu usuario y contraseña. En el detalle del pedido que quieras devolver, tendrás la opción de acceder a tu ticket electrónico.

Encuentra aquí tu tienda más cercana.


Desde domicilio
Las devoluciones tienen un coste de 490,00 ARS, que se descontará del importe reembolsado.

Podrás solicitar la devolución desde el apartado Devoluciones. Puedes devolver artículos de diferentes pedidos en el mismo envío.Un transportista recogerá tu paquete en la dirección que elijas en 24-72 horas.

Recuerda que tienes que enviar los artículos que quieras devolver en el plazo de 30 días desde la fecha de envío de tu compra, antes de que expire el plazo de devolución.


Punto de entrega
Puedes devolver tu pedido de forma gratuita a través de un punto de entrega en el mismo país/región donde realizaste la compra.

Podrás solicitar la devolución desde el apartado Devoluciones.

Puedes devolver artículos de diferentes pedidos en el mismo envío. Recibirás en tu email tantas etiquetas de devolución como cajas vayas a enviar. Para realizar el envío, pega la etiqueta en el paquete devolución y podrás entregarlo en cualquier oficina de Correo Argentino. Por favor, selecciona la opción "recep. Paquetería e-commerce nacionales" para encontrar tu oficina más cercana.

Recuerda que tienes que depositar los artículos a devolver en el punto de entrega en el plazo de 30 días desde la fecha de envío de tu compra, antes de que expire el plazo de devolución.

Puedes encontrar más información acerca de la Política de Cambios y Devoluciones o del derecho de desistimiento en nuestras Condiciones de compra.</h3>

    <h3>
    CÓMO CAMBIAR

Dispones de 30 días desde la fecha de envío para realizar un cambio de tu compra de LoanaJeans.com.ar de manera gratuita.  Los artículos deben conservar todas las etiquetas y estar en perfecto estado.

Puedes cambiar la talla o color de tus artículos. Acércate a una tienda LoanaJeans.com.ar que tenga la misma sección a la que pertenece el artículo con el ticket de compra. Puedes llevarlo en tu móvil o impreso.

Si prefieres un cambio por otra prenda diferente se gestionará una devolución y una nueva compra.

Recuerda que para realizar un cambio en tienda no es necesario realizar una solicitud en la web/APP.

Puedes encontrar más información acerca de la Política de Cambios y Devoluciones o al derecho de desistimiento en nuestras Condiciones de compra.

    </h3>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            {/* <ion-icon name="cash-outline"></ion-icon> */}
            <h2 className="subtitle-faq">Pagos</h2>
          </Accordion.Header>
          <Accordion.Body>
<h3>
MÉTODOS DE PAGO
Disponemos de los siguientes medios de pago:

1. Visa
2. Mastercard
3. American Express
4. Diners Club
5. Cabal
- Para el pago con Tarjeta Regalo puedes obtener más información en la sección Tarjeta Regalo.
</h3>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            {/* <ion-icon name="gift-outline"></ion-icon> */}
            <h2 className="subtitle-faq">Productos</h2>
          </Accordion.Header>
          <Accordion.Body>
            <h3>
              En LoanaJeans.com.ar podrás encontrar novedades cada semana, igual que en nuestras tiendas.

    Si el artículo que te interesa está agotado pero tiene el símbolo  comming soon , puedes registrar tu email y te avisaremos siempre que vuelva a estar disponible en los 15 días posteriores a tu registro. Este proceso no equivale a una reserva.
Además, a través de LoanaJeans.com.ar podrás acceder al stock de nuestras tiendas gracias a la opción “Ver disponibilidad en tienda”.</h3>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            {/* <ion-icon name="card-outline"></ion-icon> */}
            <h2 className="subtitle-faq">Tarjeta de regalos</h2>
          </Accordion.Header>
          <Accordion.Body>
          COMPRAR TARJETA REGALO
La Tarjeta Regalo de Loana es una tarjeta virtual que se envía por email. Con ella podrás comprar en tienda física o en LoanaJeans.com.ar

Información útil sobre la Tarjeta Regalo: 
Solamente es válida para el país/región en el que la has comprado.
Es un documento al portador. LoanaJeans no reemplazará la Tarjeta en caso de robo, pérdida, extravío o deterioro.
Tiene un período de validez determinado según país/región. Podrás ver esta información en el momento que elijas tu Tarjeta.
Puedes consultar el saldo de tu Tarjeta desde la web de LoanaJeans.com.ar, en el apartado "Tarjeta Regalo,   Consultar Saldo", o directamente en una de nuestras tiendas LoanaJeans.
El plazo para devolverla es el mismo que para cualquier otro artículo siempre y cuando la Tarjeta no haya sido usada. El reembolso se hará al método de pago original utilizado para la compra. Si la devolución se hace vía LoanaJeans.com.ar no es necesario enviarnos la Tarjeta físicamente.

          </Accordion.Body>
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
