
# Pages
cl import from react {useState, useEffect}
cl {
    # A componenet to display a single todo
    def TodoItem(props: any) -> any {
        return 
        <div>
            <input type="checkbox" checked={props.done}/>
            <span>{props.text}</span>
            <button>Delete</button>
        </div>;
    }

    def app() -> any {
        return 
        <div>
            <h1>My Todos</h1>
            <TodoItem text="Learn Jac basics" done={true}/>
            <TodoItem text="Build a todo app" done={false}/>
            <TodoItem text="Deploy to production" done={false}/>
        </div>;
    }
}
