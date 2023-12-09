import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button
            onMouseOver={() => setColor("#97d7e2")}
            className='outline-none px-4 py-1 rounded-full text-white shodow-lg'
            style={{ backgroundColor: "#97d7e2" }}>Color 1
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onMouseOver={() => setColor("#b676ea")}
            style={{ backgroundColor: "#b676ea" }}>Color 2
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onMouseOver={() => setColor("#f27885")}
            style={{ backgroundColor: "#f27885" }}>Color 3
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onMouseOver={() => setColor("#f4dd8e")}
            style={{ backgroundColor: "#f4dd8e" }}>Color 4
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            onMouseOver={() => setColor("#d3cccc")}
            style={{ backgroundColor: "#d3cccc" }}>Color 5
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

