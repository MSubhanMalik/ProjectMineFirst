import NavbarComp from "../Components/Navbar"
import Home from "../Pages/Home"
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import Contact from "../Pages/Contact"
import Works from "../Pages/Works"
import Blogs from "../Pages/Blogs"
import Services from "../Pages/Services"
import About from "../Pages/About"
import ErrorPage from "../Pages/ErrorPage"
import {Routes, Route} from 'react-router-dom'


function App() {


  return (
      <Routes>
        <Route path = "/" element= {<Home />}/>
        <Route path = "/register" element= {<Register />}/>
        <Route path = "/login" element= {<Login />}/>
        <Route path = "/works" element= {<Works />}/>
        <Route path = "/services" element= {<Services />}/>
        <Route path = "/about" element= {<About />}/>
        <Route path = "/blogs" element= {<Blogs />}/>
        <Route path = "/contact" element= {<Contact />}/>
        <Route path = "*" element = {<ErrorPage />} />
      </Routes>

  )
}

export default App
