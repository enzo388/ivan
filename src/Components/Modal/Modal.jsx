import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { FcCheckmark } from "react-icons/fc"
import { createClient } from "../../Utils/CreateClient"


export default function Example(showClose) {
  const [show, setShow] = useState(true);
  // const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false)

  const [input, setInput] = useState({
    nombre: '',
    razon_social: '',
    nit: '',
    telefono: '',
    codigo: '',

  })
  const [errors, setErrors] = useState({
    nombre: '',
    razon_social: '',
    nit: '',
    telefono: '',
    codigo: '',
  })

  function validate(input) {

    let errors = {}
    input.nombre
      ? (errors.nombre = "")
      : (errors.nombre) = "Your CLIENT needs a name!"

    input.razon_social
      ? (errors.razon_social = "")
      : (errors.razon_social = "Your client needs a description!")

    input.nit
      ? (errors.nit = "")
      : (errors.nit = "Your client need a release date")
    input.telefono
      ? (errors.telefono = "")
      : (errors.telefono = "Your client need a rating")

    input.codigo
      ? (errors.codigo = "")
      : (errors.codigo = "Your client need a image!")
    return errors
  }

  function handleClose() {
    setShow(false)
  }

  function handleChange(e) {
    // e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setShow(true)
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await createClient(input)
    setLoading(false)
    handleClose(false)
  }

  const optionsInput = [
    {
      name: 'Nombre',
      id: 'nombre'
    },
    {
      name: 'Razón Social',
      id: 'razon_social'
    },
    {
      name: 'NIT',
      id: 'nit'
    },
    {
      name: 'Teléfono',
      id: 'telefono'
    },
    {
      name: 'Código',
      id: 'codigo'
    }
  ]

  return (
    <>

      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose} >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre: </Form.Label>
            <Form.Control
              type="nombre"
              id="nombre"
              name="nombre"
              value={input.nombre}
              onChange={(e) => handleChange(e)}
              required
            />
            {!errors.nombre && (<FcCheckmark />)}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Razon Social: </Form.Label>
            <Form.Control
              type="razon_social"
              id="razon_social"
              name="razon_social"
              value={input.razon_social}
              onChange={(e) => handleChange(e)}
              required
            />
            {!errors.razon_social && (<FcCheckmark />)}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nit: </Form.Label>
            <Form.Control
              type="nit"
              id="nit"
              name="nit"
              value={input.nit}
              onChange={(e) => handleChange(e)}
              required
            />
            {!errors.nit && (<FcCheckmark />)}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefono: </Form.Label>
            <Form.Control
              type="telefono"
              id="telefono"
              name="telefono"
              value={input.telefono}
              onChange={(e) => handleChange(e)}
              required
            />
            {!errors.telefono && (<FcCheckmark />)}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Codigo: </Form.Label>
            <Form.Control
              type="codigo"
              id="codigo"
              name="codigo"
              value={input.codigo}
              onChange={(e) => handleChange(e)}
              required
            />
            {!errors.codigo && (<FcCheckmark />)}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Crear
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

