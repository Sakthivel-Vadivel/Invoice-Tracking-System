//import SignUp from "./components/user/SignUp";
import AddBussiness from "./AddBusiness";
import Login from "./Login";
import SignUp from "./SignUp";
import AuthContext from "./context/auth-context";
import { Routes, Route } from "react-router-dom";
import Manager from "./Manager";

import Home from "./Home";
function App() {
  return (
    <AuthContext.Provider value={{}}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Admin" element={<AddBussiness />} />
        <Route path="/Manager" element={<Manager />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
