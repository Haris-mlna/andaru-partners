import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Template from "./pages/template/template";
import Profile from "./pages/profile/profile";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home/>} />
      <Route path='/template-dev' element={<Template/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  );
}

export default App;
