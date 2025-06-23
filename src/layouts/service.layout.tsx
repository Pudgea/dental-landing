import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { Subcategory } from "../models/service.model";
import servicesMock from "../mock/services.mock";
import WelcomingServices from "../components/Services/ServicesPage/welcoming.services";

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
                <WelcomingServices title={cService.name} description={[cService.description, ...cService.details]} />
            </main>
        </div> 
    );
}
 
export default ServiceLayout;