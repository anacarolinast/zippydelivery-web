import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
// Pages
import ConfirmEmailPage from './pages/auth/actions/confirmEmail';
import ResetPasswordPage from './pages/auth/actions/resetPassword';
import LoginPage from './pages/auth/login/login';
import SignUpPage from './pages/auth/sign-up/sign-up';
import NossosClientesDetails from './pages/clientes-details/NossosClientesDetails';
import NossosClientes from './pages/clientes/NossosClientes';
import ErrorPage from './pages/errors/ErrorPage';
import HomeAdm from './pages/home/HomeAdm';
import HomePage from './pages/home/HomePage';
import InitialPage from './pages/init/InitialPage';
import CategoryEditPage from './pages/menu/CategoryEdit';
import MenuManagerPage from './pages/menu/MenuManager';
import OrderHistoryPage from './pages/order-history/OrderHistory';
import OrderManagerPage from './pages/order-manager/OrderManager';
import ProdutoRegister from './pages/produtos/produtos';
import ProfilePage from './pages/profile/ProfilePage';
import EmpresasParceiras from './pages/empresas/EmpresasParceiras';

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
      {
        path: "home-adm",
        element: <HomeAdm />
      },
      {
        path: "nossos-clientes",
        element: <NossosClientes />
      },
      {
        path: "nossos-clientesDetalhes",
        element: <NossosClientesDetails />
      },
      {
        path: "nossos-parceiros",
        element: <EmpresasParceiras/>
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
