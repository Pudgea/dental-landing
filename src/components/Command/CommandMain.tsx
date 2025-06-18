import { useState } from "react";
import { mockCommandItems } from "../../mock/doctor.mock";
import CommandItem from "./CommandItem";

const CommandMain = () => {
    const [expandedId, setExpandedId] = useState<number|null>(null);
  
    const handleToggle = (id:number) => {
      setExpandedId(expandedId === id ? null : id);
    };
  
    return (
      <div className="command-main">
        {mockCommandItems.map((item, i) => (
          <CommandItem 
            key={i}
            item={item} 
            isExpanded={expandedId === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    );
  };
 
export default CommandMain;