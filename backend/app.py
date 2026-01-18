from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from preprocess import preprocess
from model import predict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    df = preprocess(file.file, file.filename)
    prediction = predict(df)

    return {
        "prediction": prediction,
        "secure": prediction.lower() == "benign"
    }
