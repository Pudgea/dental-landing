import type { Method } from "../../../models/method.model";
import './index.css'

const MethodsItem = ({item, i}:{item:Method, i?:number}) => {
    return ( 
        <div className={i && i % 2 !== 0?"methods-item":"methods-item methods-item-reversed"}>
            <div className="methods-item-data">
                <p className="head">{i && i + ". "}{item.name}</p>
                {item.data.map(
                    (d, i) => 
                    <div key={i} className="mid-data">
                        <p className="txt">{d.desc}</p>
                        {
                            d.list && 
                            <ul className="mid-list">
                                {d.list.map((l, i) => 
                                    <li key={i}>
                                        <p className="txt">{l}</p>
                                    </li>
                                )}
                            </ul>
                        }
                    </div>
                )}
            </div>
            {item.img &&<div className="methods-item-img"> <img src={item.img} /></div>}
        </div>
     );
}
 
export default MethodsItem;