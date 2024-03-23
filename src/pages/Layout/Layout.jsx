import { Navbar } from "../../componets/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../../componets/Footer/Footer";

export function Layout() {
  return (
    <main>
      <Navbar />
      <section className="body">
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
