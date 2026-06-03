const form = document.getElementById("predictionForm");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const data = {

        age: parseInt(document.getElementById("age").value),

        hypertension: parseInt(document.getElementById("hypertension").value),

        heart_disease: parseInt(document.getElementById("heart_disease").value),

        bmi: parseFloat(document.getElementById("bmi").value),

        HbA1c_level: parseFloat(document.getElementById("hba1c").value),

        blood_glucose_level: parseInt(document.getElementById("glucose").value),

        gender: document.getElementById("gender").value,

        smoking_history: document.getElementById("smoking").value
    };

    try {

        const response = await fetch("http://127.0.0.1:8000/predict", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        });

        const result = await response.json();

        document.getElementById("result").innerText =
            "Prediction: " + result.prediction;

    } catch (error) {

        console.error(error);

        document.getElementById("result").innerText =
            "Error connecting to server.";
    }

});