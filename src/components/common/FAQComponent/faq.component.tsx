import { useState } from "react";
import type { FAQ } from "../../../models/service.model";
import './index.css'


interface FAQProps {
  faq?: FAQ[];
  title?: string;
  className?: string;
}

const FAQComponent: React.FC<FAQProps> = ({ 
  faq = [], 
  title = "Часто задаваемые вопросы",
  className = ""
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  if (!faq || faq.length === 0) {
    return (
      <div className={`faq-container ${className}`}>
        <h2 className="faq-title">{title}</h2>
        <p className="faq-empty">FAQ пока не добавлены</p>
      </div>
    );
  }

  return (
    <div className={`faq-container ${className}`}>
      <h2 className="title">{title}</h2>
      
      <div className="faq-list">
        {faq.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              onClick={() => toggleItem(index)}
              className="faq-question"
              aria-expanded={openItems.has(index)}
            >
              <span className="faq-question-text">
                <p className="txt">
                    {item.question}
                </p>
              </span>
              <div className={`faq-icon ${openItems.has(index) ? 'open' : ''}`}>
                <p className="txt">▼</p>
              </div>
            </button>
            
            {openItems.has(index) && (
              <div className="faq-answer">
                <div className="faq-answer-content">
                  <p className="txt">
                    {item.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

  
export default FAQComponent