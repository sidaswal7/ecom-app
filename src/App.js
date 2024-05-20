import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import CartProvider from "./store/CartProvider";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import ErrorPage from "./pages/Error";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./pages/ProductDetail";
import Auth from "./pages/Auth";
import { AuthContextProvider } from "./store/auth-context";


function App() {
  return (
    <AuthContextProvider>
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/store" exact>
            <Store/>
          </Route>
          <Route path="/store/:productId">
            <ProductDetails/>
          </Route>
          <Route path="/about" exact>
            <About/>
          </Route>
          <Route path="/contact">
            <ContactUs/>
          </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
          <Route>
            <ErrorPage/>
          </Route>

        </Switch>
        
        <Footer/>
      </BrowserRouter>
    </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
