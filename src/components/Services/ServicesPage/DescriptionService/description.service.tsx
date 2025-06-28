import './index.css'

const DescriptionService = ({desc}:{desc:string[]}) => {
    return ( <div className="desc-service">
        {
            desc.map((d,i) => <p key={i} className="txt">{d}</p>)
        }
    </div> );
}
 
export default DescriptionService;