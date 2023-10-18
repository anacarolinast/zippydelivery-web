import { Outlet, useLocation } from "react-router-dom";
import LoginPage from "./pages/auth/login/login";

function App() {
  let location = useLocation().pathname
  return (
    <div className="h-screen bg-gray-200">
      { 
        ((location == '/sign-up' || location == '/' || location == '/confirm-email' || location == '/reset-password')) ? 
        <span></span> : <span>Navbar</span> 
      }

      <Outlet />
    </div>
  );
}

export default App;
