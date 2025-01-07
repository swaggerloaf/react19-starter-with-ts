import React from 'react';
import MyApp from './components/MyApp';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
//document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<MyApp/>);