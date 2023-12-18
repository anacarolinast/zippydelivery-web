import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ProtectedRoute from "./pages/util/ProtectedRoute";
// Pages
import ConfirmEmailPage from './pages/auth/actions/confirmEmail';
import ResetPasswordPage from './pages/auth/actions/resetPassword';
import LoginPage from './pages/auth/login/login';
import SignUpPage from './pages/auth/sign-up/sign-up';
import ErrorPage from './pages/errors/ErrorPage';
import HomeAdm from './admin/home/HomeAdm';
import HomePage from './pages/home/HomePage';
import InitialPage from './pages/init/InitialPage';
import CategoryEditPage from './pages/menu/CategoryEdit';
import MenuManagerPage from './pages/menu/MenuManager';
import OrderHistoryPage from './pages/order-history/OrderHistory';
import OrderManagerPage from './pages/order-manager/OrderManager';
import ProdutoRegister from './pages/produtos/produtos';
import CadCupomDesconto from "./pages/cupomDesconto/CadCupomDesconto";
import CupomDesconto from './pages/cupomDesconto/CupomDesconto';
import ProfilePage from './pages/profile/ProfilePage';

// ADM
import NossosClientesDetails from './admin/clientes-details/NossosClientesDetails';
import NossosClientes from './admin/clientes/NossosClientes';
import EmpresasParceiras from './admin/empresas/EmpresasParceiras';
import FaturamentoPage from './admin/faturamento/Faturamento';
import CategoriasPage from './admin/categorias/Categorias';
import InformacoesPage from './admin/informacoes/Informacoes';

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
      {
        path: "adm/home-adm",
        element: <HomeAdm />
      },
      {
        path: "adm/nossos-clientes",
        element: <NossosClientes />
      },
      {
        path: "adm/nossos-clientesDetalhes",
        element: <NossosClientesDetails />
      },
      {
        path: "adm/nossos-parceiros",
        element: <EmpresasParceiras/>
      },
      {
        path: "adm/faturamento",
        element: <FaturamentoPage/>
      },
      {
        path: "adm/categorias",
        element: <CategoriasPage/>
      },
      {
        path: "adm/informacoes",
        element: <InformacoesPage/>
      },
      {
        path: "cupom-desconto",
        element: <CupomDesconto/>
      },
     
      {
        path: "cadastro-cupom-desconto",
        element: <CadCupomDesconto/>
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
