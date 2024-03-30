import { Navbar } from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import {  UsuarioContextProvider } from "../../context/UsuarioContext";

export function Layout() {
  return (
    <main>
      <UsuarioContextProvider>
        <Navbar />
        <section className="body">
          <Outlet />
        </section>
        <footer>
          <Footer />
        </footer>
        </UsuarioContextProvider>
      <UsuarioContextProvider>
        <Navbar />
        <section className="body">
          <Outlet />
        </section>
        <footer>
          <Footer />
        </footer>
        </UsuarioContextProvider>
    </main>
  );
}
