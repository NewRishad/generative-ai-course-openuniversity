 # Traditional OOP approach

 # See bottom for issues with this approach

 obj Person {
    has name: str;
    has friends: list = []; # List of other Person Objects

    def add_friend(person: object) {
        self.friends.append(person);
        person.friends.append(self); # make it mutual
    }
 }

 with entry {
    alice = Person(name="Alice");
    bob = Person(name="Bob");
    charlie = Person(name="Charlie");

    # create friendships mutually
    alice.add_friend(bob);
    alice.add_friend(charlie);
    bob.add_friend(charlie);

    # find friends manually
    print(f"{alice.name}'s friends:");
    for friend in alice.friends {
        print(f" - {friend.name}");
    }
 }

# Problems with Traditional OOP approach

# 1. Verbose: Lots of boilerplate code.
# 2. Error-prone: Easy to forget to update both sides.
# 3. Rigid: Hard to represent complex relationships.
# 4. No visual: Relationships are hidden inside lists.

