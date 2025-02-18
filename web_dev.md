---

## **📌 Web Development 🌐**
```md
# 🌐 Web Development με Python

Η Python είναι μια ισχυρή γλώσσα για **Web Development**!  
Μπορείς να δημιουργήσεις **websites & APIs** με **Flask** ή **Django**.

## 🔹 Ποια εργαλεία να μάθεις;
✅ **Flask** (Ελαφρύ framework)  
✅ **Django** (Full-stack framework)  
✅ **FastAPI** (API development)  

## 🔹 Παράδειγμα Flask:
```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Καλώς ήρθες στο Web Development!"

app.run(debug=True)
