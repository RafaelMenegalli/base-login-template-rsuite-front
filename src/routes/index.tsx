import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Layout from '../layouts/Layout';
import Dashboard from '../pages/dashboard';
import Users from '../pages/users';
import ForgotPassword from '../pages/forgotPassword';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <App />
                } />

                <Route path="/forgotpassword" element={
                    <ForgotPassword />
                } />

                <Route path="/dashboard" element={
                    <Layout>
                        <Dashboard />
                    </Layout>
                } />

                <Route path="/users" element={
                    <Layout>
                        <Users></Users>
                    </Layout>
                } />
            </Routes>
        </BrowserRouter>
    );
}
