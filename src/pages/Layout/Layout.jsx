import { Navbar } from "../../components/Navbar/Navbar";
import { NavbarAdmin } from "../../components/NavbarAdmin/NavbarAdmin";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { getUserAdmin } from "../../data/services/users.js";

export function Layout() {
  
  // const {user, isLoading }= useContext(UserContext);
  // const isAdmin = getUserAdmin(user?.uid)
  const { user, isLoading } = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      if (user && user.uid) {
        try {
          const adminStatus = await getUserAdmin(user.uid);
          setIsAdmin(adminStatus);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchAdminStatus();
  }, [user]);
  
  return (
    <main>
      
       {isAdmin ? <NavbarAdmin /> : <Navbar />}
        <section className="body">
          <Outlet />
        </section>
        <footer>
          <Footer />
        </footer>
        
    </main>
  );
}
