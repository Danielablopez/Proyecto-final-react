import * as React from "react";
import { Link } from "react-router-dom";
import Formulario from "./Form";

function Portada () {
    
    return (
        <>
        
            <h1>Seguros del hogar</h1>
            <Formulario/>
            <Link to={"historial"}>
                <button className="btn btn-dark">
                    Historial
                </button>
            </Link>
        </>
    )
}

export default Portada