import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Invoice from './components/invoice';
import Expenses from './components/expense';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Bills from './components/bill';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} > 
          <Route path='/invoice' element={<Invoice/>} >
            <Route path=':invoiceName' element={<Bills/>} />
          </Route>
          <Route path='/expense' element={<Expenses/>} />
          <Route path='*' element={
            <main className='text-center'>
              <p className='text-3xl'>
                There is nothing/404 
                
              </p>
              <Link to='/'>Go To Home</Link>
            </main>
          } />
        </Route>       
      </Routes>     
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
