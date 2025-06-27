import type { SubcategoryType } from "../../../../models/service.model";

const TypesItemServices = ({item}:{item:SubcategoryType}) => {
    return ( 
    <div className="tis-container">
        <img src="https://dent-house.od.ua/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/gol-vinir.jpg.webp" alt="" />
        <div className="types-item-services">
            <p className="head">{item.name}</p>
            <p className="txt">{item.description}</p>
            <div className="tis-advantages">
                <ul>
                    {item.features.map(a => <li><p className="txt">{a}</p></li>)}
                </ul>
            </div>
        </div> 
    </div>
    );
}
 
export default TypesItemServices;