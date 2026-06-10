// script.js

if(sessionStorage.getItem("loggedIn") !== "true"){

    window.location.href = "login.html";
}



const username =
    sessionStorage.getItem("username");

document.getElementById("welcomeText").innerText =
    "Welcome, " + username;



document.getElementById("logoutBtn")
.addEventListener("click", function(){

    sessionStorage.clear();

    window.location.href = "login.html";
});



const form =
    document.getElementById("predictionForm");



form.addEventListener("submit",
async function(event) {

    event.preventDefault();

    const data = {

        age: parseInt(
            document.getElementById("age").value
        ),

        hypertension: parseInt(
            document.getElementById("hypertension").value
        ),

        heart_disease: parseInt(
            document.getElementById("heart_disease").value
        ),

        bmi: parseFloat(
            document.getElementById("bmi").value
        ),

        HbA1c_level: parseFloat(
            document.getElementById("hba1c").value
        ),

        blood_glucose_level: parseInt(
            document.getElementById("glucose").value
        ),

        gender:
            document.getElementById("gender").value,

        smoking_history:
            document.getElementById("smoking").value
    };



    try {

    document.getElementById("result").innerText =
        "Analyzing data...";

    const response = await fetch("http://127.0.0.1:8000/predict", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    });

    const result = await response.json();
    sessionStorage.setItem(
    "prediction",
    result.prediction
);

window.location.href =
    "result.html";

    const resultDiv =
    document.getElementById("result");



if(result.prediction === "Diabetic"){

    resultDiv.className = "resultCard diabetic";

    resultDiv.innerHTML = `

        <h2>⚠ High Risk of Diabetes</h2>

        <p>
            Please consult a healthcare professional.
        </p>

        <ul>
            <li>Maintain healthy diet</li>
            <li>Exercise regularly</li>
            <li>Monitor glucose levels</li>
        </ul>
    `;

} else {

    resultDiv.className = "resultCard nonDiabetic";

    resultDiv.innerHTML = `

        <h2>✅ Low Risk of Diabetes</h2>

        <p>
            Keep maintaining a healthy lifestyle.
        </p>

        <ul>
            <li>Continue balanced diet</li>
            <li>Stay physically active</li>
            <li>Regular health checkups</li>
        </ul>
    `;
}

} catch (error) {

    console.error(error);

    document.getElementById("result").innerText =
        "Error connecting to server.";
}
});