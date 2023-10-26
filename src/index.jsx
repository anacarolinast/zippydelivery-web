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
        element: <HomePage />
      },
      {
        path: "produto",
        element: <ProdutoRegister />
      },
      {
        path: "profile",
        element: <ProfilePage />
      },
      {
        path: "menu-manager",
        element: <MenuManagerPage />
      },
      {
        path: "category-edit",
        element: <CategoryEditPage />
      },
      {
        path: "order-manager",
        element: <OrderManagerPage />
      },
      {
        path: "init",
        element: <InitialPage />
      },
      {
        path: "order-history",
        element: <OrderHistoryPage />
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
