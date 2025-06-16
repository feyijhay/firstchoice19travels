import {Outlet} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
import Footer from "../footer/Footer";


const Layout = () => {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Hero/>
            <Footer/>




        </>
    )

}
export default Layout