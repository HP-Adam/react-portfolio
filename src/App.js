import React, { useState } from "react";
import Top from "./components/Nav";
import About from "./components/About";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("about");

  return (
    <div>
      <Top setSelectedTopic={setSelectedTopic} />
      <main>
        {selectedTopic === "about" && <About />}
        {/* projects */}
        {/* contact */}
      </main>
      {/** footer */}
    </div>
  );
}

export default App;
