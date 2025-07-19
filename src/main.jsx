import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from './components/AuthContext';
import { createLowlight, common } from 'lowlight';
const lowlight = createLowlight(common);

ReactDOM.createRoot(document.getElementById("root")).render(

    <AuthProvider>
      <App />
    </AuthProvider>
 
);
