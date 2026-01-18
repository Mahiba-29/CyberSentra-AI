import joblib

model = joblib.load("threat_model.pkl")
label_encoder = joblib.load("label_encoder.pkl")

def predict(data):
    prediction = model.predict(data)
    return label_encoder.inverse_transform(prediction)[0]
