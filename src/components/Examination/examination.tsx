import AppointmentButton from "../AppointmentButton";

const Examination = ({step, head, txt, img}:{step:string, head:string, txt:string, img:string}) => {
    return ( 
        <div className="examination-slide">
            <div className="examination-main">
                <img src={img} alt="" />
                <div className="examination-main-data">
                    <p className='examination-step'>{step}</p>
                    <p className="head">{head}</p>
                    <p className="txt">{txt}</p>
                    <AppointmentButton />
                </div>
            </div>
        </div>
    );
}
 
export default Examination;