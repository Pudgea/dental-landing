import "./Footer.css"
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
    return ( <div className="footer-container">
        <FooterInfo />
        <div className="footer-map">
        <iframe 
            src="https://yandex.kz/map-widget/v1/-/CHWprR0X" 
            width="100%" 
            height="100%" 
        >
        </iframe>

        </div>
    </div> );
}
 
export default Footer;