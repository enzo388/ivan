import react, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getData } from '../../Utils/GetData'
import Cards from '../Cards/Cards'
import { searchLimit ,  traermas} from '../../Utils/GetData'
import { collection, getDocs, query, where, limit, startAfter, orderBy ,doc, getDoc,onSnapshot} from "firebase/firestore";

import { Label } from 'reactstrap';




function Search({ changeTermDropdown, term }) {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [list, setList] = useState([])
  const [listaaa, setListaaa] = useState([])

 async function updateDate(){
  const update = await traermas();
  console.log('LLEGUE AL FINAL')
  setData(update)

  }



  async function prueba() {
    const result = await searchLimit()
    setData(result)
    setList(result)
    console.log('result', result)
    console.log(data)
  }

  async function getClients() {
    const getFilteredData = await getData()

    return setData(getFilteredData)
  }


  useEffect(() => {
    
    // if (data?.length === 0) {
    //   getClients()
    //   return console.log('data adquirida')
    // }
    // else if (data?.length < 0) {
    //   return console.log('Bienvenido a mi app :D')
    // }
  }, [data])
  console.log('data', data)

  return (

    <div className="App">
      <button onClick={() => prueba()}>ACAAA

      </button>
      <input type="text" placeholder='Filter..'
        onChange={event => { setSearchTerm(event.target.value) }} />
        
    <InfiniteScroll dataLength={data.length}
              next={updateDate}
              hasMore={true}>
      {data ?
        data.filter((val) => {
          if (searchTerm === "") {
            return val
          } else if (val?.[term].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val
          }
        }).map(element => {
          return (

            

              <Cards
                nombre={element.nombre ? element.nombre : <p>-</p>}
                razon_social={element.razon_social ? element.razon_social : <p>-</p>}
                nit={element.nit ? element.nit : <p>-</p>}
                telefono={element.telefono ? element.telefono : <p>-</p>}
                codigo={element.codigo ? element.codigo : <p>-</p>}
                key={element.id}
                e={element}>
              </Cards>

            )

        }

        ) : <p>Loading...</p>}
        </InfiniteScroll>

    </div>


  );
}

export default Search;