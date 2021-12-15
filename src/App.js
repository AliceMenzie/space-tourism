import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import ExploreButton from "./components/ExploreButton";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}>
            
          </Route>
          <Route path="/destination" element={<Destination/>}>
            
          </Route>
          <Route path="/crew" element={<Crew/>}>
            
          </Route>
          <Route path="/technology" element={<Technology/>}>
            
          </Route>
          {/* <Destinations /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
