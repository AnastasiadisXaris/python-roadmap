---

## **📌 Machine Learning 🤖**
```md
# 🤖 Machine Learning με Python

Το **Machine Learning** χρησιμοποιείται σε **AI, αναγνώριση εικόνων & chatbot ανάπτυξη**!  

## 🔹 Βασικές Βιβλιοθήκες:
✅ **Scikit-Learn** (ML models)  
✅ **TensorFlow / PyTorch** (Deep Learning)  
✅ **NLTK** (Επεξεργασία Φυσικής Γλώσσας)  

## 🔹 Παράδειγμα Μοντέλου:
```python
from sklearn.linear_model import LinearRegression

model = LinearRegression()
X = [[1], [2], [3], [4], [5]]
y = [10, 20, 30, 40, 50]

model.fit(X, y)
print(model.predict([[6]]))  # Αναμενόμενο: 60
