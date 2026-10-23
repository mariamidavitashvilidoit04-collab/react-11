import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`flex min-h-screen flex-col items-start transition-colors duration-300 ${
        isDark ? "bg-[#1e2327] text-gray-100" : "bg-white text-black-800"
      }`}
    >
      <button
        className="m-4 cursor-pointer rounded-lg border border-current bg-transparent px-5 py-2.5 text-base"
        onClick={() => setIsDark((prev) => !prev)}
      >
        {isDark ? "Reset" : "Change"}
      </button>

      <h1 className="flex flex-1 items-center self-center break-all text-center text-5xl font-bold">
        {isDark ? ":)" : "Learning React"}
      </h1>
    </div>
  );
}

export default App;
