import { useState } from "react";
import "./index.css";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <>
      {/* Header */}
      <div className="header">
        <h1>🛡 CyberSentra AI – Always Watching. Always Protecting </h1>
        <span>● System Online</span>
      </div>

      {/* Main Dashboard */}
      <div className="dashboard">
        {/* Left Panel */}
        <div className="panel">
          <h2>Network Data Input</h2>
          <p>Upload captured network traffic for AI-based intrusion analysis.</p>

          <label className="upload-box">
            {loading ? "🔍 Analyzing traffic..." : "📂 Upload Network CSV"}
            <input type="file" onChange={uploadFile} />
          </label>

          <div className="status-grid">
            <div className="status-card">
              <h3>Model Status</h3>
              <span>Active</span>
            </div>
            <div className="status-card">
              <h3>Detection Mode</h3>
              <span>Real-time</span>
            </div>
            <div className="status-card">
              <h3>Dataset</h3>
              <span>CICIDS</span>
            </div>
            <div className="status-card">
              <h3>Engine</h3>
              <span>ML + AI</span>
            </div>
          </div>
        </div>
        {/* CENTER PANEL */}
        <div className="panel hacker-panel">

          <div className="hacker-header">
            INTRUSION DETECTION SYSTEM ONLINE
          </div>

          <div className="cyber-marquee">
            <span>
              INTRUSION DETECTION SYSTEM ONLINE • MONITORING NETWORK TRAFFIC • AI ENGINE ACTIVE •
            </span>
          </div>

          <div className="hacker-screen">
            <pre>
        {`
        > Initializing Network Monitor...
        > Loading CICIDS Signature Database...
        > Verifying AI Model Integrity...
        > Deep Packet Inspection: ENABLED
        > Starting Real-time Traffic Capture...
        > Scanning TCP Streams...
        > Scanning UDP Streams...
        > Scanning ICMP Requests...
        > Applying Feature Normalization...
        > Flow Duration Analyzer Running...
        > Packet Size Distribution Calculated
        > SYN Flag Analysis Complete
        > ACK Flag Ratio Normal
        > FIN Flag Count Stable
        > RST Flag Check Passed
        > Protocol Frequency Balanced
        > Source IP Entropy Normal
        > Destination Port Scan Check Passed
        > Payload Entropy Within Threshold
        > Brute-force Detection Engine Active
        > SQL Injection Pattern Scan Running
        > XSS Signature Match: NONE
        > Botnet Behavior Analysis Running
        > Anomaly Detection Layer Active
        > ML Classifier Prediction Running
        > Confidence Score Computed: 98.7%
        > Threat Score Computed: 0.02
        > No Active Intrusion Detected
        > Network Latency Stable
        > Packet Loss Ratio: 0.01%
        > Flow Rate Normal
        > TLS Handshake Validated
        > Encrypted Traffic Verified
        > DNS Tunneling Check Passed
        > ARP Spoofing Detection: CLEAR
        > Port Scanning Behavior: NOT DETECTED
        > DDoS Pattern Check: NEGATIVE
        > IDS Rules Applied Successfully
        > AI Model CICIDS Loaded
        > Continuous Monitoring Enabled
        > Logging Secure Events
        > Updating Threat Dashboard
        > Live Traffic Monitoring...
        > System Health: OPTIMAL
        > Network Status: SECURE
        > Initializing Network Monitor...
        > Loading CICIDS Signature Database...
        > Verifying AI Model Integrity...
        > Deep Packet Inspection: ENABLED
        > Starting Real-time Traffic Capture...
        > Scanning TCP Streams...
        > Scanning UDP Streams...
        > Scanning ICMP Requests...
        > Applying Feature Normalization...
        > Flow Duration Analyzer Running...
        > Packet Size Distribution Calculated
        > SYN Flag Analysis Complete
        > ACK Flag Ratio Normal
        > FIN Flag Count Stable
        > RST Flag Check Passed
        > Protocol Frequency Balanced
        > Source IP Entropy Normal
        > Destination Port Scan Check Passed
        > Payload Entropy Within Threshold
        > Brute-force Detection Engine Active
        > SQL Injection Pattern Scan Running
        > XSS Signature Match: NONE
        > Botnet Behavior Analysis Running
        > Anomaly Detection Layer Active
        > ML Classifier Prediction Running
        > Confidence Score Computed: 98.7%
        > Threat Score Computed: 0.02
        > No Active Intrusion Detected
        > Network Latency Stable
        > Packet Loss Ratio: 0.01%
        > Flow Rate Normal
        > TLS Handshake Validated
        > Encrypted Traffic Verified
        > DNS Tunneling Check Passed
        > ARP Spoofing Detection: CLEAR
        > Port Scanning Behavior: NOT DETECTED
        > DDoS Pattern Check: NEGATIVE
        > IDS Rules Applied Successfully
        > AI Model CICIDS Loaded
        > Continuous Monitoring Enabled
        > Logging Secure Events
        > Updating Threat Dashboard
        > Live Traffic Monitoring...
        > System Health: OPTIMAL
        > Network Status: SECURE

        `}
            </pre>
          </div>

        </div>


        {/* Right Panel */}
        <div className="panel">
          <h2>Threat Analysis Output</h2>
          <p>AI-generated intrusion detection results.</p>

          <div className="center-system">
            <div className="sys-card">
              <h4>Packets Analyzed</h4>
              <span>1,284,392</span>
            </div>

            <div className="sys-card">
              <h4>Threat Level</h4>
              <div className="threat-bar">
                <div className="threat-fill"></div>
              </div>
            </div>

            <div className="sys-card">
              <h4>AI Confidence</h4>
              <span>98.7%</span>
            </div>

            <div className="sys-card">
              <h4>Active Rules</h4>
              <span>47</span>
            </div>
          </div>

          <div className="log-stream">
            <p>✔ IDS Engine Initialized</p>
            <p>✔ Monitoring TCP / UDP Streams</p>
            <p>✔ Deep Packet Inspection Enabled</p>
            <p>⚠ Suspicious Pattern Check Running</p>
            <p>✔ ML Model CICIDS Loaded</p>
          </div>

          {result && (
            <div className={`result ${result.secure ? "safe" : "danger"}`}>
              <h3>Detected Threat</h3>
              <h1>{result.threat_type}</h1>
              <p>
                Status:{" "}
                {result.secure ? "Secure Network" : "Intrusion Detected"}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
