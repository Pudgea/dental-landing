import { mapLink } from "../../constants/infoConstants";
import './index.css'

const ContactLayout = () => {
    return ( 
            <div className="contact-layout">
                <iframe 
                    src={mapLink} 
                    width="100%" 
                    height="100%" 
                >
                </iframe>
            </div>
     );
}
 
export default ContactLayout;