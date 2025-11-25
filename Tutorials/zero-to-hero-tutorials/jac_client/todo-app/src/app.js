import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState } from "react";
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
function app() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");
  let [filter, setFilter] = useState("all");
  function addTodo() {
    if (!input.trim()) {
      return;
    }
    let newTodo = {"id": Date.now(), "text": input.trim(), "done": false};
    setTodos(todos.concat([newTodo]));
    setInput("");
  }
  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo["id"] === id) {
        return {"id": todo["id"], "text": todo["text"], "done": !todo["done"]};
      }
      return todo;
    }));
  }
  function deleteTodo(id) {
    setTodos(todos.filter(todo => {
      return todo["id"] !== id;
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
  return __jacJsx("div", {"style": {"maxWidth": "600px", "margin": "20px auto", "padding": "20px"}}, [__jacJsx("h1", {}, ["My Todos"]), __jacJsx(TodoInput, {"input": input, "setInput": setInput, "addTodo": addTodo}, []), __jacJsx(TodoFilters, {"filter": filter, "setFilter": setFilter}, []), __jacJsx("div", {}, [filteredTodos.map(todo => {
    return __jacJsx(TodoItem, {"key": todo["id"], "id": todo["id"], "text": todo["text"], "done": todo["done"], "toggleTodo": toggleTodo, "deleteTodo": deleteTodo}, []);
  })])]);
}
export { TodoFilters, TodoInput, TodoItem, TodoList, app };
