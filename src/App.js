import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import CartProvider from "./store/CartProvider";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import ErrorPage from "./pages/Error";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs/>}
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
