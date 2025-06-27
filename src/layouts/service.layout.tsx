import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { Subcategory } from "../models/service.model";
import servicesMock from "../mock/services.mock";
import WelcomingServices from "../components/Services/ServicesPage/WelcomingServices/welcoming.services";
import BenefitsServices from "../components/Services/ServicesPage/BenefitsServices/benefits.services";
import ReasonsServices from "../components/Services/ServicesPage/ReasonsServices/reasons.services";
import TypesServices from "../components/Services/ServicesPage/TypesServices/types.services";

const ServiceLayout = () => {
    const {name} = useParams<{name:string}>()
    const navigate = useNavigate()
    
    const [cService, setCService] = useState<Subcategory>()

    useEffect(() => {
        const foundSubcategory = servicesMock
          .flatMap(service => service.subcategories)
          .find(sub => sub.name.replace(/ /g, '-') === name);
      
        if (!foundSubcategory) {
          navigate('/');
        } else {
          console.log(foundSubcategory);
          setCService(foundSubcategory);
        }
    }, [name]);

    if(!cService) return null
    return ( 
        <div className="main-container">
            <main>
                <WelcomingServices title={cService.name} description={cService.details ? [cService.description, ...cService.details]:[cService.description]} />
                {cService.benefits && <BenefitsServices benefits={cService.benefits} />}
                {cService.reasons && <ReasonsServices reasons={cService.reasons} />}
                {cService.types && <TypesServices types={cService.types} />}
            </main>
        </div> 
    );
}
 
export default ServiceLayout;