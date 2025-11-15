node Person {
    has name: str;

    can on_greet with Greeter entry {
        print(f"I am {self.name} and the walker:{visitor} is visiting me!");
    }
}
# Walkers are objects that move through the graph, visiting nodes 
# and performing actions
walker Greeter {
    # Runs when walker spawns at root
    can start with `root entry {
        print("Walker starting journey!");
        visit[-->]; # Visit all connected nodes
    }
    # Runs when walker visits ANY person node
    can greet with Person entry { # these are called abilites
        print(f"Hello, {here.name}!");
        visit[-->]; # Visit this person's connections
    }
    # Runs when walker is done
    can finish with exit {
        print("Walker has finished its journey!");
    }
}

with entry {
    # Build graph
    alice = Person(name="Alice");
    bob = Person(name="Bob");
    charlie = Person(name="Charlie");

    root ++> alice ++> bob ++> charlie;
    
    # Spawn walker
    root spawn Greeter();
}