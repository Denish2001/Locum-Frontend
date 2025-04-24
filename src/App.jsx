import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer"; // Add this import
import FAQ from "./components/FAQS/FAQ"; // Add this import
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import Signup from "./components/SignUp/Signup";
import Login from "./components/Login/Login";
import SignupComponents from "./components/SignupComponents/SignupComponents";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Testimonials></Testimonials>
          </>
        } />
        <Route path="/About" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignupComponents" element={<SignupComponents />} />
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
}

export default App;