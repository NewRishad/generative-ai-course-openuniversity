function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { __jacJsx, __jacSpawn } from "@jac-client/utils";
import { useState } from "react";
function TodoInput(props) {
  return __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "8px",
      "marginBottom": "16px"
    }
  }, [__jacJsx("input", {
    "type": "text",
    "value": props.input,
    "onChange": function onChange(e) {
      props.setInput(e.target.value);
    },
    "onKeyPress": function onKeyPress(e) {
      if (e.key === "Enter") {
        props.addTodo();
      }
    },
    "placeholder": "What needs to be done?",
    "style": {
      "flex": "1",
      "padding": "8px",
      "border": "1px solid #ddd",
      "borderRadius": "4px"
    }
  }, []), __jacJsx("button", {
    "onClick": function onClick(e) {
      props.addTodo();
    },
    "style": {
      "padding": "8px 16px",
      "background": "#3b82f6",
      "color": "white",
      "border": "none",
      "borderRadius": "4px",
      "cursor": "pointer"
    }
  }, ["Add"])]);
}
function TodoFilters(props) {
  return __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "8px",
      "marginBottom": "16px"
    }
  }, [__jacJsx("button", {
    "onClick": function onClick(e) {
      props.setFilter("all");
    },
    "style": {
      "padding": "6px 12px",
      "background": props.filter === "all" ? "#3b82f6" : "#e5e7eb",
      "color": props.filter === "all" ? "#ffffff" : "#000000",
      "border": "none",
      "borderRadius": "4px",
      "cursor": "pointer"
    }
  }, ["All"]), __jacJsx("button", {
    "onClick": function onClick(e) {
      props.setFilter("active");
    },
    "style": {
      "padding": "6px 12px",
      "background": props.filter === "active" ? "#3b82f6" : "#e5e7eb",
      "color": props.filter === "active" ? "#ffffff" : "#000000",
      "border": "none",
      "borderRadius": "4px",
      "cursor": "pointer"
    }
  }, ["Active"]), __jacJsx("button", {
    "onClick": function onClick(e) {
      props.setFilter("completed");
    },
    "style": {
      "padding": "6px 12px",
      "background": props.filter === "completed" ? "#3b82f6" : "#e5e7eb",
      "color": props.filter === "completed" ? "#ffffff" : "#000000",
      "border": "none",
      "borderRadius": "4px",
      "cursor": "pointer"
    }
  }, ["Completed"])]);
}
function TodoItem(props) {
  return __jacJsx("div", {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "gap": "10px",
      "padding": "10px",
      "borderBottom": "1px solid #e5e7eb"
    }
  }, [__jacJsx("input", {
    "type": "checkbox",
    "checked": props.done,
    "onChange": function onChange(e) {
      props.toggleTodo(props.id);
    },
    "style": {
      "cursor": "pointer"
    }
  }, []), __jacJsx("span", {
    "style": {
      "flex": "1",
      "textDecoration": props.done ? "line-through" : "none",
      "color": props.done ? "#999" : "#000"
    }
  }, [props.text]), __jacJsx("button", {
    "onClick": function onClick(e) {
      props.deleteTodo(props.id);
    },
    "style": {
      "padding": "4px 8px",
      "background": "#ef4444",
      "color": "white",
      "border": "none",
      "borderRadius": "4px",
      "cursor": "pointer",
      "fontSize": "12px"
    }
  }, ["Delete"])]);
}
function TodoList(props) {
  var hasTodos = true;
  if (!hasTodos) {
    return __jacJsx("div", {
      "style": {
        "padding": "20px",
        "textAlign": "center",
        "color": "#999"
      }
    }, ["No todos yet. Add one above!"]);
  }
  return __jacJsx("div", {}, [__jacJsx(TodoItem, {
    "text": "Learn Jac basics",
    "done": true
  }, []), __jacJsx(TodoItem, {
    "text": "Build a todo app",
    "done": false
  }, []), __jacJsx(TodoItem, {
    "text": "Deploy to production",
    "done": false
  }, [])]);
}
function app() {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    todos = _useState2[0],
    setTodos = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    input = _useState4[0],
    setInput = _useState4[1];
  var _useState5 = useState("all"),
    _useState6 = _slicedToArray(_useState5, 2),
    filter = _useState6[0],
    setFilter = _useState6[1];
  function addTodo() {
    if (!input.trim()) {
      return;
    }
    var newTodo = {
      "id": Date.now(),
      "text": input.trim(),
      "done": false
    };
    setTodos(todos.concat([newTodo]));
    setInput("");
  }
  function toggleTodo(id) {
    setTodos(todos.map(function (todo) {
      if (todo["id"] === id) {
        return {
          "id": todo["id"],
          "text": todo["text"],
          "done": !todo["done"]
        };
      }
      return todo;
    }));
  }
  function deleteTodo(id) {
    setTodos(todos.filter(function (todo) {
      return todo["id"] !== id;
    }));
  }
  function getFilteredTodos() {
    if (filter === "active") {
      return todos.filter(function (todo) {
        return !todo["done"];
      });
    } else if (filter === "completed") {
      return todos.filter(function (todo) {
        return todo["done"];
      });
    }
    return todos;
  }
  var filteredTodos = getFilteredTodos();
  return __jacJsx("div", {
    "style": {
      "maxWidth": "600px",
      "margin": "20px auto",
      "padding": "20px"
    }
  }, [__jacJsx("h1", {}, ["My Todos"]), __jacJsx(TodoInput, {
    "input": input,
    "setInput": setInput,
    "addTodo": addTodo
  }, []), __jacJsx(TodoFilters, {
    "filter": filter,
    "setFilter": setFilter
  }, []), __jacJsx("div", {}, [filteredTodos.map(function (todo) {
    return __jacJsx(TodoItem, {
      "key": todo["id"],
      "id": todo["id"],
      "text": todo["text"],
      "done": todo["done"],
      "toggleTodo": toggleTodo,
      "deleteTodo": deleteTodo
    }, []);
  })])]);
}
export { TodoFilters, TodoInput, TodoItem, TodoList, app };