import pandas as pd
import joblib
import numpy as np
import os
from io import BytesIO

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FEATURE_PATH = os.path.join(BASE_DIR, "feature_columns.pkl")

feature_columns = joblib.load(FEATURE_PATH)

def preprocess(file, filename):
    file_bytes = file.read()
    buffer = BytesIO(file_bytes)

    if filename.endswith(".xlsx"):
        df = pd.read_excel(buffer)
    else:
        df = pd.read_csv(buffer, encoding="latin1")

    df.columns = df.columns.str.strip()

    for col in feature_columns:
        if col not in df.columns:
            df[col] = 0

    df = df[feature_columns]

    df = df.replace([np.inf, -np.inf], 0)
    df = df.fillna(0)

    return df
