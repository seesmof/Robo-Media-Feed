import { useState } from "react";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#E2E2E2", minHeight: "100vh" }}>
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".4rem",
            padding: "1rem",
          }}
        >
          <Cards />
        </main>
      </div>
    </>
  );
}

export default App;

// #E2E2E2
// #FFFFFF
// #77DD77
// #E48DFA
