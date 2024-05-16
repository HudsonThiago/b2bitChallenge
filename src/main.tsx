import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './assets/router/public/Login.tsx'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './assets/router/private/Dashboard.tsx'


interface PrivateRouteProps {
  redirect: string;
  children: React.ReactNode;
}

const PrivateRoute=({redirect, children}:PrivateRouteProps)=>{
  const authenticated:boolean = localStorage.getItem("token") !== null;
  return authenticated ? children : <Navigate to={redirect} />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* PRIVATE ROUTES */}
        <Route path='/b2bitChallenge/dashboard' element={<PrivateRoute redirect='/b2bitChallenge'>
          <Dashboard/>
        </PrivateRoute>} />
        {/* PUBLIC ROUTES */}
        <Route path='/b2bitChallenge' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
