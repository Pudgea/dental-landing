const BenefitItemServices = ({item}:{item:string}) => {
    return ( <div className='benefit-item-services'>
        <p className='txt'>
            {item}
        </p>
    </div>);
}
 
export default BenefitItemServices;