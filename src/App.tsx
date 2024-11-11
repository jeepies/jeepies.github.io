import React from "react";

function App() {
  return (
    <div className="App h-screen">
      <section className="bg-background w-full h-full text-center text-4xl text-white">wave check...</section>
      <section className="bg-white w-full h-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#252525"
            fillOpacity="1"
            d="M0,160L48,160C96,160,192,160,288,133.3C384,107,480,53,576,53.3C672,53,768,107,864,133.3C960,160,1056,160,1152,181.3C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
    </div>
  );
}

export default App;
