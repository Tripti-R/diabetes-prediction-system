# Diabetes Prediction System

A full-stack machine learning application that predicts diabetes risk using Random Forest Classification.

## Features
- Machine Learning Prediction
- FastAPI Backend
- HTML/CSS/JS Frontend
- Random Forest Model
- SMOTE Balancing
- Cross Validation

## Tech Stack
- Python
- Scikit-learn
- FastAPI
- HTML
- CSS
- JavaScript

## Run Backend

uvicorn app:app --reload

## Run Frontend

python -m http.server 5500

# COMPLETE STEPS TO RUN YOUR PROJECT FROM SCRATCH

Whenever you newly open VS Code, follow these steps exactly.

---

# STEP 1 — OPEN PROJECT FOLDER

Open VS Code.

Click:

```text id="k4v8mx"
File → Open Folder
```

Open:

```text id="a9t2wr"
diabetes-project
```

You should see:

```text id="p7m1dz"
backend/
frontend/
venv/
```

---

# STEP 2 — START BACKEND

## Open Terminal

In VS Code:

```text id="u5r8xn"
Terminal → New Terminal
```

---

## Go To Backend Folder

Run:

```powershell id="m2q6hj"
cd backend
```

---

## Activate Virtual Environment

Run:

```powershell id="f9x3kc"
..\venv\Scripts\Activate.ps1
```

After activation terminal becomes:

```text id="r6n2wb"
(venv) PS C:\Users\Tripti\OneDrive\Desktop\diabetes-project\backend>
```

---

## Run Backend Server

Run:

```powershell id="q3v9te"
python -m uvicorn app:app --reload
```

You should see:

```text id="b8j1wp"
Uvicorn running on http://127.0.0.1:8000
```

KEEP THIS TERMINAL OPEN.

VERY IMPORTANT.

---

# STEP 3 — START FRONTEND

## Open Frontend Folder

In VS Code Explorer:
open:

```text id="n7y5qd"
frontend
```

---

## Run Frontend

Right click:

```text id="x2r8mk"
register.html
```

Click:

```text id="g4u1zc"
Open with Live Server
```

Browser opens automatically.

Usually:

```text id="y8m6hv"
http://127.0.0.1:5500/register.html
```

---

# STEP 4 — TEST COMPLETE FLOW

## Register

Create new account.

Expected:

```text id="z5w9rp"
Registration successful!
```

---

## Login

Login with same credentials.

Expected:

```text id="v1k7bt"
redirect to prediction page
```

---

## Prediction

Fill details.

Click:

```text id="n4p2xd"
Predict
```

Expected:

```text id="d9f6mq"
redirect to result page
```

---

## Result Page

Shows:

* prediction card
* health tips
* logout button
* back button

---

## Logout

Should redirect to login page.

---

# IF ERROR COMES

## 1. Backend Not Running

Prediction fails.

Fix:
Run backend again.

---

## 2. Port Already In Use

Run:

```powershell id="m8c3yt"
Ctrl + C
```

Then rerun backend.

---

## 3. JS Not Working

Check:

```text id="r4j7wu"
Right Click → Inspect → Console
```

See red errors.

---

# EVERY TIME YOU REOPEN VS CODE

ONLY THESE TWO THINGS ARE REQUIRED:

## Backend

```powershell id="s6v2qn"
cd backend
..\venv\Scripts\Activate.ps1
python -m uvicorn app:app --reload
```

## Frontend

```text id="p1x9df"
Right Click register.html
→ Open with Live Server
```

That’s it.





