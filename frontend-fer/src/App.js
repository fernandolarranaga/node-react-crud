import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateBlazon from './components/CreateBlazon';
import Navigation from './components/Navigation';
import BlazonDetail from './components/BlazonDetail';
import NotesList from './components/NotesList';


import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Route exact path="/blazons" component={CreateBlazon}/>
      <Route exact path="/blazons/:id" component={BlazonDetail}/>
      <Route exact path="/notes" component={NotesList}/>
    </BrowserRouter> 

  );
}

export default App;
