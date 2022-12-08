import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Channel from "./components/Channel";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Filter from "./components/Filter";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Others from "./components/Others";
import Protectecd from "./components/Protectecd";
import User from "./components/User";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protectecd Component={Home} />} />
          <Route path="/about" element={<Protectecd Component={About} />} />
          <Route path="/filter" element={<Protectecd Component={Filter} />} />
          <Route path="/user/:name" element={<Protectecd Component={User} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Others />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
