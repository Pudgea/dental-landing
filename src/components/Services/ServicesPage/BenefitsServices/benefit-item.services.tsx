const BenefitItemServices = ({item}:{item:string}) => {
    return ( <div className='benefit-item-services'>
        <p className='head'>
            {item}
        </p>
    </div>);
}
 
export default BenefitItemServices;