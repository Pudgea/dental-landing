import { Outlet } from "react-router";
import NavigationBar from "../components/Navigation/NavigationBar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
    return ( <>
        <NavigationBar />
        <Outlet />
        <Footer/>
    </> );
}
 
export default RootLayout;