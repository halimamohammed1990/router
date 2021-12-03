import './App.css';
import Navbar from "./componant/Navbar";
import Aboutus from "./componant/Aboutus";
import Home from "./componant/Home";
import Profile from "./componant/Profile";
import { BrowserRouter,Route,Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Route path="/" exact component={Home}/>
        <Route path="/aboutus" component={Aboutus}/>
        <Route path="/profile" component={Profile}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
