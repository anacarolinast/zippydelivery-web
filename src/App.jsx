import { Outlet, useLocation } from "react-router-dom";
import LoginPage from "./pages/auth/login/login";
import NavBarComponent from "./pages/components/navBarComponent";
import AdmNavBarComponent from "./pages/components/admNavBarComponent";

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
    </div>
  );
}

export default App;
