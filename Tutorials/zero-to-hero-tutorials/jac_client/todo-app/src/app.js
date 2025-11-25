import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
function TodoInput(props) {
  let containerStyle = {"display": "flex", "gap": "8px", "marginBottom": "16px"};
  let inputStyle = {"flex": "1", "padding": "8px", "border": "1px solid #ddd", "borderRadius": "4px"};
  let buttonStyle = {"padding": "8px 16px", "background": "#3b82f6", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontWeight": "600"};
  return __jacJsx("div", {"style": containerStyle}, [__jacJsx("input", {"style": inputStyle, "type": "text", "placeholder": "What needs to be done?"}, []), __jacJsx("button", {"style": buttonStyle}, ["Add"])]);
}
function TodoFilters(props) {
  return __jacJsx("div", {"style": {"display": "flex", "gap": "8px", "marginBottom": "16px"}}, [__jacJsx("button", {"style": {"padding": "6px 12px", "background": "#3b82f6", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontSize": "14px"}}, ["All"]), __jacJsx("button", {"style": {"padding": "6px 12px", "background": "#e5e7eb", "color": "#000000", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontSize": "14px"}}, ["Active"]), __jacJsx("button", {"style": {"padding": "6px 12px", "background": "#e5e7eb", "color": "#000000", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontSize": "14px"}}, ["Completed"])]);
}
function TodoItem(props) {
  let containerStyle = {"display": "flex", "alignItems": "center", "gap": "10px", "padding": "10px", "borderBottom": "1px solid #e5e7eb"};
  let spanStyle = {"flex": "1", "textDecoration": props.done ? "line-through" : "none", "color": props.done ? "#999" : "#000"};
  let buttonStyle = {"padding": "4px 8px", "background": "#ef4444", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontSize": "12px"};
  return __jacJsx("div", {"style": containerStyle}, [__jacJsx("input", {"type": "checkbox", "checked": props.done}, []), __jacJsx("span", {"style": spanStyle}, [props.text]), __jacJsx("button", {"style": buttonStyle}, ["Delete"])]);
}
function TodoList(props) {
  return __jacJsx("div", {}, [__jacJsx(TodoItem, {"text": "Learn Jac basics", "done": true}, []), __jacJsx(TodoItem, {"text": "Build a todo app", "done": false}, []), __jacJsx(TodoItem, {"text": "Deploy to production", "done": false}, [])]);
}
function TodoStats(props) {
  return __jacJsx("div", {}, [__jacJsx("p", {}, ["Total: ", props.total]), __jacJsx("p", {}, ["Completed: ", props.completed])]);
}
function app() {
  return __jacJsx("div", {"style": {"padding": "20px"}}, [__jacJsx("h1", {}, ["My Todos"]), __jacJsx(TodoStats, {}, []), __jacJsx(TodoInput, {}, []), __jacJsx(TodoFilters, {}, []), __jacJsx(TodoList, {}, [])]);
}
export { TodoFilters, TodoInput, TodoItem, TodoList, TodoStats, app };
