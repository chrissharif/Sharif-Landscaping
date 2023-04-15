import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './components/Contact'
import About from './components/About'

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<App />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/about-us' element={<About />} />
    </Route>
  ))
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
