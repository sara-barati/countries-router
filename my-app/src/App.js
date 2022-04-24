import { Routes, Route } from 'react-router-dom';
import "./App.css";

import Home from "./Components/Home";
import Details from "./Components/Details";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />}/>
      <Route  path=":alpha2Code"  element={<Details />}/>
      <Route exact index element={<Home />} />

      </Routes>
       

  );
}

export default App;
