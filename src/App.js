import React, { useState } from "react";
import Top from "./components/Nav";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("about");

  return (
    <div>
      <Top />
      <main>
        {/* about */}
        {/* projects */}
        {/* contact */}
      </main>
      {/** footer */}
    </div>
  );
}

export default App;
