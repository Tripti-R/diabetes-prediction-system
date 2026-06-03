from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import pandas as pd
import joblib
# Load trained model and scaler

model = joblib.load("diabetes_model.pkl")
scaler = joblib.load("scaler.pkl")

# Create FastAPI app

app = FastAPI()
# Enable CORS

app.add_middleware(
    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

# Define expected input structure

class PatientData(BaseModel):
    age: int
    hypertension: int
    heart_disease: int
    bmi: float
    HbA1c_level: float
    blood_glucose_level: int
    gender: str
    smoking_history: str

# Prediction API endpoint

@app.post("/predict")

def predict(data: PatientData):

    # Gender encoding

    gender_Male = 1 if data.gender == "Male" else 0
    gender_Other = 1 if data.gender == "Other" else 0

    # Smoking history encoding

    smoking_current = 1 if data.smoking_history == "current" else 0
    smoking_ever = 1 if data.smoking_history == "ever" else 0
    smoking_former = 1 if data.smoking_history == "former" else 0
    smoking_never = 1 if data.smoking_history == "never" else 0
    smoking_not_current = 1 if data.smoking_history == "not current" else 0

    # Create dataframe with exact training column order

    input_data = pd.DataFrame([[
        data.age,
        data.hypertension,
        data.heart_disease,
        data.bmi,
        data.HbA1c_level,
        data.blood_glucose_level,
        gender_Male,
        gender_Other,
        smoking_current,
        smoking_ever,
        smoking_former,
        smoking_never,
        smoking_not_current
    ]], columns=[
        'age',
        'hypertension',
        'heart_disease',
        'bmi',
        'HbA1c_level',
        'blood_glucose_level',
        'gender_Male',
        'gender_Other',
        'smoking_history_current',
        'smoking_history_ever',
        'smoking_history_former',
        'smoking_history_never',
        'smoking_history_not current'
    ])

    # Scale input

    scaled_data = scaler.transform(input_data)

    # Predict

    prediction = model.predict(scaled_data)

    # Convert output into readable result

    if prediction[0] == 1:
        result = "Diabetic"
    else:
        result = "Not Diabetic"

    # Return JSON response

    return {
        "prediction": result
    }