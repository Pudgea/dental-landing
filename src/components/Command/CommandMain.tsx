import { mockCommandItems } from "../../mock/doctor.mock";
import CommandItem from "./CommandItem";

const CommandMain = () => {
    return ( 
        <div className="command-main">
            {mockCommandItems.map((item) => <CommandItem item={item} />)}                
        </div>
     );
}
 
export default CommandMain;