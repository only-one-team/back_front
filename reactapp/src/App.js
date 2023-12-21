import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Subsr from "./pages/64154000.js";
import Asubsr from "./pages/64659000.js";
import Search from './pages/Search.js';
import Categories from "./components/Categories.js";



const App = () => {

  return (

    <Routes>

       <Route element={<Categories />}>
        <Route path="/" element={<Home />} />
        <Route path="/64154000" element={<Subsr />} />
        <Route path="/64659000" element={<Asubsr />} />
        <Route path="/Search" element={<Search />} />
        </Route>

    </Routes>

  );
};

export default App;