import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Details from "./pages/Details"
import { useSelector } from 'react-redux';
import Basket from "./pages/Basket";
import Header from "./components/Header";
import About from "./pages/About";
function App() {
 


  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/:id" element={<Details/>}/>
      </Routes>
     
    </div>
  );
}

export default App;