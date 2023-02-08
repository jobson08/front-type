import {  ForgetPasswordPage, HomePage, LoginPage, RegisterPage } from 'pages';
import Error from 'pages/Error';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>              
              <Route path="/" element={(<LoginPage />)} />
              <Route path="/register" element={(<RegisterPage />)} />
              <Route path="/forget" element={(<ForgetPasswordPage />)} />
              {/*Pages */}
              <Route path="home" element={<HomePage />} />
              {/*Error */}
         <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes