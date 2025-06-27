import { mapLink } from "../../constants/infoConstants";
import "./Footer.css"
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
    return ( <div className="footer-container">
        <FooterInfo />
        <div className="footer-map">
        <iframe 
            src={mapLink} 
            width="100%" 
            height="100%" 
        >
        </iframe>

        </div>
    </div> );
}
 
export default Footer;