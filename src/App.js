import "./App.css";
import Footer from "./Commponant/Footer";
import Header from "./Commponant/header";
import Resalt from "./Resalt";
import Xlec from "./Xlec";
import HomePage from "./HomePage";
import EditPage from "./EditPage";
import AdminLogin from "./AdminLogin";
import EditFilePagee from "./EditFilePagee";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="content">
        <Routes basename="/HICS">
          <Route path="/" element={<Resalt />} />
          <Route
            path="/upload"
            element={
              isLoggedIn ? (
                <Xlec />
              ) : (
                <Navigate to="/admin-login" state={{ from: location }} />
              )
            }
          />
          <Route
            path="/homejson"
            element={
              isLoggedIn ? (
                <HomePage />
              ) : (
                <Navigate to="/admin-login" state={{ from: location }} />
              )
            }
          />
          <Route
            path="/edit/:stage"
            element={
              isLoggedIn ? (
                <EditPage />
              ) : (
                <Navigate to="/admin-login" state={{ from: location }} />
              )
            }
          />
          <Route
            path="/admin-login"
            element={<AdminLogin onLogin={handleLogin} />}
          />
          <Route path="/edit-file/:stage" element={<EditFilePagee />} />
          <Route path="/edit-file" element={<EditFilePagee />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;