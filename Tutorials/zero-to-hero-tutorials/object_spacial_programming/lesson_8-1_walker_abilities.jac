walker MyWalker {
    # runs when the walker spawns at root
    can start with `root entry {
        #...
    }

    can meet_people with Person entry {
        #There are 2 key words to remember here
        # here -> refers to the current node
        # self -> refers to the walker 
    }

    can explore with Person entry {
        # there is also the `visit` statement that tells the walker where to go
        
        # Different visit patterns:
        visit [-->];          # Visit all outgoing connections
        # visit [<--];        # Visit all incoming connections
        # visit [<-->];       # Visit all connections (both directions)
    }

    # Runs when the walker is done
    can finish with exit {
        #...
    }
}

# There is also the `visitor` key word which we can use to access the walker from the node being visited
# Check lesson_8_walkers.jac for an example of it in use