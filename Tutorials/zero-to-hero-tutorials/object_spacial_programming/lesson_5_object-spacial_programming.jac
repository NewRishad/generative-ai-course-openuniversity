# Three pillars of Object-Spacial Programming

# 1. Node: Data locations in the Graph
# 2. Edge: First-class relationships
# 3. Walker: Mobile computation units -> (Analogy): Person travelling

# Creating Nodes (It's like a class but they can be connected in a graph)

node Person {
    has name: str;
    has age: int;
}

with entry {
    # Create node instances
    alice = Person(name="Alice", age=25);
    bob = Person(name="Bob", age=30);
    charlie = Person(name="Charlie", age=28);

    # To connect nodes we use the `++>`, `<++`, or '<++>' operators
    # connect them! (Create edges)
    alice ++> bob;      # Alice -> Bob
    alice ++> charlie;  # ALice -> Charlie
    bob <++> charlie;    # Bob <-> Charlie

    # That's it! You've built a graph!

    # root is a special global node
    # That is always available (more on it later)
    root ++> alice;
    print(self.graph);
}