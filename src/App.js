import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import CartProvider from "./store/CartProvider";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
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
