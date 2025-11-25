# Square brackets [] let you query connections
node User {
    has name: str;
}

node Skills {
    has skill: str;
}
edge Currently_has {
    has something: str;
}

edge Friend {
    has since: int;
}
edge Rival {
    has since: int;
    has reason: str;
}

with entry {
    alice = Person(name="Alice");
    bob = Person(name="Bob");
    charlie = Person(name="Charlie");
    kevin = Person(name="Kevin");


    alice +>:Friend(since=2015):+>bob;
    alice +>:Friend(since=2020):+>charlie;
    alice +>:Rival(since=2000, reason="Stole the moon!"):+>kevin;

    # Get all friends
    all_friends = [alice ->:Friend:->]; # [Person(name='Bob'), Person(name='Charlie')]
    print(f"Alice has {len(all_friends)} friends");

    # Get specific type of connections
    friends = [alice ->:Friend:->];
    for friend in friends {
        print(friend.name);
    }

    # Get all rivals
    all_rivals = [alice ->:Rival:->];
    print(f"Alice has {len(all_rivals)} rivals");

    # Filter by edge properties
    old_friends = [alice ->:Friend:since < 2018:->];
    print("Alices old friend",old_friends[0].name);
}