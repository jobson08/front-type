import LayoutAdmin from 'layouts/LayoutAdmin';
import { ForgetPasswordPage, HomePage, RegisterPage } from 'pages/';
import LoginPage from 'pages/auth/LoginPage';
import DashboardPage from 'pages/DashboardPage';
import Error from 'pages/Error';
import ProfilePage from 'pages/ProfilePage';
import SettingsPage from 'pages/SettingsPage';
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
                              <Route path="settings" element={<SettingsPage />} />
                              <Route path="profile" element={<ProfilePage/>} />
                        </Route>
                        {/*Error 404*/}
                        <Route path="*" element={<Error />} />
                  </Routes>
            </BrowserRouter>
      )
}

export default AppRoutes