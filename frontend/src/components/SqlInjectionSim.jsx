import { useState } from "react";
import axios from "axios";

function SqlInjectionSim() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState(null);

    const handleLogin = async (endpoint) => {
        try {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);

            const response = await axios.post(`http://127.0.0.1:8000/${endpoint}`, formData);
            setResult(response.data.message);
        } catch (error) {
            setResult("Error connecting to the server");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>SQL Injection Simulation 🔥</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                style={{ margin: "5px", padding: "5px" }}
            />
            <br />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                style={{ margin: "5px", padding: "5px" }}
            />
            <br />
            <button onClick={() => handleLogin("sql-injection/test")} style={{ margin: "10px", padding: "10px" }}>
                🔴 Vulnerable Login
            </button>
            <button onClick={() => handleLogin("sql-injection/secure-test")} style={{ margin: "10px", padding: "10px" }}>
                🟢 Secure Login
            </button>
            <br />
            {result && <p><strong>Result:</strong> {result}</p>}
        </div>
    );
}

export default SqlInjectionSim;
