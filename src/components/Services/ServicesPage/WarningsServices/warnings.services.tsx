import './index.css'

const WarningsServices = ({warnings}:{warnings:string[]}) => {
    return ( <div className="warnings-services">
        <div className="title">Важно</div>
        <ul>
            {warnings.map(w => <li key={w}><p className="txt">{w}</p></li>)}
        </ul>
    </div> );
}
 
export default WarningsServices;