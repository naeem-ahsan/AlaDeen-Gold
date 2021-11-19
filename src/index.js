import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route  } from 'react-router-dom';
import App from './App';
import Terms from './routes/Terms';
import Privacy from './routes/Privacy';
import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
        <Route path="/AlaDeen-Gold" element={<App />} />
        <Route path="Terms" element={<Terms />} />
        <Route path="Privacy" element={<Privacy />} />
    </Routes>
  </Router>,
  rootElement
);

// ReactDOM.render(
//   <React.StrictMode>
//    <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="expenses" element={<Terms />} />
//       <Route path="invoices" element={<Privacy />} />
//     </Routes>
//   </BrowserRouter>,
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
