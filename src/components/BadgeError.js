import React from 'react';
import err from './images/error.png';
import "./styles/style.css";

class BadgeError extends React.Component
{
    render (){
        return(
            <div className="m-4">
                <div className="m-5">
                <div className="m-5 animated pulse">
                <img src={err} className="w-100" alt="" />
                </div>
                </div>
                
                <div className="form-group">
                <div className="h-divider" />
                </div>
                
                <div className="text-center" >
                <label   className="label-badge" for="Direccion">NO SE PUDO REALIZAR TÚ PEDIDO</label>
                </div>

                <div className="form-group">
                <div className="h-divider" />
                </div>
                
                <div class="alert alert-danger" role="alert">
                IMPORTANTE: POR FAVOR CONTACTAR CON: 
                <h2>+5491166782051</h2>
                </div>

            </div> 
        )
    }
}

export default BadgeError;