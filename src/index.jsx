import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Pages
import LoginPage from './pages/auth/login/login';
import SignUpPage from './pages/auth/sign-up/sign-up';
import ErrorPage from './pages/errors/ErrorPage';
import ConfirmEmailPage from './pages/auth/actions/confirmEmail';
import ResetPasswordPage from './pages/auth/actions/resetPassword';
import HomePage from './pages/home/HomePage';
import ProdutoRegister from './pages/produtos/produtos';
import ProfilePage from './pages/profile/ProfilePage';
import MenuManagerPage from './pages/menu/MenuManager';
import CategoryEditPage from './pages/menu/CategoryEdit';
import OrderManagerPage from './pages/order-manager/OrderManager';
import InitialPage from './pages/init/InitialPage';
import OrderHistoryPage from './pages/order-history/OrderHistory';
import { ProtectedRoute } from './pages/util/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LoginPage />
      },
      {
        path: "sign-up",
        element: <SignUpPage />
      },
      {
        path: "confirm-email",

        element: <ConfirmEmailPage />
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />
      },
      {
        path: "home",
        element: <ProtectedRoute>
          <HomePage />
          </ProtectedRoute>
      },
      {
        path: "produto",
        element: <ProtectedRoute><ProdutoRegister /></ProtectedRoute>
      },
      {
        path: "profile",
        element: <ProtectedRoute><ProfilePage /></ProtectedRoute>
      },
      {
        path: "menu-manager",
        element: <ProtectedRoute><MenuManagerPage /></ProtectedRoute>
      },
      {
        path: "category-edit",
        element: <ProtectedRoute><CategoryEditPage /></ProtectedRoute>
      },
      {
        path: "order-manager",
        element: <ProtectedRoute><OrderManagerPage /></ProtectedRoute>
      },
      {
        path: "init",
        element: <ProtectedRoute><InitialPage /></ProtectedRoute>
      },
      {
        path: "order-history",
        element: <ProtectedRoute><OrderHistoryPage /></ProtectedRoute>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
