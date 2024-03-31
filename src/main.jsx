import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Home} from "./pages/Home/Home.jsx"
import {Categorias} from "./pages/Categorias/Categorias.jsx"
import {Agrupaciones} from "./pages/Agrupaciones/Agrupaciones.jsx"
import { ListadoAgrupaciones } from './pages/ListadoAgrupaciones/ListadoAgrupaciones.jsx';
import {QuienesSomos} from "./pages/QuienesSomos/QuienesSomos.jsx"
import {IniciarSesion} from "./pages/IniciarSesion/IniciarSesion.jsx"
import {RegistrarUsuario} from "./pages/RegistrarUsuario/RegistrarUsuario.jsx"
import {Layout} from "./pages/Layout/Layout.jsx"
import Agrupacion from "./pages/Agrupacion/Agrupacion.jsx"
import './index.css'
import UserPage from './pages/UserPage/UserPage.jsx';
import User from './pages/User/User.jsx';
import EliminarCategoria from './pages/EliminarCategoria/EliminarCategoria.jsx';
import AgregarCategoria from './pages/AgregarCategoria/AgregarCategoria.jsx';
import AgregarAgrupacion from './pages/AgregarAgrupacion/AgregarAgrupacion.jsx';
import EliminarAgrupacion from './pages/EliminarAgrupacion/EliminarAgrupacion.jsx';
import HomeAdmin from './pages/HomeAdmin/HomeAdmin.jsx';

import { UserProvider } from "./context/UserContext.jsx";
import { Paypal } from './pages/Paypal/Paypal.jsx';
import ModificarCategoria from './pages/Modificar categoria/ModificarCategoria.jsx';
import ModificarAgrupacion from './pages/ModificarAgrupacion/ModificarAgrupacion.jsx';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/HomeAdmin" element={<HomeAdmin />} />
              <Route path="/QuienesSomos" element={<QuienesSomos />} />
              <Route path="/Categorias" element={
              <PrivateRoute>
                <Categorias />
              </PrivateRoute>

              } />
              <Route path="/IniciarSesion" element={<IniciarSesion />} />
              <Route path="/RegistrarUsuario" element={<RegistrarUsuario />} />
              <Route path="/Agrupaciones" element={
              <PrivateRoute>
                  <Agrupaciones />
              </PrivateRoute>
              } />
              <Route path="/ListadoAgrupaciones" element={<ListadoAgrupaciones />} />
              <Route path="/agrupacion" element={
              <PrivateRoute>
                <Agrupacion />
            </PrivateRoute>
              } />
              <Route path="/User" element={<User />} />
              <Route path='/UserPage' element={<UserPage />}/>
              <Route path='/AgregarCategoria' element={<AgregarCategoria/>}/>
              <Route path='/AgregarAgrupacion' element={<AgregarAgrupacion/>}/>
              <Route path='/ModificarAgrupacion' element={<ModificarAgrupacion/>}/>
              <Route path='/EliminarAgrupacion' element={<EliminarAgrupacion/>}/>
              <Route path='/EliminarCategoria' element={<EliminarCategoria />}/>
              <Route path='/ModificarCategoria' element={<ModificarCategoria />}/>
              <Route path='/Paypal' element={<Paypal />}/>
              
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
