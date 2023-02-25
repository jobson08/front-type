import LayoutAdmin from 'layouts/LayoutAdmin';
import { ExpenseReportPage, ForgetPasswordPage, RegisterPage } from 'pages/';
import LoginPage from 'pages/auth/LoginPage';
import DashboardPage from 'pages/DashboardPage';
import EntryReportPage from 'pages/reports/EntryReportPage';
import Error from 'pages/Error';
import ProfilePage from 'pages/ProfilePage';
import SettingsPage from 'pages/SettingsPage';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryPage from 'pages/reports/CategoryPage';

function AppRoutes() {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={(<LoginPage />)} />
                        <Route path="/registero" element={(<RegisterPage />)} />
                        <Route path="/forget" element={(<ForgetPasswordPage />)} />
                        {/*Pages admin */}
                        <Route path="/" element={<LayoutAdmin />} >
                              <Route path="dashboard" element={<DashboardPage />} />
                              <Route path="relaEntrada" element={<EntryReportPage />} />
                              <Route path="relaDespesa" element={<ExpenseReportPage />} />
                              <Route path="settings" element={<SettingsPage />} />
                              <Route path="profile" element={<ProfilePage/>} />
                              <Route path="category" element={<CategoryPage/>} />
                        </Route>
                        {/*Error 404*/}
                        <Route path="*" element={<Error />} />
                  </Routes>
            </BrowserRouter>
      )
}

export default AppRoutes