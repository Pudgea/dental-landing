import type { SubcategoryType } from "../../../../models/service.model";
import ReversedTxtImg from "../../../common/reversedTxtImg/reversed-txt-img";
import './index.css'

const TypesServices = ({types}:{types:SubcategoryType[]}) => {
    return ( <div className="types-services">
        <div style={{textAlign: 'center'}}>
            <p className="title">Виды услуг</p>
            <p className="txt">Мы предоставляем спектр высококачественных услуг</p>
        </div>
        <div className="types-services-items">
            {types.map((t, i) => <ReversedTxtImg key={i} reversed={(i + 1)%2===0} name={t.name} desc={t.description} features={t.features} />)}
        </div>
    </div> );
}
 
export default TypesServices;