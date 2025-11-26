import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
import { jacLogin, jacSignup, jacLogout, jacIsLoggedIn } from "@jac-client/utils";
function LoginPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    let success = await jacLogin(username, password);
    if (success) {
      console.log("Login successful!");
    } else {
      setError("Invalid credentials");
    }
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  let errorDisplay = null;
  if (error) {
    errorDisplay = __jacJsx("div", {"style": {"color": "#dc2626", "fontSize": "14px", "marginBottom": "10px"}}, [error]);
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "#f5f5f5"}}, [__jacJsx("div", {"style": {"background": "#ffffff", "padding": "30px", "borderRadius": "8px", "width": "280px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h2", {"style": {"marginBottom": "20px"}}, ["Login"]), __jacJsx("form", {"onSubmit": handleLogin}, [__jacJsx("input", {"type": "text", "value": username, "onChange": handleUsernameChange, "placeholder": "Username", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), __jacJsx("input", {"type": "password", "value": password, "onChange": handlePasswordChange, "placeholder": "Password", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), errorDisplay, __jacJsx("button", {"type": "submit", "style": {"width": "100%", "padding": "8px", "background": "#3b82f6", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontWeight": "600"}}, ["Login"])]), __jacJsx("p", {"style": {"textAlign": "center", "marginTop": "12px", "fontSize": "14px"}}, ["Need an account? Sign up link here"])])]);
}
function SignupPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }
    let result = await jacSignup(username, password);
    if (result["success"]) {
      console.log("Signup successful!");
    } else {
      setError(result["error"] ? result["error"] : "Signup failed");
    }
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  let errorDisplay = null;
  if (error) {
    errorDisplay = __jacJsx("div", {"style": {"color": "#dc2626", "fontSize": "14px", "marginBottom": "10px"}}, [error]);
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "#f5f5f5"}}, [__jacJsx("div", {"style": {"background": "#ffffff", "padding": "30px", "borderRadius": "8px", "width": "280px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h2", {"style": {"marginBottom": "20px"}}, ["Sign Up"]), __jacJsx("form", {"onSubmit": handleSignup}, [__jacJsx("input", {"type": "text", "value": username, "onChange": handleUsernameChange, "placeholder": "Username", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), __jacJsx("input", {"type": "password", "value": password, "onChange": handlePasswordChange, "placeholder": "Password", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), errorDisplay, __jacJsx("button", {"type": "submit", "style": {"width": "100%", "padding": "8px", "background": "#3b82f6", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontWeight": "600"}}, ["Sign Up"])]), __jacJsx("p", {"style": {"textAlign": "center", "marginTop": "12px", "fontSize": "14px"}}, ["Have an account? Login link here"])])]);
}
function TodoInput(props) {
  return __jacJsx("div", {"style": {"display": "flex", "gap": "8px", "marginBottom": "16px"}}, [__jacJsx("input", {"type": "text", "value": props.input, "onChange": e => {
    props.setInput(e.target.value);
  }, "onKeyPress": e => {
    if (e.key === "Enter") {
      props.addTodo();
    }
  }, "placeholder": "What needs to be done?", "style": {"flex": "1", "padding": "8px", "border": "1px solid #ddd", "borderRadius": "4px"}}, []), __jacJsx("button", {"onClick": e => {
    props.addTodo();
  }, "style": {"padding": "8px 16px", "background": "#3b82f6", "color": "white", "border": "none", "borderRadius": "4px", "cursor": "pointer"}}, ["Add"])]);
}
function TodoFilters(props) {
  return __jacJsx("div", {"style": {"display": "flex", "gap": "8px", "marginBottom": "16px"}}, [__jacJsx("button", {"onClick": e => {
    props.setFilter("all");
  }, "style": {"padding": "6px 12px", "background": props.filter === "all" ? "#3b82f6" : "#e5e7eb", "color": props.filter === "all" ? "#ffffff" : "#000000", "border": "none", "borderRadius": "4px", "cursor": "pointer"}}, ["All"]), __jacJsx("button", {"onClick": e => {
    props.setFilter("active");
  }, "style": {"padding": "6px 12px", "background": props.filter === "active" ? "#3b82f6" : "#e5e7eb", "color": props.filter === "active" ? "#ffffff" : "#000000", "border": "none", "borderRadius": "4px", "cursor": "pointer"}}, ["Active"]), __jacJsx("button", {"onClick": e => {
    props.setFilter("completed");
  }, "style": {"padding": "6px 12px", "background": props.filter === "completed" ? "#3b82f6" : "#e5e7eb", "color": props.filter === "completed" ? "#ffffff" : "#000000", "border": "none", "borderRadius": "4px", "cursor": "pointer"}}, ["Completed"])]);
}
function TodoItem(props) {
  return __jacJsx("div", {"style": {"display": "flex", "alignItems": "center", "gap": "10px", "padding": "10px", "borderBottom": "1px solid #e5e7eb"}}, [__jacJsx("input", {"type": "checkbox", "checked": props.done, "onChange": e => {
    props.toggleTodo(props.id);
  }, "style": {"cursor": "pointer"}}, []), __jacJsx("span", {"style": {"flex": "1", "textDecoration": props.done ? "line-through" : "none", "color": props.done ? "#999" : "#000"}}, [props.text]), __jacJsx("button", {"onClick": e => {
    props.deleteTodo(props.id);
  }, "style": {"padding": "4px 8px", "background": "#ef4444", "color": "white", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontSize": "12px"}}, ["Delete"])]);
}
function TodoList(props) {
  let hasTodos = true;
  if (!hasTodos) {
    return __jacJsx("div", {"style": {"padding": "20px", "textAlign": "center", "color": "#999"}}, ["No todos yet. Add one above!"]);
  }
  return __jacJsx("div", {}, [__jacJsx(TodoItem, {"text": "Learn Jac basics", "done": true}, []), __jacJsx(TodoItem, {"text": "Build a todo app", "done": false}, []), __jacJsx(TodoItem, {"text": "Deploy to production", "done": false}, [])]);
}
function TodoPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx("div", {"style": {"padding": "20px"}}, [__jacJsx("h1", {}, ["Please login to view todos"])]);
  }
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");
  let [filter, setFilter] = useState("all");
  let [loading, setLoading] = useState(false);
  let [lastSaved, setLastSaved] = useState(null);
  useEffect(() => {
    async function loadTodos() {
      let result = await __jacSpawn("read_todos", "", {});
      setTodos(result.reports ? result.reports : []);
      console.log("Todo array", todos);
      console.log("results", result);
    }
    loadTodos();
  }, []);
  useEffect(() => {
    if (!loading && todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
  async function addTodo() {
    if (!input.trim()) {
      return;
    }
    let result = await __jacSpawn("create_todo", "", {"text": input.trim()});
    setTodos(todos.concat([result.reports[0][0]]));
    setInput("");
  }
  async function toggleTodo(id) {
    await __jacSpawn("toggle_todo", id, {});
    setTodos(todos.map(todo => {
      if (todo._jac_id === id) {
        return {"_jac_id": todo._jac_id, "text": todo.text, "done": !todo.done};
      }
      return todo;
    }));
  }
  async function deleteTodo(id) {
    await __jacSpawn("delete_todo", id, {});
    setTodos(todos.filter(todo => {
      return todo._jac_id !== id;
    }));
  }
  function getFilteredTodos() {
    if (filter === "active") {
      return todos.filter(todo => {
        return !todo["done"];
      });
    } else if (filter === "completed") {
      return todos.filter(todo => {
        return todo["done"];
      });
    }
    return todos;
  }
  let filteredTodos = getFilteredTodos();
  if (loading) {
    return __jacJsx("div", {"style": {"display": "flex", "justifyContent": "center", "alignItems": "center", "height": "100vh"}}, [__jacJsx("h2", {}, ["Loading todos..."])]);
  }
  return __jacJsx("div", {"style": {"maxWidth": "600px", "margin": "20px auto", "padding": "20px"}}, [__jacJsx("h1", {}, ["My Todos"]), __jacJsx(TodoInput, {"input": input, "setInput": setInput, "addTodo": addTodo}, []), __jacJsx(TodoFilters, {"filter": filter, "setFilter": setFilter}, []), __jacJsx("div", {}, [filteredTodos.map(todo => {
    return __jacJsx(TodoItem, {"key": todo._jac_id, "id": todo._jac_id, "text": todo.text, "done": todo.done, "toggleTodo": toggleTodo, "deleteTodo": deleteTodo}, []);
  })])]);
}
function app() {
  return __jacJsx(LoginPage, {}, []);
}
export { LoginPage, SignupPage, TodoFilters, TodoInput, TodoItem, TodoList, TodoPage, app };
