import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Template from "./pages/template/template";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home/>} />
      <Route path='/template-dev' element={<Template/>}/>
    </Routes>
  );
}

export default App;
