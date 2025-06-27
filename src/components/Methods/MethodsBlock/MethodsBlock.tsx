import methodsMock from '../../../mock/methods.mock';
import MethodsItem from '../MethodsItem/MethodsItem';
import './index.css'

const MethodsBlock = () => {
    return ( 
        <div className="methods-block">
            <div style={{textAlign: 'center'}}>
                <p className="title">Используем современные методики</p>
                <div className="txt">Клиника оснащена новейшим оборудованием и инструментарием высокого качества</div>
            </div>
            <div className="methods-items">
                {
                    methodsMock.map((m, i) => <MethodsItem item={m} i={i+1} />)
                }
            </div>
        </div>
     );
}
 
export default MethodsBlock;