const ServiceItem = ({img, txt}:{img:string, txt:string}) => {
    return ( 
        <div className="service-block">
            <div className="service-txt">
                <p className="reg">
                    {txt}
                </p>
            </div>
            <img src={img} alt=""/>
        </div>
     );
}
 
export default ServiceItem;