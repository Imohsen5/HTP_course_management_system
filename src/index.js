import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot
import App from "./App"; // Your main App component
import "./index.css"; // Import Tailwind CSS or any global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
