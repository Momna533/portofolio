import React from "react";
import { HashLink } from "react-router-hash-link";
import { Element } from "react-scroll";

function Jumbotron(){
    return(
        <>
        <Element name="home" data-scroll-to>
             <div className="jumbotron" id="home" >
            <div className="jumbotron_content">
            <div className="underline"></div>
                <h1>I'm Momna Ijaz</h1>
                    <h4>Freelence web and mobile developer</h4>
                    <HashLink to="/#contact" className="jumbotron_btn">Contact me</HashLink>
            </div>
        </div>
        </Element>
       
        </>
    )
}

export default Jumbotron;