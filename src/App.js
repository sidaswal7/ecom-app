import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./components/Products/Product";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <h1 className="mb-8 py-8 text-black text-center font-bold text-4xl bg-gradient-to-r from-slate-500 to-white font-robo">
        UrbanCart
      </h1>
      <Product />
      <Footer />
    </CartProvider>
  );
}

export default App;
