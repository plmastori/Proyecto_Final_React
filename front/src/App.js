import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './components/home';
import Nosotros from './components/nosotros';
import Servicios from './components/servicios';
import Destinos from './components/destinos';
import Contacto from './components/contacto';
import NavBarProyecto from './layouts/navbar';
import Footer from './layouts/footer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarProyecto />}>
            <Route index element={<Home />}/>
              <Route path='nosotros' element={<Nosotros />}/>
                <Route path='servicios' element={<Servicios />}/>
                  <Route path='destinos' element={<Destinos />}/>
                    <Route path='contacto' element={<Contacto />}/>

                      <Route path='*' element={<Navigate replace to="/" />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
                <Footer/>
              </div>
              );
}

              export default App;
