import whatsappClick from "../utils/whatsappClick";

const AppointmentButton = ({diff}:{diff?:boolean}) => {
    return ( <button onClick={whatsappClick} style={diff?{backgroundColor:"var(--bg) !important", color: 'rgba(255,255,255)'}:{}}>ЗАПИСАТЬСЯ</button> );
}
 
export default AppointmentButton;