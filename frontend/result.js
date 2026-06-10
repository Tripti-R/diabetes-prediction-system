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



const prediction =
    sessionStorage.getItem("prediction");



const resultCard =
    document.getElementById("resultCard");



if(prediction === "Diabetic"){

    resultCard.className =
        "resultCard diabetic";

    resultCard.innerHTML = `

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

    resultCard.className =
        "resultCard nonDiabetic";

    resultCard.innerHTML = `

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



document.getElementById("backBtn")
.addEventListener("click", function(){

    window.location.href = "index.html";
});