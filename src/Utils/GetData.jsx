/* import { collection, getDocs, query, where, limit, startAfter, orderBy ,doc, getDoc} from "firebase/firestore";
import  db  from '../ConfigFirebase/ConfigFirebase';
import axios from 'axios'
import React, { useState, useEffect } from 'react';


export async function getData() {
    try {
        const getClients = await getDocs(collection(db, 'clientes'))
        const docs = []
        getClients.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
        })
        return docs

    } catch (error) {
        console.log(error)
    }

}
    // tare todo de firebase
    // setLista((tiene) => [...previous, ...cl]);

    export async function searchLimit(){

        const updateState = async (response) => {
            const vaciClient = response.size === 0
            if (!vaciClient) {
                const cl = response.docs.map((doc) => ({
                    data: doc.data(),
                    id: doc.id,
                }));
                const documentSnapshots = await getDocs()
                const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1]
                return lastVisible
            } else {
               console.log('vacio')
            }
        };


        function getResults() {
            const clientCollectionn = collection(db, "clientes");
            const refQuery = query(clientCollectionn, limit(5) , orderBy("codigo"));
            
            const result =  getDocs(refQuery)
                .then((response) => updateState(response))
                .catch((error) => console.log(error));
           return result
                
        }
        const result =  getResults()
        return result
    }

    export async function requestInfo (){



    }

export async function traermas(list){
   
    const clientCollectionn = collection(db, "clientes")
    const refQuery = query(clientCollectionn, limit(5) , orderBy("codigo"), startAfter(list));
    getDocs(refQuery).then((res)=>{

        searchLimit.updateState(res)
    })
    console.log('ultima info',refQuery)
    return refQuery
    
}


// Query the first page of docs

// export async function prueba2(){
//     const first = query(collection(db, "clientes"), orderBy("codigo"), limit(5));
//     const documentSnapshots = await getDocs(first);

//     // Get the last visible document
//     const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
//     console.log("last", lastVisible);
    
//     const next = query(collection(db, "cities"),
//         orderBy("population"),
//         startAfter(lastVisible),
//         limit(5));
//     } */