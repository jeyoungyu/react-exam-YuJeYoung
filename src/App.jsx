import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import ProductList from "./pages/ProductList";
import Notice from "./pages/Notice";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;