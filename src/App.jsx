import { Outlet, useLocation } from "react-router-dom";
import NavBarComponent from "./pages/components/navBarComponent";
import AdmNavBarComponent from "./pages/components/admNavBarComponent";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let location = useLocation().pathname
  return (
    <div className="h-screen max-h-screen bg-gray-200">
      { 
        ((location === '/sign-up' || location === '/' || location === '/confirm-email' || location === '/reset-password' || location.includes("adm"))) ? 
        <span></span> : <NavBarComponent /> 
      }

      {/* ADM navBar */}
      {
        (location.includes("adm")) ? <AdmNavBarComponent /> : <span></span>
      }
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
