import React, { useState } from "react";
import Top from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("about");

  return (
    <div>
      <Top setSelectedTopic={setSelectedTopic} />
      <main>
        {selectedTopic === "about" && <About />}
        {selectedTopic === "projects" && <Projects />}
        {/* contact */}
      </main>
      {/** footer */}
    </div>
  );
}

export default App;
