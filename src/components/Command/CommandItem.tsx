import type { Doctor } from "../../models/doctor.model";
import './Command.css'

const CommandItem = ({ item, isExpanded, onToggle }:{item:Doctor, isExpanded: boolean, onToggle: () => void}) => {
    return (
      <div 
        className={`command-item ${isExpanded ? 'expanded' : ''}`}
        onClick={onToggle}
      >
        <div className={`command-item-info ${isExpanded ? 'visible' : ''}`}>
          <div className="cii-main">
            <p className="cii-name">{item.name}</p>
            <p className="cii-rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="var(--txt)" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              {item.rating}
            </p>
          </div>
          <p className="cii-speciality">{item.speciality}</p>
          <p className="cii-experience">Стаж: {item.experience}</p>
          <p className="cii-desc">{item.desc}</p>
        </div>
        <img src={item.img} alt={item.name} />
      </div>
    );
  };
export default CommandItem;