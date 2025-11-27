# Backend - Data Model
node Todo {
    has text: str;
    has done: bool = False;
}

# Backend - Walkers
walker read_todos {
    can read with `root entry {
        visit [-->(`?Todo)];  # tf does this mean? walk until you see todos?
    }

    can report_todos with Todo entry {
        report here;
    }
}

# Backend - Walker for adding Todos
walker create_todo {
    has text: str;

    can create with `root entry {
        new_todo = here ++> Todo(text=self.text);
        report new_todo;
    }
}

# Backend - Walker to Toggle and Delete
walker toggle_todo {
    can toggle with Todo entry {
        here.done = not here.done;
        report here;
    }
}

# Backend - Walker to Delete
walker delete_todo {
    can delete with Todo entry {
        report here;
        del here;
    }
}

# Frontend
cl import from react {useState, useEffect} # add cl to beginning and no semi-colon at the end
cl import from "@jac-client/utils" {
    Router,
    Routes,
    Route,
    Link,
    Navigate,
    useNavigate,
    jacLogin,
    jacSignup,
    jacLogout,
    jacIsLoggedIn
}

cl {
    # Navigation Component
    def Navigation() -> any {
        let isLoggedIn = jacIsLoggedIn();

        if isLoggedIn {
            return <nav style={{
                "padding": "12px 24px",
                "background": "#3b82f6",
                "color": "#ffffff",
                "display": "flex",
                "justifyContent": "space-between"
            }}>
                <div style={{"fontWeight": "600"}}>Todo App</div>
                <div style={{"display": "flex", "gap": "16px"}}>
                    <Link to="/todos" style={{
                    "color": "#ffffff",
                    "textDecoration": "none"
                    }}>
                        Todos
                    </Link>
                    <button 
                        onClick={lambda e: any -> None {
                            e.preventDefault(); # removes all default actions
                            jacLogout();
                            window.location.href = "/page/app#/login"; # tf is this #
                        }}
                        style={{
                            "background": "none",
                            "color": "#ffffff",
                            "border": "1px solid #ffffff",
                            "padding": "2px 10px",
                            "borderRadius": "4px",
                            "cursor": "pointer"
                        }}
                        >
                            Logout
                        </button>
                </div>
            </nav>;
        }

        return <nav style={{
            "padding": "12px 24px",
            "background": "#3b82f6",
            "color": "#ffffff",
            "display": "flex",
            "justifyContent": "space-between"
        }}>
            <div style={{"fontWeight": "600"}}>Todo App</div>
            <div style={{"display": "flex", "gap": "16px"}}>
            # Link is prefered as it does not reload the page
            # Alt = <a href="/login"> Go to Login</a> # this causes the page to reload
                <Link to="/login" style={{
                    "color": "#ffffff",
                    "textDecoration": "none"
                }}>
                    Login
                </Link>
                <Link to="/signup" style={{
                    "color": "#ffffff",
                    "textDecoration": "none"
                }}>
                    Sign Up
                </Link>
            </div>
        </nav>;
    }

    # 404 Not found page
    def NotFoundPage() -> any {
        return <div style={{
            "textAlign": "center",
            "padding": "50px"
        }}>
            <h1>404 - Page Not Found</h1>
            <Link to="/">Go Home</Link>
        </div>;
    }

    # Home Page Componenet
    def HomePage() -> any {
        if jacIsLoggedIn() {
            # Navigate Redirects programmatically
            return <Navigate to="/todos" />;
        }
        return <Navigate to="/login" />;
    }


    # Login page Componenet
    def LoginPage() -> any {
        let [username, setUsername] = useState("");
        let [password, setPassword] = useState("");
        let [error, setError] = useState("");

        # Check if already logged in
        if jacIsLoggedIn() {
            return <div style={{"padding": "20px"}}>
                <h2>You're already logged in</h2>
                <button onClick={lambda -> None { jacLogout(); }}>
                    Logout
                </button>
            </div>;
        }

        async def handleLogin(e: any) -> None {
            e.preventDefault();
            setError("");

            if not username or not password {
                setError("Please fill in all fields");
                return;
            }

            success = await jacLogin(username, password);
            if success {
                # Navigate to todo 
                window.location.href = "/page/app#/todos"; # What is the # about after app
            } else {
                setError("Invalid credentials");
            }
        }

        def handleUsernameChange(e: any) -> None {
            setUsername(e.target.value);
        }

        def handlePasswordChange(e: any) -> None {
            setPassword(e.target.value);
        }

        let errorDisplay = None;
        if error {
            errorDisplay = <div style={{
                "color": "#dc2626",
                "fontSize": "14px",
                "marginBottom": "10px"
            }}>
                {error}
            </div>;
        }

        return <div style={{
            "minHeight": "100vh",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "background": "#f5f5f5"
        }}>
            <div style={{
                "background": "#ffffff",
                "padding": "30px",
                "borderRadius": "8px",
                "width": "280px",
                "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
            }}>
                <h2 style={{"marginBottom": "20px"}}>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Username"
                        style={{
                            "width": "100%",
                            "padding": "8px",
                            "marginBottom": "10px",
                            "border": "1px solid #ddd",
                            "borderRadius": "4px",
                            "boxSizing": "border-box"
                        }}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        style={{
                            "width": "100%",
                            "padding": "8px",
                            "marginBottom": "10px",
                            "border": "1px solid #ddd",
                            "borderRadius": "4px",
                            "boxSizing": "border-box"
                        }}
                    />
                    {errorDisplay}
                    <button
                        type="submit"
                        style={{
                            "width": "100%",
                            "padding": "8px",
                            "background": "#3b82f6",
                            "color": "#ffffff",
                            "border": "none",
                            "borderRadius": "4px",
                            "cursor": "pointer",
                            "fontWeight": "600"
                        }}
                    >
                        Login
                    </button>
                </form>
                <p style={{
                    "textAlign": "center",
                    "marginTop": "12px",
                    "fontSize": "14px"
                }}>
                    Need an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>;
    }

    # SignUp page Component
    def SignupPage() -> any {
       let [username, setUsername] = useState("");
        let [password, setPassword] = useState("");
        let [error, setError] = useState("");

        async def handleSignup(e: any) -> None {
            e.preventDefault();
            setError("");

            if not username or not password {
                setError("Please fill in all fields");
                return;
            }

            result = await jacSignup(username, password);
            if result["success"] {
                # window.location.href = "/page/app#/login"
                window.location.href = "/page/app#/todos"; # I guess this has a better user experience
                
                # but shouldn't we log in the user so he passed the TodoPage login checher?
    
            } else {
                # interesting way of recieving the error message
                setError(result["error"] if result["error"] else "Signup failed");
            }
        }

        def handleUsernameChange(e: any) -> None {
            setUsername(e.target.value);
        }

        def handlePasswordChange(e: any) -> None {
            setPassword(e.target.value);
        }

        let errorDisplay = None;
        if error {
            errorDisplay = <div style={{
                "color": "#dc2626",
                "fontSize": "14px",
                "marginBottom": "10px"
            }}>
                {error}
            </div>;
        }

        return <div style={{
            "minHeight": "100vh",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "background": "#f5f5f5"
        }}>
            <div style={{
                "background": "#ffffff",
                "padding": "30px",
                "borderRadius": "8px",
                "width": "280px",
                "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
            }}>
                <h2 style={{"marginBottom": "20px"}}>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Username"
                        style={{
                            "width": "100%",
                            "padding": "8px",
                            "marginBottom": "10px",
                            "border": "1px solid #ddd",
                            "borderRadius": "4px",
                            "boxSizing": "border-box"
                        }}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        style={{
                            "width": "100%",
                            "padding": "8px",
                            "marginBottom": "10px",
                            "border": "1px solid #ddd",
                            "borderRadius": "4px",
                            "boxSizing": "border-box"
                        }}
                    />
                    {errorDisplay}
                    <button
                        type="submit"
                        style={{
                            "width": "100%",
                            "padding": "8px",
                            "background": "#3b82f6",
                            "color": "#ffffff",
                            "border": "none",
                            "borderRadius": "4px",
                            "cursor": "pointer",
                            "fontWeight": "600"
                        }}
                    >
                        Sign Up
                    </button>
                </form>
                <p style={{
                    "textAlign": "center",
                    "marginTop": "12px",
                    "fontSize": "14px"
                }}>
                    Have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>;
    }

    # Component 1: Todo Input
    def TodoInput(props: any) -> any {
        return <div style={{
            "display": "flex",
            "gap": "8px",
            "marginBottom": "16px"
        }}>
            <input
                type="text"
                value={props.input}
                onChange={lambda e: any -> None {
                    props.setInput(e.target.value);
                }}
                onKeyPress={lambda e: any -> None {
                    if e.key == "Enter" {
                        props.addTodo();
                    }
                }}
                placeholder="What needs to be done?"
                style={{
                    "flex": "1",
                    "padding": "8px",
                    "border": "1px solid #ddd",
                    "borderRadius": "4px"
                }}
            />
            <button
                onClick={lambda e: any -> None {
                    props.addTodo();
                }}
                style={{
                    "padding": "8px 16px",
                    "background": "#3b82f6",
                    "color": "white",
                    "border": "none",
                    "borderRadius": "4px",
                    "cursor": "pointer"
                }}
            >
                Add
            </button>
        </div>;
    }

    # Component 2: Filter Buttons
    def TodoFilters(props: any) -> any {
        return <div style={{
            "display": "flex",
            "gap": "8px",
            "marginBottom": "16px"
        }}>
            <button
                onClick={lambda e: any -> None {
                    props.setFilter("all");
                }}
                style={{
                    "padding": "6px 12px",
                    "background": ("#3b82f6" if props.filter == "all" else "#e5e7eb"),
                    "color": ("#ffffff" if props.filter == "all" else "#000000"),
                    "border": "none",
                    "borderRadius": "4px",
                    "cursor": "pointer"
                }}
            >
                All
            </button>
            <button
                onClick={lambda e: any -> None {
                    props.setFilter("active");
                }}
                style={{
                    "padding": "6px 12px",
                    "background": ("#3b82f6" if props.filter == "active" else "#e5e7eb"),
                    "color": ("#ffffff" if props.filter == "active" else "#000000"),
                    "border": "none",
                    "borderRadius": "4px",
                    "cursor": "pointer"
                }}
            >
                Active
            </button>
            <button
                onClick={lambda e: any -> None {
                    props.setFilter("completed");
                }}
                style={{
                    "padding": "6px 12px",
                    "background": ("#3b82f6" if props.filter == "completed" else "#e5e7eb"),
                    "color": ("#ffffff" if props.filter == "completed" else "#000000"),
                    "border": "none",
                    "borderRadius": "4px",
                    "cursor": "pointer"
                }}
            >
                Completed
            </button>
        </div>;
    }


    # Component 3: Single Todo Item
    def TodoItem(props: any) -> any {
        return <div style={{
            "display": "flex",
            "alignItems": "center",
            "gap": "10px",
            "padding": "10px",
            "borderBottom": "1px solid #e5e7eb"
        }}>
            <input
                type="checkbox"
                checked={props.done}
                onChange={lambda e: any -> None {
                    props.toggleTodo(props.id);
                }}
                style={{"cursor": "pointer"}}
            />
            <span style={{
                "flex": "1",
                "textDecoration": ("line-through" if props.done else "none"),
                "color": ("#999" if props.done else "#000")
            }}>
                {props.text}
            </span>
            <button
                onClick={lambda e: any -> None {
                    props.deleteTodo(props.id);
                }}
                style={{
                    "padding": "4px 8px",
                    "background": "#ef4444",
                    "color": "white",
                    "border": "none",
                    "borderRadius": "4px",
                    "cursor": "pointer",
                    "fontSize": "12px"
                }}
            >
                Delete
            </button>
        </div>;
    }

    # Component 4: Todo List (renders multiple TodoItems)
    def TodoList(props: any) -> any {
        let hasTodos = true;

        if not hasTodos {
            return <div style={{
                "padding": "20px",
                "textAlign": "center",
                "color": "#999"
            }}>
                No todos yet. Add one above!
            </div>;
        }

            return <div>
            <TodoItem text="Learn Jac basics" done={true} />
            <TodoItem text="Build a todo app" done={false} />
            <TodoItem text="Deploy to production" done={false} />
        </div>;
        }

    # Main App
    def TodosPage() -> any {
        # Redirect if not logged in
        if not jacIsLoggedIn() {
            return <Navigate to="/login" />;
        }

        let [todos, setTodos] = useState([]);
        let [input, setInput] = useState("");
        let [filter, setFilter] = useState("all");
        let [loading, setLoading] = useState(false);
        let [lastSaved, setLastSaved] = useState(None);

        # Run once when component mounts
        # useEffect(lambda -> None {
        #     console.log("App loaded!");
        # }, []);

        # Load todos from backend when app mounts
        useEffect(lambda -> None {
            async def loadTodos() -> None {
                result = root spawn read_todos();
                setTodos(result.reports if result.reports else []);
                console.log("Todo array", todos);
                console.log("results", result);
            }
            loadTodos();
        }, []);

        # Load todos from localStorage when app mounts
        # useEffect(lambda -> None {
        #     console.log("Loading todos...");

        #     # Simulate loading delay
        #     setTimeout(lambda -> None {
        #         let saved = localStorage.getItem("todos");
        #         if saved {
        #             let parsed = JSON.parse(saved);
        #             setTodos(parsed);
        #         }
        #         setLoading(false);
        #     }, 2000);
        # }, []);

        # Save todos to localStorage whenever they change
        useEffect(lambda -> None {
            if not loading and todos.length > 0 {
                localStorage.setItem("todos", JSON.stringify(todos));
                # setLastSaved(Date().toLocaleTimeString());
            }
        }, [todos]);


        # Add todo
        async def addTodo() -> None {  # good practice to use async when calling backend code
            if not input.trim() {
                return;
            }

            # let newTodo = {
            #     "id": Date.now(),  # Use timestamp as unique ID
            #     "text": input.trim(),
            #     "done": false
            # };
            # setTodos(todos.concat([newTodo]));

            # Call backend walker
            result = root spawn create_todo(text=input.trim());
            
            # Add the new todo to local state
            setTodos(todos.concat([result.reports[0][0]]));
            setInput("");
        }

        # Toggle todo
        async def toggleTodo(id: any) -> None {
            # Call backend Walker
            id spawn toggle_todo();

            # Update the local state
            setTodos(todos.map(lambda todo: any -> any {
                if todo._jac_id == id {
                    return {
                        "_jac_id": todo._jac_id,
                        "text": todo.text,
                        "done": not todo.done
                    };
                }
                return todo;
            }));
        }

        # Delete todo
        async def deleteTodo(id: any) -> None {
            # setTodos(todos.filter(lambda todo: any -> bool {
            #     return todo["id"] != id;
            # }));

            # Call the backend walker
            id spawn delete_todo();        # why is this commented out? only deletes in local state

            setTodos(todos.filter(lambda todo: any -> bool {
                return todo._jac_id != id;
            }));
        }

        # Filter todos based on current filter
        def getFilteredTodos() -> list {
            if filter == "active" {
                return todos.filter(lambda todo: any -> bool {
                    return not todo["done"];
                });
            } elif filter == "completed" {
                return todos.filter(lambda todo: any -> bool {
                    return todo["done"];
                });
            }
            return todos;
        }

        filteredTodos = getFilteredTodos();

         if loading {
            return <div style={{
                "display": "flex",
                "justifyContent": "center",
                "alignItems": "center",
                "height": "100vh"
            }}>
                <h2>Loading todos...</h2>
            </div>;
        }

        return <div style={{
            "maxWidth": "600px",
            "margin": "20px auto",
            "padding": "20px"
        }}>
            <h1>My Todos</h1>
            <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
            <TodoFilters filter={filter} setFilter={setFilter} />

            <div>
                {filteredTodos.map(lambda todo: any -> any {
                    return <TodoItem
                        key={todo._jac_id}
                        id={todo._jac_id}
                        text={todo.text}
                        done={todo.done}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />;
                })}
            </div>
        </div>;
    }

    def app() -> any {
        return <Router>
            <div style={{"fontFamily": "system-ui, sans-serif"}}>
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/todos" element={<TodosPage />} />
                    # Putting it at the end catches everything else
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </Router>;
    }
}