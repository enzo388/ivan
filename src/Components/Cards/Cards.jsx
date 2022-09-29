import React, { useState } from 'react';

export default function Card({ nombre,razon_social,nit,telefono,codigo }){
    return (
        <div >
            
            <div >
                <h3 >Nombre: {nombre ? nombre : <p>Loading..</p>}</h3>
                <h5 >Razon Social:{razon_social ? razon_social : <p>Loading..</p>}</h5>
                <h5 >Nit:{nit ? nit : <p>Loading..</p>}</h5>
                <h5 >Telefono:{telefono ? telefono : <p>Loading..</p>}</h5>
                <h5 >Codigo:{codigo ? codigo : <p>Loading..</p>}</h5>
                
            </div>
        </div>
    )
}