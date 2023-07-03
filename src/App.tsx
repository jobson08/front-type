import { BrowserRouter } from "react-router-dom";
import AppRoutes from "routes";
import { AuthProvider } from "contexts/AuthContexts";
import { ToastContainer } from "react-toastify";
//import 'react-toastify/dist/react-toastify.css'

function App() {
  return (
    <div>
      <BrowserRouter>
       <ToastContainer />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
