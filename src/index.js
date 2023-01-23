import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
registerServiceWorker();
