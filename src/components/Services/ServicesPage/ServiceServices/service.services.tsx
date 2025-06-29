import type { SubcategoryType } from "../../../../models/service.model";
import TypesItemServices from "./types-item.services";
import './index.css'

const TypesServices = ({types}:{types:SubcategoryType[]}) => {
    return ( <div className="types-services">
        <div style={{textAlign: 'center'}}>
            <p className="title">Виды услуг</p>
            <p className="txt">Мы предоставляем спектр высококачественных услуг</p>
        </div>
        <div className="types-services-items">
            {types.map((t, i) => <TypesItemServices key={i} item={t} />)}
        </div>
    </div> );
}
 
export default TypesServices;