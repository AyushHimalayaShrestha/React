import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>

        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found! Make sure index.html has <div id='root'></div>");
}

reportWebVitals();
