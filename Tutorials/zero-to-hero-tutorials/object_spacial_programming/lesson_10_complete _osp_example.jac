node User {
    has username: str;
    has age: int;
    has interests: list;
}
edge Friendship {
    has since: int;
    has strength: int = 1; # how close they are (1 - 10)
}
walker FriendRecommender {
    has recommendations: list = [];

    can start with `root entry {
        visit [-->];
    }
    can find_recommendations with User entry {
        print(f"Finding recommendations for {here.username}...");
        # visit friends of friends (2 hops)
        potential_friends = [here ->:Friendship:-> ->:Friendship:->];   # the problem is here?

        # get current friends to exclude
        current_friends = [here ->:Friendship:->];

        for person in potential_friends {
            # Don't recommend current friends or self\
            if person not in current_friends and person != here {
                self.recommendations.append(person.username);
            }
        }
        disengage;
    }
}
    # walker to find friends by interest
    walker interestMatcher {
        has target_interest: str;
        has matches: list = [];

        can start with `root entry {
            visit[-->];
        }
        can find with User entry {
            if self.target_interest in here.interests {
                self.matches.append(here.username);
            }
            visit[-->];
        }
    }

    with entry {
         # Create users
    alice = User(
        username="alice",
        age=25,
        interests=["coding", "hiking", "photography"]
    );

    bob = User(
        username="bob",
        age=28,
        interests=["coding", "gaming"]
    );

    charlie = User(
        username="charlie",
        age=26,
        interests=["hiking", "reading"]
    );

    dana = User(
        username="dana",
        age=27,
        interests=["photography", "travel"]
    );

    # Build social graph
    root ++> alice;
    root ++> bob;
    root ++> charlie;
    root ++> dana;

    alice +>:Friendship(since=2020, strength=8):+> bob;
    bob +>:Friendship(since=2021, strength=6):+> charlie;
    alice +>:Friendship(since=2019, strength=9):+> dana;

    # Find friend recommendations for bob
    recommender = FriendRecommender();
    bob spawn recommender;
    print(f"Recommendations for bob: {recommender.recommendations}");
    
    #find users interested in hiking
    hiking_users = interestMatcher(target_interest="hiking");
    root spawn hiking_users;
    print(f"Users who are into hiking: {hiking_users.matches}");
    }