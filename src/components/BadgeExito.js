import React from 'react';
import chek from './images/chek.png';
import "./styles/style.css";

class BadgeExito extends React.Component
{
    render (){
        return(
            <div className="m-4">
                <div className="m-5">
                <div className="m-5 animated pulse">
                <img src={chek} className="w-100" alt="" />
                </div>
                </div>
                <div class="h-divider" />
                <label   className="label-badge pedido" for="Direccion">PEDÍDO REALIZADO CON ÉXITO</label>
            </div>
            
        )
    }
}

export default BadgeExito;