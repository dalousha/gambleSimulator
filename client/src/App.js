import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import OddsCalculator from "./components/OddsCalculator.jsx";
import MyAccount from "./components/MyAccount.jsx";
import SignIn from "./components/SignIn.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/wagers" element={<Home />}/>
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/calculator" element={<OddsCalculator />} />
          <Route exact path="/SignIn" element={<SignIn />} />
        </Routes>
    </>
  );
}

export default App;
