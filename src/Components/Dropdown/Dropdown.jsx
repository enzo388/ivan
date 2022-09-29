import react, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '../Modal/Modal'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { changeTerm } from '../../App';



export default function DropdownInput({changeTermDropdown}) {

  const [dropdown, setDropdown] = useState(false);
  const [show, setShow] = useState(false)


  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown)
  }
  function handleClose() {
    openModal()
  }
  
  async function openModal() {
    show == true ? setShow(false) : setShow(true)
  }

  return (
    <>
      {show ? <Modal showClose={handleClose} /> : null}


      <br></br>

      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
        <DropdownToggle caret >
          Open Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={openModal} >
            Crear Cliente
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => changeTermDropdown('nombre')} >Nombre</DropdownItem>
          <DropdownItem onClick={() => changeTermDropdown('razon_social')} >Razon Social</DropdownItem>
          <DropdownItem onClick={() => changeTermDropdown('nit')}>Nit</DropdownItem>
          <DropdownItem onClick={() => changeTermDropdown('telefono')}>Telefono</DropdownItem>
          <DropdownItem onClick={() => changeTermDropdown('codigo')} >Codigo</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}


