import "./Footer.css"
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
    return ( <div className="footer-container">
        <FooterInfo />
        <div className="footer-map">
            <iframe
            src="https://www.google.com/maps?q=51.107528,71.432417&z=17&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            >
            </iframe>
        </div>
    </div> );
}
 
export default Footer;