# 🤖 Machine Learning με Python

Η **Machine Learning** χρησιμοποιείται σε τομείς της **AI, αναγνώριση εικόνων & chatbot ανάπτυξη**! Είναι ένας κλάδος της τεχνητής νοημοσύνης που επιτρέπει στους υπολογιστές να μαθαίνουν από δεδομένα και να βελτιώνουν την απόδοσή τους χωρίς ρητή προγραμματιστική παρέμβαση.

---

## 🔹 Γιατί να χρησιμοποιήσεις Python για Machine Learning;

✅ **Ευκολία χρήσης** - Η Python έχει απλή σύνταξη και πολλές έτοιμες βιβλιοθήκες.  
✅ **Μεγάλη κοινότητα** - Υπάρχουν πολλοί πόροι μάθησης και υποστήριξη.  
✅ **Ευελιξία** - Χρησιμοποιείται σε διάφορους τομείς, από αναγνώριση εικόνων έως οικονομικά δεδομένα.  
✅ **Υποστήριξη GPU** - Τα TensorFlow και PyTorch αξιοποιούν GPUs για ταχύτερη εκπαίδευση μοντέλων.  

---

## 🔹 Βασικές Βιβλιοθήκες:

✅ **Scikit-Learn** (ML models: Regression, Classification, Clustering)  
✅ **TensorFlow / PyTorch** (Deep Learning: CNNs, RNNs, GANs)  
✅ **NLTK / SpaCy** (Επεξεργασία Φυσικής Γλώσσας - NLP)  
✅ **Pandas & NumPy** (Διαχείριση, επεξεργασία και ανάλυση δεδομένων)  
✅ **Matplotlib & Seaborn** (Οπτικοποίηση δεδομένων)  
✅ **OpenCV** (Επεξεργασία εικόνας και Computer Vision)  
✅ **XGBoost & LightGBM** (Boosting αλγόριθμοι για βελτιστοποιημένη απόδοση)  

---

## 🔹 Παράδειγμα Μοντέλου:

Ένα απλό παράδειγμα γραμμικής παλινδρόμησης με **Scikit-Learn**:

```python
from sklearn.linear_model import LinearRegression
import numpy as np

model = LinearRegression()
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([10, 20, 30, 40, 50])

model.fit(X, y)
prediction = model.predict([[6]])
print(f"Αναμενόμενο: {prediction[0]}")  # Αναμενόμενο: 60
```

---

## 🔹 Προετοιμασία Δεδομένων για Machine Learning:

Η προετοιμασία των δεδομένων είναι κρίσιμη για την απόδοση του μοντέλου:

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Φόρτωση δεδομένων
df = pd.read_csv("data.csv")

# Διαχωρισμός features & target
X = df.drop(columns=["target"])
y = df["target"]

# Διαχωρισμός σε training και testing set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Κανονικοποίηση δεδομένων
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
```

---

## 🔹 Βασικοί Τύποι Αλγορίθμων Machine Learning:

📌 **Επιβλεπόμενη Μάθηση (Supervised Learning)**
- **Regression** (π.χ. Linear Regression, Decision Trees)
- **Classification** (π.χ. Logistic Regression, Random Forest, SVM)

📌 **Μη Επιβλεπόμενη Μάθηση (Unsupervised Learning)**
- **Clustering** (π.χ. K-Means, DBSCAN, Hierarchical Clustering)
- **Dimensionality Reduction** (π.χ. PCA, t-SNE)

📌 **Ενισχυτική Μάθηση (Reinforcement Learning)**
- **Q-Learning**, **Deep Q-Networks (DQN)**

---

## 🔹 Οπτικοποίηση Αποτελεσμάτων Μοντέλου:

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Παράδειγμα οπτικοποίησης δεδομένων
sns.histplot(df["feature"], bins=20, kde=True)
plt.show()
```

---

## 🔹 Εκπαίδευση & Αξιολόγηση Μοντέλου:

```python
from sklearn.metrics import accuracy_score, mean_absolute_error

# Πρόβλεψη
y_pred = model.predict(X_test)

# Αξιολόγηση απόδοσης
mae = mean_absolute_error(y_test, y_pred)
print(f"Mean Absolute Error: {mae}")
```

---

## 🔹 Επόμενα Βήματα:

1️⃣ **Δούλεψε με πραγματικά δεδομένα** - Χρησιμοποίησε datasets όπως αυτά του [Kaggle](https://www.kaggle.com/) ή του [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/index.php).  
2️⃣ **Πειραματίσου με διαφορετικούς αλγορίθμους** - Δοκίμασε Random Forest, XGBoost, CNNs.  
3️⃣ **Βελτιστοποίησε τα μοντέλα σου** - Χρησιμοποίησε Grid Search, Random Search, και hyperparameter tuning.  
4️⃣ **Δημιούργησε εφαρμογές AI** - Chatbots, Computer Vision, NLP projects.  

---

## 🎯 Συμπέρασμα

Το Machine Learning με Python είναι ένα από τα πιο συναρπαστικά και χρήσιμα πεδία της τεχνολογίας σήμερα. Ξεκίνα με βασικούς αλγορίθμους, βελτίωσε τις γνώσεις σου και πειραματίσου με πραγματικά προβλήματα. Καλή προγραμματιστική πορεία! 🚀
