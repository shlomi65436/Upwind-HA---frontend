import { useState } from "react";
import axios from "axios";

function PhishingDetector() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        // Ensure only .txt files are allowed
        if (selectedFile && !selectedFile.name.endsWith(".txt")) {
            alert("Only .txt files are allowed!");
            setFile(null); // Reset the file
            event.target.value = ""; // Clear input
            return;
        }
        setFile(selectedFile);
    };

    const handleUpload = async () => {
        if (!file) return alert("Please select a valid .txt file!");
        setLoading(true);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://127.0.0.1:8000/detect-phishing/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setResult(response.data.indicators || ["No phishing indicators detected."]);
        } catch (error) {
            console.error("Error:", error);
            setResult(["Error processing file"]);
        }
        setLoading(false);
    };

    return (
        <div>
            <h2>Email Phishing Detector 📧</h2>
            <input type="file" accept=".txt" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={loading}>
                {loading ? "Scanning..." : "Upload & Scan"}
            </button>

            {result && (
                <div>
                    <h3>Detection Results:</h3>
                    <ul>{result.map((item, index) => <li key={index}>{item}</li>)}</ul>
                </div>
            )}
        </div>
    );
}

export default PhishingDetector;
