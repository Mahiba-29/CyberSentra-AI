# CyberSentra-AI
CyberSentra AI is an AI-powered intrusion detection system that analyzes network traffic to identify malicious and anomalous activities. Using machine learning trained on CICIDS data, it classifies traffic in real time and visualizes security insights through an interactive, SOC-inspired cyber dashboard.

**ARCHITECTURE:**

<img width="900" height="450" alt="image" src="https://github.com/user-attachments/assets/ae71e99e-bcc2-40e5-9113-e3ed3ad2b527" />

This project implements a real-time AI-based Network Intrusion Detection System built using a ReactJS frontend and a FastAPI-powered Python backend. Network traffic data (CSV format) is preprocessed and analyzed using machine learning models trained on the CICIDS dataset. Core ML models include Random Forest, Gradient Boosting, Support Vector Machine (SVM), and K-Nearest Neighbors (KNN), which work together to classify traffic as benign or malicious with high accuracy. Feature extraction and normalization are handled using NumPy and Pandas, while Scikit-learn enables efficient model training and prediction. The system provides an interactive cyber dashboard for real-time threat visualization, improving security awareness. This project benefits society by enhancing cybersecurity, detecting attacks early, protecting sensitive data, and reducing risks to organizations and critical digital infrastructure.

**PROJECT UI:**

<img width="935" height="409" alt="image" src="https://github.com/user-attachments/assets/2f73b04f-6d1f-46a8-abb6-cc6f800aaf4e" />


**COMMANDS:**
- frontend- npm run dev
- backend- uvicorn app:app --reload
