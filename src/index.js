import React from "react";  
import { createRoot } from "react-dom/client"; // در React 18  
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.bundle.min';  
import App from "./App";  
import './index.css';
const container = document.getElementById("root");  
const root = createRoot(container);  
root.render(<React.StrictMode><App /></React.StrictMode>);  