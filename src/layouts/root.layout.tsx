import { Outlet } from "react-router";
import NavigationBar from "../components/Navigation/NavigationBar";

const RootLayout = () => {
    return ( <>
        <NavigationBar />
        <Outlet />
    </> );
}
 
export default RootLayout;