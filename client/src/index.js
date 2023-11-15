import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.createElementById('root');
const root = createRoot(container);

root.render(<App />);
reportWebVitals();
