import React, { useState } from "react";
import Top from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Foot from "./components/Foot";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("about");

  return (
    <div>
      <Top setSelectedTopic={setSelectedTopic} />
      <main>
        {selectedTopic === "about" && <About />}
        {selectedTopic === "projects" && <Projects />}
        {selectedTopic === "contact" && <Contact />}
      </main>
      <Foot />
    </div>
  );
}

export default App;
