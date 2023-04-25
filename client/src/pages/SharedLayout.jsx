import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

const SharedLayout = () => {
    return (
      <>
        <Announcement/>
        <Navbar/>
          <Suspense fallback={<>Please WAIT...</>}> 
            <Outlet />
          </Suspense>
        <Footer/>
      </>
    );
  };

  export default SharedLayout;