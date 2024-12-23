import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components  */
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

/* Screens */
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ProductScreen from "./Screens/ProductScreen/ProductScreen"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" Component={HomeScreen} exact />
          <Route path="/product/:id" Component={ProductScreen}/>
        </Routes>
      
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
