import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { Subcategory } from "../models/service.model";
import servicesMock from "../mock/services.mock";
import WelcomingServices from "../components/Services/ServicesPage/WelcomingServices/welcoming.services";
import BenefitsServices from "../components/Services/ServicesPage/BenefitsServices/benefits.services";
import ReasonsServices from "../components/Services/ServicesPage/ReasonsServices/reasons.services";
import TypesServices from "../components/Services/ServicesPage/TypesServices/types.services";
import DescriptionService from "../components/Services/ServicesPage/DescriptionService/description.service";
import AdvantagesServices from "../components/Services/ServicesPage/AdvatagesServices/advantages-services";
import FAQComponent from "../components/common/FAQComponent/faq.component";
import StepsServices from "../components/Services/ServicesPage/StepsServices/steps.services";
import WarningsServices from "../components/Services/ServicesPage/WarningsServices/warnings.services";

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
                <WelcomingServices title={cService.name} description={[cService.description]} />
                {cService.benefits && <BenefitsServices benefits={cService.benefits} />}
                {cService.details && <DescriptionService desc={cService.details} />}
                {cService.reasons && <ReasonsServices reasons={cService.reasons} />}
                {cService.types && <TypesServices types={cService.types} />}
                {cService.preparationSteps && <StepsServices arr={cService.preparationSteps} title="Как подготовить зубы" />}
                {cService.warnings && <WarningsServices warnings={cService.warnings} />}
                {cService.advantages && <AdvantagesServices advatages={cService.advantages} />}
                {cService.faq && <FAQComponent faq={cService.faq} />}
            </main>
        </div> 
    );
}
 
export default ServiceLayout;