import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import TopHeader from "./Pages/Shared/TopHeader/TopHeader";
import Exam from "./Pages/Exam/Exam";
import Result from "./Pages/Result/Result";
import Profile from "./Pages/Profile/Profile";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/navbar/Navbar";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <TopHeader/>
        <Header />
        {/* <Navbar/> */}
        <Routes>
          {/* <topHeader /> */}
          <Route exact path='/' element={<Exam />}></Route>
          <Route exact path='/Exam' element={<Exam />}></Route>
          <Route exact path='/Result' element={<Result />}></Route>
          <Route exact path='/Profile' element={<Profile />}></Route>
          <Route exact path='/Signup' element={<Signup />}></Route>
          <Route exact path='/Signin' element={<Signin />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
