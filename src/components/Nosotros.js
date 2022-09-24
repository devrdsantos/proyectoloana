import React from "react";
import "../styles/nosotros.css"


function Nosotros() {
    return (
        <section class="about">
        <div class="container flex items-centre">

        <div class="left flex-1 justify-right">

            <img src="/img/logo-footer-negro.png" height="400px" alt="profile pic" />

        </div>

        <div class="right flex-1">

        <h1 class="sobre-h1">Sobre <span class="sobreSspan">Nosotros</span></h1>
        
        <p class="textoSobreNosotros">
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci distinctio obcaecati aliquid,
        quia tempora quis optio repudiandae officia earum?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.

        </p>

        <div class="socials">

            <a href="#"><img src="img/instagram.png" width="40px" /></a>
            <a href="#"><img src="img/tw.png" width="40px" /></a>
            <a href="#"><img src="img/facebook.png" width="40px" /></a>

        </div>
        </div>
        </div>
        </section>
    );
}

export default Nosotros;