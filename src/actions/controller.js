/* import axios from "axios";
const URL = "https://back.implementaconbubo.com/v1/sales/customer/?simple=true"
const API = process.env.API


async function infoTuGerente() {
    try {
        
      //  const OPERATIONS = {"filter":{"category":[{"field":"reference_name","operator":"contains","ignoreCase":false,"value":"luis"},{"field":"nit","operator":"contains","ignoreCase":false,"value":"0"},{"field":"name","operator":"contains","ignoreCase":false,"value":"luis"},{"field":"reference_name","operator":"contains","ignoreCase":false,"value":"luis"}],"logic":"or"},"skip":0,"take":1111111}
 
      
      let info = await axios.get(URL, { headers: { APIKEY: API } })
      if (info.data.results.length > 0) {
          let aux =  info.data.results
          const infomapeada = await aux.map(e => {
              return {
                  id:e.tenant_id,
                  nombre:e.name,
                  empresa:e.business_name,
                  telefono:e.contact_phone,
                  email:e.contact_email,
                  pais:e.country,
                  ciudad:e.city,
                  direccion:e.address,
                  cumpleaños:e.birthdate,
                  categoria:e.category.name,
                  metodoDePago:e.payment_method,
                  metodoDeEntrega:e.delivery_time

              }
          })
          return infomapeada
        } 
    } catch (err) {
      console.log(err);
    }
  }
module.exports = { infoTuGerente }; */