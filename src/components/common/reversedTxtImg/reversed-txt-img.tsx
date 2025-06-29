import './index.css'

const ReversedTxtImg = ({name, desc, img = "https://dent-house.od.ua/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/gol-vinir.jpg.webp", features, reversed = false}:{name:string, desc?:string, img?:string, features?:string[], reversed?:boolean}) => {
    return ( 
    <div className={reversed?"tis-container methods-item-reversed":"tis-container"}>
        <div className="tis-img">
            <img src={img} alt="" />
        </div>
        <div className="types-item-services">
            <p className="head">{name}</p>
            {desc && <p className="txt">{desc}</p>}
            {features && <div className="tis-advantages">
                <ul>
                    {features.map(a => <li><p className="txt">{a}</p></li>)}
                </ul>
            </div>}
        </div> 
    </div>
    );  
}
 
export default ReversedTxtImg;