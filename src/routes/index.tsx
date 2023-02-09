import LayoutAdmin from 'layouts/LayoutAdmin';
import { ForgetPasswordPage, HomePage, LoginPage, RegisterPage } from 'pages';
import DashboardPage from 'pages/DashboardPage';
import Error from 'pages/Error';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRoutes() {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={(<LoginPage />)} />
                        <Route path="/registero" element={(<RegisterPage />)} />
                        <Route path="/forget" element={(<ForgetPasswordPage />)} />
                        {/*Pages admin */}
                        <Route path="/" element={<LayoutAdmin />} >
                              <Route path="home" element={<HomePage />} />
                              <Route path="dashboard" element={<DashboardPage />} />
                        </Route>
                        {/*Error 404*/}
                        <Route path="*" element={<Error />} />
                  </Routes>
            </BrowserRouter>
      )
}

export default AppRoutes