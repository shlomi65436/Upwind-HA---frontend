import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PhishingDetector from "./components/PhishingDetector";
import MalwareSandbox from "./components/MalwareSandbox";
import SqlInjectionSim from "./components/SqlInjectionSim";

function App() {
    return (
        <Router>
            <div style={{ textAlign: "center", }}>
                <h1>Upwind Assignments</h1>
                <nav>
                    <Link to="/phishing" style={linkStyle}>Phishing Detector</Link>
                    <Link to="/malware" style={linkStyle}>Malware Sandbox</Link>
                    <Link to="/sql-injection" style={linkStyle}>SQL Injection</Link>
                </nav>

                <Routes>
                    <Route path="/phishing" element={<PhishingDetector />} />
                    <Route path="/malware" element={<MalwareSandbox />} />
                    <Route path="/sql-injection" element={<SqlInjectionSim />} />
                </Routes>
            </div>
        </Router>
    );
}

const linkStyle = {
    margin: "0 15px",
    textDecoration: "none",
    color: "blue",
    fontWeight: "bold",
};

export default App;
