import React from "react";
import "../styles/nosotros.css"

import facebook2 from "../assets/facebook2.png"
import instagram2 from "../assets/instagram.png"
import twiter from "../assets/tw.png"

function Nosotros() {
    return (

<section className="about">
    <div className="container flex items-centre">
        <div className="left flex-1 justify-right">
            <img src="/img/logo-footer-negro.png" height="400px" alt="profile pic" />
        </div>
    <div className="right flex-1">
        <h1 className="sobre-h1">Sobre <span class="sobreSspan">Nosotros</span></h1>        
            <p className="textoSobreNosotros">            
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci distinctio obcaecati aliquid,
    quia tempora quis optio repudiandae officia earum?
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
        <div className="socials">
            <span className="enlaces-nosotros" href="#">
            <img src={instagram2} width="40px" alt="" />
            </span>

            <span className="enlaces-nosotros" href="#">
            <img src={twiter} width="40px" alt=""/>
            </span>

            <span className="enlaces-nosotros" href="#">
            <img src={facebook2} width="40px" alt="" />
            </span>
        </div>
    </div>
    </div>
</section>
    );
}

export default Nosotros;