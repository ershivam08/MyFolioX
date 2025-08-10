import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { FormProvider } from "./Context/FormContext.jsx";
import Navbar from "./Component/Navbar";
import Data from "./Pages/Data";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Login from "./Pages/Login.jsx";

export default function App() {
  return (
    <AuthProvider>
      <FormProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/data" element={<Data />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </FormProvider>
    </AuthProvider>
  );
}
