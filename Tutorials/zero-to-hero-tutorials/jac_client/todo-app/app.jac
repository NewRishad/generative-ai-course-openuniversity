
# Pages
cl import from react {useState, useEffect}
cl {
    # Component 1: TodoInput (input field + Add button)
    def TodoInput(props: any) -> any {
        let containerStyle = {
            "display": "flex",
            "gap": "8px",
            "marginBottom": "16px"
        };
        let inputStyle = {
                    "flex": "1",
                    "padding": "8px",
                    "border": "1px solid #ddd",
                    "borderRadius": "4px"
                };
        let buttonStyle = {
                "padding": "8px 16px",
                "background": "#3b82f6",
                "color": "#ffffff",
                "border": "none",
                "borderRadius": "4px",
                "cursor": "pointer",
                "fontWeight": "600"
            };
        return <div style={containerStyle}>
        <input style={inputStyle} type="text" placeholder="What needs to be done?" />
        <button style={buttonStyle}>Add</button>
        </div>;
    }

    # Component 2: TodoFilters (fileter buttons)
    def TodoFilters(props: any) -> any {
        return <div style={{
            "display": "flex",
            "gap": "8px",
            "marginBottom": "16px"
        }}>
            <button style={{
                "padding": "6px 12px",
                "background": "#3b82f6",
                "color": "#ffffff",
                "border": "none",
                "borderRadius": "4px",
                "cursor": "pointer",
                "fontSize": "14px"
            }}>
                All
            </button>
            <button style={{
                "padding": "6px 12px",
                "background": "#e5e7eb",
                "color": "#000000",
                "border": "none",
                "borderRadius": "4px",
                "cursor": "pointer",
                "fontSize": "14px"
            }}>
                Active
            </button>
            <button style={{
                "padding": "6px 12px",
                "background": "#e5e7eb",
                "color": "#000000",
                "border": "none",
                "borderRadius": "4px",
                "cursor": "pointer",
                "fontSize": "14px"
            }}>
                Completed
            </button>
        </div>;
    }

    # Component 3: TodoItem (single todo)
    def TodoItem(props: any) -> any {
        let containerStyle = {
            "display": "flex",
            "alignItems": "center",
            "gap": "10px",
            "padding": "10px",
            "borderBottom": "1px solid #e5e7eb"
        };
        let spanStyle = {
                "flex": "1",
                "textDecoration": ("line-through" if props.done else "none"),
                "color": ("#999" if props.done else "#000")
            };
        let buttonStyle = {
                "padding": "4px 8px",
                "background": "#ef4444",
                "color": "#ffffff",
                "border": "none",
                "borderRadius": "4px",
                "cursor": "pointer",
                "fontSize": "12px"
            };
        return 
        <div style={containerStyle}>
            <input type="checkbox" checked={props.done}/>
            <span style={spanStyle}>{props.text}</span>
            <button style={buttonStyle}>Delete</button>
        </div>;
    }

    # Component 4: TodoList (list of todos)
    def TodoList(props: any) -> any {
        return <div>
            <TodoItem text="Learn Jac basics" done={true}/>
            <TodoItem text="Build a todo app" done={false}/>
            <TodoItem text="Deploy to production" done={false}/>
        </div>;
    }

    # Component 5: Todo stats
    def TodoStats(props: any) -> any {
        return <div>
        <p>Total: {props.total}</p>
        <p>Completed: {props.completed}</p>
        </div>;
    }

    def app() -> any {
        return 
        <div style=  {{"padding": "20px"}}>
            <h1>My Todos</h1>
            <TodoStats />
            <TodoInput />
            <TodoFilters />
            <TodoList />
        </div>;
    }
}
