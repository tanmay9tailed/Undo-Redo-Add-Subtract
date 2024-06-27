import React, { useState } from "react";

const ProgressApp = () => {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  const handleIncrement = () => {
    if (num < 150) {
      setHistory([...history, num]);
      setFuture([]);
      setNum(num + 1);
    }
  };

  const handleDecrement = () => {
    if (num > 0) {
      setHistory([...history, num]);
      setFuture([]);
      setNum(num - 1);
    }
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastState = history[history.length - 1];
      setFuture([num, ...future]);
      setHistory(history.slice(0, -1));
      setNum(lastState);
    }
  };

  const handleRedo = () => {
    if (future.length > 0) {
      const nextState = future[0];
      setHistory([...history, num]);
      setFuture(future.slice(1));
      setNum(nextState);
    }
  };

  return (
    <div className="bg-slate-800 shadow-2xl shadow-slate-800 h-full sm:h-1/2 xs:w-full w-full sm:w-3/4 md:w-3/4 xl:w-2/4 rounded-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] py-20">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex space-x-4 mb-6">
          <button
            className="bg-red-500 text-white shadow-xl shadow-red-700 py-3 px-6 rounded-lg shadow-md transform transition-transform hover:scale-110 hover:bg-red-600 active:scale-100"
            onClick={handleDecrement}
          >
            -1
          </button>
          <button
            className="bg-green-500 text-white shadow-xl shadow-green-700 py-3 px-6 rounded-lg shadow-md transform transition-transform hover:scale-110 hover:bg-green-600 active:scale-100"
            onClick={handleIncrement}
          >
            +1
          </button>
          <button
            className="bg-yellow-500 shadow-xl shadow-yellow-700 text-white py-3 px-6 rounded-lg shadow-md transform transition-transform hover:scale-110 hover:bg-yellow-600 active:scale-100"
            onClick={handleUndo}
            disabled={history.length === 0}
          >
            Undo
          </button>
          <button
            className="bg-blue-500 text-white shadow-xl shadow-blue-700 py-3 px-6 rounded-lg shadow-md transform transition-transform hover:scale-110 hover:bg-blue-600 active:scale-100"
            onClick={handleRedo}
            disabled={future.length === 0}
          >
            Redo
          </button>
        </div>
        <div className="w-3/5 bg-gray-200 h-10 rounded-full overflow-hidden shadow-lg">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 shadow-xl shadow-green-500/50 h-full transition-width duration-500 ease-in-out"
            style={{ width: `${(num / 150) * 100}%` }}
          ></div>
        </div>
        <div className="text-4xl font-semibold mt-4 text-stone-50 drop-shadow-[0_35px_35px_rgba(255,255,255,1)]">{num}</div>
      </div>
    </div>
  );
};

export default ProgressApp;
