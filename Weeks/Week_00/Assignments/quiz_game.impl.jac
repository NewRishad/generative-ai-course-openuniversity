# accuracy_checker.impl.jac

impl AccuracyChecker.start {
    # Traversal logic copied directly from your working poem code
    if not [here --> (`?turn)] {
        next = here ++> turn();
    } else {
        next = [here --> (`?turn)];
    }
    visit next;
}

impl AccuracyChecker.write -> none action { 
    # The 'action' keyword is necessary for Python code.
    # Removed f-string, using simple string concatenation instead.
    print("\n--- Checking Claim: " + self.claim + " ---");
    print(check_accuracy(self.claim));
    print("------------------------------------------");
    disengage;
}
