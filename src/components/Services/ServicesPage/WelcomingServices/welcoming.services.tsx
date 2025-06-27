import { imgSrc } from '../../../../constants/devConstants';
import whatsappClick from '../../../../utils/whatsappClick';
import './index.css'

const WelcomingServices = ({title, description}:{title:string, description: string[]}) => {
    return ( <div className="welcoming-services">
        <div className="wcd-cover">
            <div className="welocoming-service-data">
                <p className="title">{title}</p>
                <div className="welcoming-service-desc">
                    {description.map((d) => <p className="head">{d}</p>)}
                </div>
            </div>
            <div className="wcd-bottom">
                <p className="head">Запишитесь на консультацию и получите индивидуальный план лечения.</p>
                <button onClick={whatsappClick}>Проконсультроваться</button>
            </div>
        </div>
        <div className="welcomin-service-img">
            <img src={imgSrc + "services/image.png"} alt="" />
        </div>
    </div> );
}
 
export default WelcomingServices;