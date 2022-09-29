import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import DropdownExample from './components/dropdown';

function App() {
  return (
    <Switch>
      <Route path="*" component={DropdownExample} />
    </Switch>
  );
}

export default App;
