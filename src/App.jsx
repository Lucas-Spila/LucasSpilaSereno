import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom"
import Login from "./Components/pages/Login"
import Registro from "./Components/pages/registro"

function App() {

  return (
    <div>
      <Router>
        <ul>
            <li>
             <Link to="/">Home</Link> 
            </li>
          <li>
            <Link to="/login">Login</Link> 
          </li>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registro" element={<Registro/>}></Route>
        </Routes>
      </Router>


      
      
    </div>
  )
}

export default App