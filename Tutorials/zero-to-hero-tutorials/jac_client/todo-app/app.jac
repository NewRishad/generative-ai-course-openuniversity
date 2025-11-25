cl import from react {useState, useEffect} # add cl to beginning and no semi-colon at the end

cl {
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
    def app() -> any {
        let [todos, setTodos] = useState([]);
        let [input, setInput] = useState("");
        let [filter, setFilter] = useState("all");
        let [loading, setLoading] = useState(true);
        let [lastSaved, setLastSaved] = useState(None);

        # Run once when component mounts
        # useEffect(lambda -> None {
        #     console.log("App loaded!");
        # }, []);

        # Load todos from localStorage when app mounts
        useEffect(lambda -> None {
            console.log("Loading todos...");

            # Simulate loading delay
            setTimeout(lambda -> None {
                let saved = localStorage.getItem("todos");
                if saved {
                    let parsed = JSON.parse(saved);
                    setTodos(parsed);
                }
                setLoading(false);
            }, 2000);
        }, []);

        # Save todos to localStorage whenever they change
        useEffect(lambda -> None {
            if not loading and todos.length > 0 {
                localStorage.setItem("todos", JSON.stringify(todos));
                # setLastSaved(Date().toLocaleTimeString());
            }
        }, [todos]);


        # Add todo
        def addTodo() -> None {
            if not input.trim() {
                return;
            }

            let newTodo = {
                "id": Date.now(),  # Use timestamp as unique ID
                "text": input.trim(),
                "done": false
            };

            setTodos(todos.concat([newTodo]));
            setInput("");
        }

        # Toggle todo
        def toggleTodo(id: any) -> None {
            setTodos(todos.map(lambda todo: any -> any {
                if todo["id"] == id {
                    return {
                        "id": todo["id"],
                        "text": todo["text"],
                        "done": not todo["done"]
                    };
                }
                return todo;
            }));
        }

        # Delete todo
        def deleteTodo(id: any) -> None {
            setTodos(todos.filter(lambda todo: any -> bool {
                return todo["id"] != id;
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
                        key={todo["id"]}
                        id={todo["id"]}
                        text={todo["text"]}
                        done={todo["done"]}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />;
                })}
            </div>
        </div>;
    }
}