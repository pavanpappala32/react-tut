import ReactDOM from 'react-dom/client';
// Import BrowserRouter from react-router-dom to enable routing
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; 
// Render the App component wrapped with BrowserRouter to enable routing throughout the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
