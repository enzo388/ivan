/* import { collection, doc, setDoc } from "firebase/firestore";
import db  from "../ConfigFirebase/ConfigFirebase";

//creamos cliente con los values del formulario y con los metodos de firebase.
export const createClient = async (value) => {

  const newClient = doc(collection(db, "clientes"));

  await setDoc(newClient, value);

} */