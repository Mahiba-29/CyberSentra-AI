import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import joblib

df = pd.read_csv("data/network_intrusion.csv")

df.columns = df.columns.str.strip()
df.replace([np.inf, -np.inf], np.nan, inplace=True)
df.fillna(0, inplace=True)

label_column = "Label"

y = df[label_column]
X = df.drop(label_column, axis=1)

X = X.select_dtypes(include=["int64", "float64"])

le = LabelEncoder()
y_encoded = le.fit_transform(y)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y_encoded, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42,
    n_jobs=-1
)
model.fit(X_train, y_train)

feature_columns = X.columns.tolist()

import joblib
joblib.dump(feature_columns, "feature_columns.pkl")
joblib.dump(model, "threat_model.pkl")
joblib.dump(le, "label_encoder.pkl")

print("✅ Model trained and saved successfully")
