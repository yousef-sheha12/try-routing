import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import LoginPage from "./pages/LoginPage"
import MainHeader from "./MainHeader"
import Footer from "./footer"
import AirConditioning from "./pages/AirConditioning"

const App = () => {
  return (

    <div className="w-full h-dvh bg-gray-950 overflow-auto text-white">
     
      <BrowserRouter>
      <MainHeader />
      <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/about" element={<AboutPage />}/>   
       <Route path="/login" element={<LoginPage />}/>
       <Route path="/air" element={<AirConditioning />}/>

      </Routes>
      <Footer />
      </BrowserRouter>    
    </div>
  )
}

export default App
