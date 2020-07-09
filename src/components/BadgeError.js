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
                <label   className="label-badge" for="Direccion">NO SE PUDO REALIZAR TÚ PEDÍDO</label>
                </div>

                <div className="form-group">
                <div className="h-divider" />
                </div>
                <label className="label-badge m-2" for="Direccion">IMPORTANTE: POR FAVOR CONTACTAR CON :</label>
            </div> 
        )
    }
}

export default BadgeError;