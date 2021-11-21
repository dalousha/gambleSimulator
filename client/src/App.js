import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import OddsCalculator from "./components/OddsCalculator.jsx";
import MyAccount from "./components/MyAccount.jsx";
import Leaderboards from "./components/Leaderboards.jsx";
import SignInModal from "./components/SignInModal.jsx";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/wagers" element={<Home />}/>
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="leaderboards" element={<Leaderboards />} />
          <Route path="/calculator" element={<OddsCalculator />} />
          <Route exact path="/SignIn" element={<SignInModal />} />
        </Routes>
    </>
  );
}

export default App;
