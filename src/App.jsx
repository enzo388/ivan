import React, { useState} from 'react';
import './App.css';
import Dropdown from './Components/Dropdown/Dropdown'
import Search from './Components/Search/Search';




function App() {
 
  const [term, setTerm] = useState('nombre')


  function changeTermDropdown(term) {
    setTerm(term)
    return term
  }

  return (
    <div className="App">
      <Dropdown changeTermDropdown={changeTermDropdown} />
      <Search changeTermDropdown={changeTermDropdown} term={term}/>
    </div>
  );
}

export default App;
