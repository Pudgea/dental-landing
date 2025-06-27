import './index.css'

const ReasonsServices = ({reasons}:{reasons:string[]}) => {
    return ( <div className="reasons-services">
        <div>
            <p className="title">Почему лучше лечить сразу</p>
            {/* <div className="txt">Клиника оснащена новейшим оборудованием и инструментарием высокого качества</div> */}
        </div>
        <div className="reasons-list">
            <ul>
              {reasons.map((r,i)=><li key={i}><p className='head'>{r}</p></li>)}
            </ul>
        </div>
    </div> );
}
 
export default ReasonsServices;