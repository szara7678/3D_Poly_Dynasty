import React from "react";
import { state, subscribe, cancelPlacing } from "../game/state";

export default function BuildCancelButton() {
  const [, force] = React.useReducer(x => x + 1, 0);
  
  React.useEffect(() => {
    const unsub = subscribe(() => force());
    return unsub;
  }, []);

  // 건축 모드가 아닐 때는 표시하지 않음
  if (!state.ui.placing) return null;

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors">
      <button 
        onClick={cancelPlacing}
        className="flex items-center gap-2 font-medium"
      >
        <span>❌</span>
        <span>건축 취소</span>
      </button>
    </div>
  );
}
