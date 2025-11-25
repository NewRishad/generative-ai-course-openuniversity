node Person {
    has name: str;

    can greet with Visitor entry {
        print(f"{self.name} says: Welcome visitor");
    }
}

walker Visitor {
    can start with `root entry {
        print("The walker has spawned");
        visit [-->];
    }
    can greet with Person entry {
        print(f"Visitor says: Hello! {here.name}");
        visit [-->];
    }
}

with entry {
    alice = Person(name="Alice");
    root ++> alice;
    root spawn Visitor();
}