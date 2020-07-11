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
                
                <div className="form-group">
                <div className="h-divider" />
                </div>
                
                <div className="text-center" >
                <label className="label-badge" for="Direccion">PEDIDO REALIZADO CON ÉXITO</label>
                </div>
                
                <div className="form-group">
                <div className="h-divider" />
                
                <div className="text-center m-2">
                <label className="label-badge" for="Direccion">En minutos se confirmará su pedido</label>
                </div>

                </div>
                
            </div> 
        )
    }
}

export default BadgeExito;