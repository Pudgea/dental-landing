import { useState } from "react";
import { phoneNumber } from "../../constants/infoConstants";
import NavigationServices from "./NavigationServices/NavigationServices";
import { useNavigate } from "react-router";
import { imgSrc } from "../../constants/devConstants";
import './index.css'

const NavigationBar = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    // const handleServicesHover = () => {
    //     setIsOpen(true);
    // };

    const handleServicesLeave = () => {
        setIsOpen(false);
    };

    return ( 
        <nav>
        <div className="logo">
            <img src={imgSrc + "logo.jpg"} alt=""/>
        </div>
        <div style={{flexDirection: 'row', display: 'flex'}}>
            <ul>
                <li>
                    <p onClick={() => navigate('/')}>
                        КЛИНИКА
                    </p>
                </li>
                <li 
                    // onMouseEnter={handleServicesHover}
                    onMouseLeave={handleServicesLeave}
                >
                    <p 
                        onClick={() => setIsOpen(p => !p)}
                    >
                        УСЛУГИ
                    </p>
                    {isOpen && <div className={`services-dropdown ${isOpen ? 'active' : ''}`}>
                        <NavigationServices />
                    </div>}
                </li>
                <li>
                    <p onClick={() => navigate('contacts')}>
                        КОНТАКТЫ
                    </p>
                </li>
            </ul>
            <div id="essential-info">
                <div className="ei-data">
                    <div className="ei-address">
                        <i className="bi bi-geo-alt-fill"></i>
                        <p>Мангилик Ел 36</p>
                    </div>
                    <div className="ei-address">
                        <i className="bi bi-telephone-fill"></i>
                        <p>+{phoneNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
     );
}
 
export default NavigationBar;