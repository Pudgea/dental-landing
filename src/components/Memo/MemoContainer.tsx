import memoMock from "../../mock/memo.mock";
import MemoComponent from "./MemoComponent/MemoComponent";
import "./MemoContainer.css"

const MemoContainer = () => {
    return ( <div className="memo-container">
        <div style={{textAlign: 'center'}}>
            <p className="title">Памятки</p>
            <div className="txt">Ваш гид по уходу за зубами</div>
        </div>
        <div className="memo-items">
            {memoMock.map((m, i) => <MemoComponent key={i}item={m}/>)}
        </div>
    </div> );
}
 
export default MemoContainer;