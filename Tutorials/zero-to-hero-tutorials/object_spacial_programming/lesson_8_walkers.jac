node Person {
    has name: str;

    can on_greet with Greeter entry {
        print(f"I am {self.name} and the walker:{visitor} is visiting me!");
    }
}

# Walkers are objects that move through the graph, visiting nodes and performing actions
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

# Personal Summary
# The walker can be used in 2 ways:
    # 1. You can send it to look through specific nodes (maybe even relationships) and have it perform a certain function
    # 2. They can also be referenced in the calling object to do a specific behaviour in that node. 
        # The example here is the Person node printing it's information along with the walker info