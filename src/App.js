import React, { useState } from "react";
import Top from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
      {/** footer */}
    </div>
  );
}

export default App;
