# Like Class but ..
# Obects are automatically initialized with their `has` attributes as parameters

# Based on hello_class.jac for the sake of showing the similarity
'''
obj Dog {
    has name: str;
    has age: int;

    def bark {
        print(f"{self.name} says Woof!");
    }
    def birthday {
        self.age += 1;
        print(f"Happy birthday! {self.name} is now {self.age}");
    }
}

with entry {
    my_dog = Dog(name="Buddy", age=3);
    my_dog.bark();
    my_dog.birthday();
}
'''
# Using obj to group relational data
obj BankAccount {
    has balance: float = 0.0;

    def deposit(amount: float) {
        self.balance += amount;
        print(f"Deposited ${amount}. New balance: ${self.balance}");
    }

    def withdraw(amount: float) {
        if amount <= self.balance {
            self.balance -= amount;
            print(f"Deposited ${amount}. New balance: ${self.balance}");
        } else {
            print("Insufficient funds!");
        }
    }
}

with entry {
    account = BankAccount();
    account.deposit(100);
    account.withdraw(30);
    account.withdraw(80);
}