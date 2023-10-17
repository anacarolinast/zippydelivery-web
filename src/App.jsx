import { Outlet } from "react-router-dom";
import LoginPage from "./pages/auth/login/login";

function App() {
  return (
    <div className="h-screen bg-gray-200">
      <span>Navbar</span>
      <Outlet />
      <span>Footer</span>
    </div>
  );
}

export default App;
