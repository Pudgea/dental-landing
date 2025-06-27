import BenefitItemServices from './benefit-item.services';
import './index.css'

const BenefitsServices = ({benefits}:{benefits:string[]}) => {
    return ( 
        <div className="benefit-services">
            <div className="benefits-slider">
                <div className="benefits-track">
                    {benefits.map((b,i) => <BenefitItemServices key={i} item={b} />)}
                    {benefits.map((b,i) => <BenefitItemServices key={`duplicate-${i}`} item={b} />)}
                </div>
            </div>
        </div> 
    );
}
 
export default BenefitsServices;