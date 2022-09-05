import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logoFooter from "../assets/logo-footer-negro.png"
import iconosFooter from "../assets/img__vectores/Vector.png"
import iconosFooter2 from "../assets/img__vectores/Vector_w.png"
function Footer() {
    return(
    <footer>
         {/* Footer Desktop */}
        <div class="container-fluid">
            <div class="row p-3 pb-1 bg-black text-white">
                <div class="col-xs-12 col-md-6 col-lg-3">
                <div class="h3">

                    <img src={logoFooter} width="200" alt="logo negro" />
                </div>
                </div>


                <div class="col-xs-12 col-md-6 col-lg-3">
                <p class="h5 mb-2 text-white">Productos</p>
                    <div class="mb-2">
                        <a class="text-white text-decoration-none" href="">Jeans</a>
                    </div>
                    <div class="mb-2">
                        <a class="text-white text-decoration-none" href="">Shorts</a>
                    </div>
                    <div class="mb-2">
                        <a class="text-white text-decoration-none" href="">Camperas</a>
                    </div>
                    <div class="mb-2">
                        <a class="text-white text-decoration-none" href="">Ofertas</a>
                    </div>
                </div>


                <div class="col-xs-12 col-md-6 col-lg-3">
                <p class="h5 mb-2 text-white">Contacto</p>
                        <div class=" mb-2 text-white"> <img src={iconosFooter} alt="ubicacion" /> Av. San Martín 1587, CABA,</div>
                        <div class=" mb-2 text-white"> <img src={iconosFooter2} alt="whatsapp" /> (+54) 9 11-5674-1599</div>
                </div>


                <div class="col-xs-12 col-md-6 col-lg-3">
                <p class="h5 text-white">Nuestras Redes</p>
                <div class="mb-2">
                    <a class="text-white text-decoration-none" href="">Facebook</a>
                </div>
                    <div class="mb-2">
                    </div>
                <div class="mb-2">
                    <a class="text-white text-decoration-none" href="">Instagram</a>
                </div>
                    <div class="mb-2">
                    </div>
                <div class="mb-2">
                    <a class="text-white text-decoration-none" href="">Twitter</a>
                </div>
                    <div class="mb-2">
                    </div>
                <div class="mb-2">
                    <a class="text-white text-decoration-none" href="">Snapchat</a>
                </div>
                </div>
                <div class="text-center pt-3 col-xs-12">
                © Loana Jeans 2020 - 2022 . Todos los derechos reservados.
                </div>
            </div>
        </div>
        
        <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" 
        crossorigin="anonymous">
        </script>     
        {/* Footer Desktop */}    
        {/* Footer Mobile ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}    
        <div class="container-fluid">
            <div class="row p-3 pb-1 bg-black text-white">
                <div class="col-xs-12 col-md-6 col-lg-3">
                <div class="h3">
                </div>
                </div>


                <div class="col-xs-12 col-md-6 col-lg-3">
                <p class="h5 mb-2 text-white">Contacto</p>
                        <div class=" mb-2 text-white"> <img src={iconosFooter} alt="ubicacion" /> Av. San Martín 1587, CABA,</div>
                        <div class=" mb-2 text-white"> <img src={iconosFooter2} alt="whatsapp" /> (+54) 9 11-5674-1599</div>
                </div>


                <div class="col-xs-12 col-md-6 col-lg-3">
                <p class="h5 text-white">Nuestras Redes</p>
                <div class="mb-2">
                    <a class="text-white text-decoration-none" href="">Facebook</a>
                </div>
                    <div class="mb-2">
                    </div>
                <div class="mb-2">
                    <a class="text-white text-decoration-none" href="">Instagram</a>
                </div>
                    <div class="mb-2">
                    </div>
                <div class="mb-2">
                    <a class="text-white text-decoration-none" href="">Twitter</a>
                </div>
                    <div class="mb-2">
                    </div>
                <div class="mb-2">
                    <a class="text-white text-decoration-none" href="">Snapchat</a>
                </div>
                </div>
                <div class="text-center pt-3 col-xs-12">
                © Loana Jeans 2020 - 2022 . Todos los derechos reservados.
                </div>
            </div>
        </div>
        
        <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" 
        crossorigin="anonymous">
        </script>   

    </footer>
    );
}

export default Footer;