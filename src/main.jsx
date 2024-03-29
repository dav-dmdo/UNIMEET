import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Home} from "./pages/Home/Home.jsx"
import {Categorias} from "./pages/Categorias/Categorias.jsx"
import {Agrupaciones} from "./pages/Agrupaciones/Agrupaciones.jsx"
import { ListadoAgrupaciones } from './pages/ListadoAgrupaciones/ListadoAgrupaciones.jsx';
import {QuienesSomos} from "./pages/QuienesSomos/QuienesSomos.jsx"
import {IniciarSesion} from "./pages/IniciarSesion/IniciarSesion.jsx"
import {Layout} from "./pages/Layout/Layout.jsx"
import Agrupacion from "./pages/Agrupacion/Agrupacion.jsx"
import './index.css'
import UserPage from './pages/UserPage/UserPage.jsx';
import User from './pages/User/User.jsx';
import EliminarCategoria from './pages/EliminarCategoria/EliminarCategoria.jsx';
import AgregarCategoria from './pages/AgregarCategoria/AgregarCategoria.jsx';




import { UserProvider } from "./context/UserContext.jsx";
import { Paypal } from './pages/Paypal/Paypal.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/QuienesSomos" element={<QuienesSomos />} />
            <Route path="/Categorias" element={<Categorias />} />
            <Route path="/IniciarSesion" element={<IniciarSesion />} />
            <Route path="/Agrupaciones" element={<Agrupaciones />} />
            <Route path="/ListadoAgrupaciones" element={<ListadoAgrupaciones />} />
            <Route path="/agrupacion" element={<Agrupacion />} />
            <Route path="/User" element={<User />} />
            <Route path='/UserPage' element={<UserPage />}/>
          <Route path='/AgregarCategoria' element={<AgregarCategoria/>}/>
          <Route path='/EliminarCategoria' element={<EliminarCategoria />}/>
          <Route path='/Paypal' element={<Paypal />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
