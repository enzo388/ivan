
import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import "../components/card.css";


export default function InfoCard({ id, empresa, telefono, nombre, email, metodoDeEntrega, pais, ciudad, direccion, cumpleaños, categoria, metodoDePago }) {
   
    return (
        <div>
            {

                <Card className="cardCointainer">

                    <img className="img" src='https://earncashto.com/wp-content/uploads/2021/06/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png' />

                        <div >
                            <Card.Title  className="infoCard">Nombre : {nombre}</Card.Title>
                            <div className="infoCard2">
                            
                            <ul>
                                Empresa: {empresa}
                            </ul>
                            <ul>
                                Teléfono: {telefono}
                            </ul>
                            <ul>
                                Email: {email}
                            </ul>
                            <ul>
                                País: {pais}
                            </ul>
                            <ul>
                                Ciudad: {ciudad}
                            </ul>
                            <ul>
                                Dirección: {direccion}
                            </ul>
                            <ul>
                                Cumpleaños: {cumpleaños}
                            </ul>
                            
                            <ul>
                                Método De Pago: {metodoDePago}
                            </ul>
                            <ul>
                                Método de Entrega: {metodoDeEntrega}
                            </ul>
                            </div>
                            
                        </div>


                    
                </Card>


            }

        </div>

    )
}  