// Import React so we can use React features such as StrictMode.
import React from "react";

// Import ReactDOM so React can render the app inside the browser page.
import ReactDOM from "react-dom/client";

// Import the top-level App component.
import App from "./App.jsx";

// Find the <div id="root"> in index.html and create a React root inside it.
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode helps identify common development problems.
  <React.StrictMode>
    {/* Render the complete website. */}
    <App />
  </React.StrictMode>,
);
