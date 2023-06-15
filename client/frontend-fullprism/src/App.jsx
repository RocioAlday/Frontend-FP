import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path= "/" element= {<Layout />} >
         <Route path='/home' element= {<Home />} />
        </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
