import type { SubcategoryAdvantage } from '../../../../models/service.model';
import './index.css'

const AdvantagesServices = ({advatages}:{advatages:SubcategoryAdvantage[]}) => {
    return ( <div className="advatages-services">
        <div className="title">Преимущества</div>
        {advatages.map((a, i) => {
            switch(a.type){
                case "desc": return <p key={i} className='txt'>{a.data}</p>
                case "list": {
                    const arr = a.data.split(';')
                    return (
                        <ul key={i}>
                            {arr.map((item, i) => <li key={i}>{<p className='txt'>{item}</p>}</li>)}
                        </ul> 
                    )
                } 
            }
        })}
    </div> );
}
 
export default AdvantagesServices;