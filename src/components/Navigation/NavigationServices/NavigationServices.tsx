import { useState, useRef, type MouseEvent } from "react";
import servicesMock from "../../../mock/services.mock";
import "./NavigationServices.css"
import { useNavigate } from "react-router";

const NavigationServices = () => {
    const navigate = useNavigate()

    const [activeCategory, setActiveCategory] = useState<number|null>(null);
    const [dropdownPosition, setDropdownPosition] = useState('right');
    const containerRef = useRef(null);

    const handleCategoryHover = (categoryIndex:number, event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        setActiveCategory(categoryIndex);
        
        const rect = event.currentTarget.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const dropdownWidth = 400; 
        
        if (rect.right + dropdownWidth > windowWidth) {
            setDropdownPosition('left');
        } else {
            setDropdownPosition('right');
        }
    };

    const handleCategoryLeave = () => {
        setActiveCategory(null);
    };

    return ( 
        <div className="navigation-services-container" ref={containerRef}>
            <div className="services-menu">
                {servicesMock.map((service, categoryIndex) => (
                    <div 
                        key={categoryIndex}
                        className="service-category"
                        onMouseEnter={(e) => handleCategoryHover(categoryIndex, e)}
                        onMouseLeave={handleCategoryLeave}
                    >
                        <div className="category-title">
                            {service.category}
                        </div>
                        
                        {activeCategory === categoryIndex && (
                            <div className={`subcategories-dropdown ${dropdownPosition}`}>
                                {service.subcategories.map((subcategory, subIndex) => (
                                    <div 
                                        key={subIndex}
                                        className="subcategory-item"
                                        onClick={() => navigate(`/service/${subcategory.name.replace(/ /g, '-')}`)}
                                    >
                                        <h4>{subcategory.name}</h4>
                                        <p>{subcategory.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div> 
    );
}
 
export default NavigationServices;