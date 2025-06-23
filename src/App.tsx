// src/App.tsx

import React from "react";
import CometChatApp from "./CometChat/CometChatApp";

const App: React.FC = () => (
  <main style={appContainerStyle}>
    <CometChatApp />
  </main>
);

const appContainerStyle: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
  margin: 0,
  padding: 0,
};

export default App;
