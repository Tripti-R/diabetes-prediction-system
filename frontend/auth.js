// auth.js

const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", function(event){

        event.preventDefault();

        const username =
            document.getElementById("username").value;

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        let users =
            JSON.parse(localStorage.getItem("users")) || [];

        const existingUser =
            users.find(user => user.email === email);

        if(existingUser){

            document.getElementById("message").innerText =
                "User already exists. Please login.";

            return;
        }

        users.push({
            username,
            email,
            password
        });

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        document.getElementById("message").innerText =
            "Registration successful!";

        setTimeout(() => {

            window.location.href = "login.html";

        }, 1500);

    });

}



const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(event){

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;

        let users =
            JSON.parse(localStorage.getItem("users")) || [];

        const validUser =
            users.find(
                user =>
                    user.email === email &&
                    user.password === password
            );

        if(validUser){

            sessionStorage.setItem(
                "loggedIn",
                "true"
            );

            sessionStorage.setItem(
                "username",
                validUser.username
            );

            window.location.href = "index.html";

        } else {

            document.getElementById("message").innerText =
                "Invalid email or password.";
        }

    });

}