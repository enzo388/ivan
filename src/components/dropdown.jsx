
import React from 'react';
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import InfoCard from '../components/card'
import "../components/dropdown.css";
import InfiniteScroll from 'react-infinite-scroll-component';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
export default function DropdownExample() {


    const [input, setinput] = useState("")
    const [input2, setinput2] = useState([])
    const [items, setItems] = useState([])
    const [page, setpage] = useState(2);
    const [hasMore, sethasMore] = useState(true);
 
   

    const getClients = async () => {
        const res = await fetch(`http://localhost:3004/clients?_page=1&_limit=20`)
        const data = await res.json()
        setItems(data)
    }

    useEffect(async () => {

        await getClients()



    }, [])



    const fetchComments = async () => {
        const res = await fetch(
            `http://localhost:3004/clients?_page=${page}&_limit=20`

        );
        const data = await res.json();
        return data;
    };

    const fetchData = async () => {
        const commentsFormServer = await fetchComments();

        setItems([...items, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 1) {
            sethasMore(false);
        }
        setpage(page + 1);
    };




    const handleInputFilter = async (e) => {
        const atributo = e.target.name
        const valor = e.target.value
        if (e.target.value && e.target.value.length > 0) {
            const res = await fetch(`http://localhost:3004/clients?${e.target.name.toLowerCase().trim()}=${valor.toLowerCase()}`);
            const data = await res.json();
            setItems(data)
        } else {
            
            const res = await fetch(`http://localhost:3004/clients?_page=1&_limit=20`)
            const data = await res.json()
            setItems(data)
            sethasMore(true);
            setpage(2)
        }


    }

  


    

    const handleSubmit = () => {

        if (input) {
            setinput2([...input2, input])
            setinput("")
            
        }
    }

    const handleInputChange = (e) => {
        
        setinput(e.target.value); 
    }

    function Example() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);


        const handleShow = () => setShow(true);

      

        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                    
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>AGREGE EL NOMBRE DEL ATRIBUTO QUE DESEA FILTRAR EJEMPLO : PAIS</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                      <Form.Control type="text" onChange={handleInputChange} />
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }





    return (
        <div className="Cointainer">
            <div className='dropDown'>

                <Dropdown autoClose="outside">
                
                    <Dropdown.Toggle autoClose="outside" id="dropdown-basic">
                        Filtros
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu autoClose="outside" >
                        <input 
                        type={"text"}
                        onChange={handleInputChange}
                        placeholder={"Nombre de Filtro"}
                        >
                        
                        </input>

                        <Dropdown.Item autoClose="outside" onClick={handleSubmit} >
                           <h5>AGREGAR FILTRO</h5>

                        </Dropdown.Item>
                        

                        <div className="mapCardInfo">

                            {
                                input2.length ?

                                    input2.map(e => {
                                        return (

                                            <input
                                                name={e.toLowerCase()}
                                                type="text"

                                                placeholder={e}
                                                onChange={handleInputFilter}
                                            >
                                                
                                            </input>


                                        )


                                    }
                                    ) : ""

                            }
                        </div>




                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                className="tableLis2"
            >
                <div className="tableList">

                    {
                        items.length > 0 ?
                            items.map(e => {
                                return (
                                    <InfoCard key={e.id}
                                        nombre={e.nombre}
                                        empresa={e.empresa}
                                        telefono={e.telefono}
                                        email={e.email}
                                        pais={e.pais}
                                        ciudad={e.ciudad}
                                        direccion={e.direccion}
                                        cumpleaños={e.cumpleaños}
                                        categoria="null"
                                        metodoDePago={e.metododepago}
                                        metodoDeEntrega={e.metododeentrega}

                                    />
                                )
                            }) : ""

                    }

                </div>
            </InfiniteScroll>

        </div>
    );
}


