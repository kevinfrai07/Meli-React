import './App.css';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items';
import Item from './components/Item';
import { Fragment } from 'react';
import './assets/Logo_ML.png';

function App() {
  return (
    
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="*" element={<Home/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/items/:search" element={<Items/>}/>
          <Route exact path="/item/:id" element={<Item/>}/>
        </Routes>
      </Router>
    </Fragment>
  

  );
}

export default App;
