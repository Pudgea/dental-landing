import { useState } from "react";
import type { Memo } from "../../../models/memo.model";

import "./MemoComponent.css"

const MemoComponent = ({ item }: { item: Memo }) => {
  const [showBefore, setShowBefore] = useState(false);
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="memo-component">
      <p className="head">{item.title}</p>

      <div className="mc-inner">
        <div className="mc-inner-block">
          <p
            onClick={() => setShowBefore(!showBefore)}
            style={{ cursor: "pointer" }}
          >
            {showBefore ? "▼ До процедуры" : "▶ До процедуры"}
          </p>
          {showBefore && (
            <div className="mc-inner-block-info">
              {item.beforeProcedure.map((p, i) => (
                <p className="txt" key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>

        {item.afterProcedure && (
          <div className="mc-inner-block">
            <p
              onClick={() => setShowAfter(!showAfter)}
              style={{ cursor: "pointer" }}
            >
              {showAfter ? "▼ После процедуры" : "▶ После процедуры"}
            </p>
            {showAfter && (
              <div className="mc-inner-block-info">
                {item.afterProcedure.map((p, i) => (
                  <p className="txt" key={i}>{p}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoComponent;
