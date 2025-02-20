# 🎭 Αντικειμενοστραφής Προγραμματισμός (OOP)

Ο Αντικειμενοστραφής Προγραμματισμός (Object-Oriented Programming - OOP) είναι ένα δημοφιλές παράδειγμα προγραμματισμού που βοηθάει στη δομή και οργάνωση του κώδικα μέσω της χρήσης κλάσεων και αντικειμένων. Αυτή η προσέγγιση καθιστά τον κώδικα πιο επαναχρησιμοποιήσιμο, ευανάγνωστο και επεκτάσιμο.

## 🔹 Βασικές Αρχές:

Ο OOP στηρίζεται σε τέσσερις βασικές αρχές:

✅ **Κλάσεις & Αντικείμενα**  
Οι κλάσεις είναι τα σχέδια (blueprints) από τα οποία δημιουργούνται τα αντικείμενα. Ένα αντικείμενο είναι μια συγκεκριμένη υλοποίηση μιας κλάσης με μοναδικές τιμές ιδιοτήτων.

✅ **Κληρονομικότητα**  
Η κληρονομικότητα επιτρέπει τη δημιουργία νέων κλάσεων που βασίζονται σε υπάρχουσες, επαναχρησιμοποιώντας και επεκτείνοντας τη λειτουργικότητά τους.

✅ **Πολυμορφισμός**  
Ο πολυμορφισμός επιτρέπει τη χρήση μιας κοινής διεπαφής για διαφορετικούς τύπους αντικειμένων, κάνοντας τον κώδικα πιο ευέλικτο και επεκτάσιμο.

✅ **Ενθυλάκωση**  
Η ενθυλάκωση προστατεύει τα δεδομένα μιας κλάσης, επιτρέποντας την πρόσβαση μόνο μέσω καθορισμένων μεθόδων και αποτρέποντας την απευθείας τροποποίησή τους.

## 🔹 Παράδειγμα Κώδικα:

Ας δούμε ένα παράδειγμα απλής κλάσης στην Python:

```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def drive(self):
        return f"{self.brand} {self.model} 🚗💨 ξεκινάει!"

my_car = Car("Tesla", "Model S")
print(my_car.drive())  # Tesla Model S 🚗💨 ξεκινάει!
```

## 🔹 Κληρονομικότητα:

Η κληρονομικότητα επιτρέπει τη δημιουργία νέων κλάσεων που κληρονομούν χαρακτηριστικά από υπάρχουσες κλάσεις.

```python
class ElectricCar(Car):
    def __init__(self, brand, model, battery_capacity):
        super().__init__(brand, model)
        self.battery_capacity = battery_capacity

    def charge(self):
        return f"{self.brand} {self.model} φορτίζεται ⚡ ({self.battery_capacity} kWh)"

my_electric_car = ElectricCar("Tesla", "Model 3", 75)
print(my_electric_car.drive())  # Tesla Model 3 🚗💨 ξεκινάει!
print(my_electric_car.charge())  # Tesla Model 3 φορτίζεται ⚡ (75 kWh)
```

## 🔹 Πολυμορφισμός:

Ο πολυμορφισμός επιτρέπει τη χρήση μιας κοινής μεθόδου με διαφορετική συμπεριφορά ανάλογα με το αντικείμενο.

```python
class Motorcycle:
    def __init__(self, brand):
        self.brand = brand

    def drive(self):
        return f"{self.brand} 🏍💨 ξεκινάει!"

vehicles = [Car("Ford", "Mustang"), ElectricCar("Nissan", "Leaf", 40), Motorcycle("Ducati")]

for vehicle in vehicles:
    print(vehicle.drive())
```

## 🔹 Ενθυλάκωση:

Η ενθυλάκωση διασφαλίζει ότι τα δεδομένα μιας κλάσης δεν τροποποιούνται απευθείας από εξωτερικό κώδικα.

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Ιδιωτική μεταβλητή

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return f"Κατάθεση {amount}€. Νέο υπόλοιπο: {self.__balance}€"
        return "Το ποσό πρέπει να είναι θετικό!"

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return f"Ανάληψη {amount}€. Υπόλοιπο: {self.__balance}€"
        return "Μη έγκυρο ποσό!"

    def get_balance(self):
        return f"Υπόλοιπο λογαριασμού: {self.__balance}€"

account = BankAccount("Αντώνης", 1000)
print(account.deposit(200))  # Κατάθεση 200€. Νέο υπόλοιπο: 1200€
print(account.withdraw(500))  # Ανάληψη 500€. Υπόλοιπο: 700€
print(account.get_balance())  # Υπόλοιπο λογαριασμού: 700€
```

---

Με τη χρήση των αρχών του OOP, ο κώδικας γίνεται πιο οργανωμένος, πιο ασφαλής και πιο ευέλικτος. 🚀
