function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { __jacJsx, __jacSpawn } from "@jac-client/utils";
import { useState, useEffect } from "react";
import { Router, Routes, Route, Link, Navigate, useNavigate, jacLogin, jacSignup, jacLogout, jacIsLoggedIn } from "@jac-client/utils";
function Navigation() {
  var isLoggedIn = jacIsLoggedIn();
  if (isLoggedIn) {
    return __jacJsx("nav", {
      "style": {
        "padding": "12px 24px",
        "background": "#3b82f6",
        "color": "#ffffff",
        "display": "flex",
        "justifyContent": "space-between"
      }
    }, [__jacJsx("div", {
      "style": {
        "fontWeight": "600"
      }
    }, ["Todo App"]), __jacJsx("div", {
      "style": {
        "display": "flex",
        "gap": "16px"
      }
    }, [__jacJsx(Link, {
      "to": "/todos",
      "style": {
        "color": "#ffffff",
        "textDecoration": "none"
      }
    }, ["Todos"]), __jacJsx("button", {
      "onClick": function onClick(e) {
        e.preventDefault();
        jacLogout();
        window.location.href = "/page/app#/login";
      },
      "style": {
        "background": "none",
        "color": "#ffffff",
        "border": "1px solid #ffffff",
        "padding": "2px 10px",
        "borderRadius": "4px",
        "cursor": "pointer"
      }
    }, ["Logout"])])]);
  }
  return __jacJsx("nav", {
    "style": {
      "padding": "12px 24px",
      "background": "#3b82f6",
      "color": "#ffffff",
      "display": "flex",
      "justifyContent": "space-between"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontWeight": "600"
    }
  }, ["Todo App"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "16px"
    }
  }, [__jacJsx(Link, {
    "to": "/login",
    "style": {
      "color": "#ffffff",
      "textDecoration": "none"
    }
  }, ["Login"]), __jacJsx(Link, {
    "to": "/signup",
    "style": {
      "color": "#ffffff",
      "textDecoration": "none"
    }
  }, ["Sign Up"])])]);
}
function NotFoundPage() {
  return __jacJsx("div", {
    "style": {
      "textAlign": "center",
      "padding": "50px"
    }
  }, [__jacJsx("h1", {}, ["404 - Page Not Found"]), __jacJsx(Link, {
    "to": "/"
  }, ["Go Home"])]);
}
function HomePage() {
  if (jacIsLoggedIn()) {
    return __jacJsx(Navigate, {
      "to": "/todos"
    }, []);
  }
  return __jacJsx(Navigate, {
    "to": "/login"
  }, []);
}
function LoginPage() {
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  if (jacIsLoggedIn()) {
    return __jacJsx("div", {
      "style": {
        "padding": "20px"
      }
    }, [__jacJsx("h2", {}, ["You're already logged in"]), __jacJsx("button", {
      "onClick": function onClick() {
        jacLogout();
      }
    }, ["Logout"])]);
  }
  function handleLogin(_x) {
    return _handleLogin.apply(this, arguments);
  }
  function _handleLogin() {
    _handleLogin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var success;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            e.preventDefault();
            setError("");
            if (!(!username || !password)) {
              _context.n = 1;
              break;
            }
            setError("Please fill in all fields");
            return _context.a(2);
          case 1:
            _context.n = 2;
            return jacLogin(username, password);
          case 2:
            success = _context.v;
            if (success) {
              window.location.href = "/page/app#/todos";
            } else {
              setError("Invalid credentials");
            }
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return _handleLogin.apply(this, arguments);
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  var errorDisplay = null;
  if (error) {
    errorDisplay = __jacJsx("div", {
      "style": {
        "color": "#dc2626",
        "fontSize": "14px",
        "marginBottom": "10px"
      }
    }, [error]);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "background": "#f5f5f5"
    }
  }, [__jacJsx("div", {
    "style": {
      "background": "#ffffff",
      "padding": "30px",
      "borderRadius": "8px",
      "width": "280px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h2", {
    "style": {
      "marginBottom": "20px"
    }
  }, ["Login"]), __jacJsx("form", {
    "onSubmit": handleLogin
  }, [__jacJsx("input", {
    "type": "text",
    "value": username,
    "onChange": handleUsernameChange,
    "placeholder": "Username",
    "style": {
      "width": "100%",
      "padding": "8px",
      "marginBottom": "10px",
      "border": "1px solid #ddd",
      "borderRadius": "4px",
      "boxSizing": "border-box"
    }
  }, []), __jacJsx("input", {
    "type": "password",
    "value": password,
    "onChange": handlePasswordChange,
    "placeholder": "Password",
    "style": {
      "width": "100%",
      "padding": "8px",
      "marginBottom": "10px",
      "border": "1px solid #ddd",
      "borderRadius": "4px",
      "boxSizing": "border-box"
    }
  }, []), errorDisplay, __jacJsx("button", {
    "type": "submit",
    "style": {
      "width": "100%",
      "padding": "8px",
      "background": "#3b82f6",
      "color": "#ffffff",
      "border": "none",
      "borderRadius": "4px",
      "cursor": "pointer",
      "fontWeight": "600"
    }
  }, ["Login"])]), __jacJsx("p", {
    "style": {
      "textAlign": "center",
      "marginTop": "12px",
      "fontSize": "14px"
    }
  }, ["Need an account? ", __jacJsx(Link, {
    "to": "/signup"
  }, ["Sign up"])])])]);
}
function SignupPage() {
  var _useState7 = useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    username = _useState8[0],
    setUsername = _useState8[1];
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    password = _useState0[0],
    setPassword = _useState0[1];
  var _useState1 = useState(""),
    _useState10 = _slicedToArray(_useState1, 2),
    error = _useState10[0],
    setError = _useState10[1];
  function handleSignup(_x2) {
    return _handleSignup.apply(this, arguments);
  }
  function _handleSignup() {
    _handleSignup = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
      var result;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            e.preventDefault();
            setError("");
            if (!(!username || !password)) {
              _context2.n = 1;
              break;
            }
            setError("Please fill in all fields");
            return _context2.a(2);
          case 1:
            _context2.n = 2;
            return jacSignup(username, password);
          case 2:
            result = _context2.v;
            if (result["success"]) {
              window.location.href = "/page/app#/todos";
            } else {
              setError(result["error"] ? result["error"] : "Signup failed");
            }
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return _handleSignup.apply(this, arguments);
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  var errorDisplay = null;
  if (error) {
    errorDisplay = __jacJsx("div", {
      "style": {
        "color": "#dc2626",
        "fontSize": "14px",
        "marginBottom": "10px"
      }
    }, [error]);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "background": "#f5f5f5"
    }
  }, [__jacJsx("div", {
    "style": {
      "background": "#ffffff",
      "padding": "30px",
      "borderRadius": "8px",
      "width": "280px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h2", {
    "style": {
      "marginBottom": "20px"
    }
  }, ["Sign Up"]), __jacJsx("form", {
    "onSubmit": handleSignup
  }, [__jacJsx("input", {
    "type": "text",
    "value": username,
    "onChange": handleUsernameChange,
    "placeholder": "Username",
    "style": {
      "width": "100%",
      "padding": "8px",
      "marginBottom": "10px",
      "border": "1px solid #ddd",
      "borderRadius": "4px",
      "boxSizing": "border-box"
    }
  }, []), __jacJsx("input", {
    "type": "password",
    "value": password,
    "onChange": handlePasswordChange,
    "placeholder": "Password",
    "style": {
      "width": "100%",
      "padding": "8px",
      "marginBottom": "10px",
      "border": "1px solid #ddd",
      "borderRadius": "4px",
      "boxSizing": "border-box"
    }
  }, []), errorDisplay, __jacJsx("button", {
    "type": "submit",
    "style": {
      "width": "100%",
      "padding": "8px",
      "background": "#3b82f6",
      "color": "#ffffff",
      "border": "none",
      "borderRadius": "4px",
      "cursor": "pointer",
      "fontWeight": "600"
    }
  }, ["Sign Up"])]), __jacJsx("p", {
    "style": {
      "textAlign": "center",
      "marginTop": "12px",
      "fontSize": "14px"
    }
  }, ["Have an account? ", __jacJsx(Link, {
    "to": "/login"
  }, ["Login"])])])]);
}
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
function TodosPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {
      "to": "/login"
    }, []);
  }
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    todos = _useState12[0],
    setTodos = _useState12[1];
  var _useState13 = useState(""),
    _useState14 = _slicedToArray(_useState13, 2),
    input = _useState14[0],
    setInput = _useState14[1];
  var _useState15 = useState("all"),
    _useState16 = _slicedToArray(_useState15, 2),
    filter = _useState16[0],
    setFilter = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    loading = _useState18[0],
    setLoading = _useState18[1];
  var _useState19 = useState(null),
    _useState20 = _slicedToArray(_useState19, 2),
    lastSaved = _useState20[0],
    setLastSaved = _useState20[1];
  useEffect(function () {
    function loadTodos() {
      return _loadTodos.apply(this, arguments);
    }
    function _loadTodos() {
      _loadTodos = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var result;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return __jacSpawn("read_todos", "", {});
            case 1:
              result = _context3.v;
              setTodos(result.reports ? result.reports : []);
              console.log("Todo array", todos);
              console.log("results", result);
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      return _loadTodos.apply(this, arguments);
    }
    loadTodos();
  }, []);
  useEffect(function () {
    if (!loading && todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
  function addTodo() {
    return _addTodo.apply(this, arguments);
  }
  function _addTodo() {
    _addTodo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var result;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            if (input.trim()) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            _context4.n = 2;
            return __jacSpawn("create_todo", "", {
              "text": input.trim()
            });
          case 2:
            result = _context4.v;
            setTodos(todos.concat([result.reports[0][0]]));
            setInput("");
          case 3:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return _addTodo.apply(this, arguments);
  }
  function toggleTodo(_x3) {
    return _toggleTodo.apply(this, arguments);
  }
  function _toggleTodo() {
    _toggleTodo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(id) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return __jacSpawn("toggle_todo", id, {});
          case 1:
            setTodos(todos.map(function (todo) {
              if (todo._jac_id === id) {
                return {
                  "_jac_id": todo._jac_id,
                  "text": todo.text,
                  "done": !todo.done
                };
              }
              return todo;
            }));
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return _toggleTodo.apply(this, arguments);
  }
  function deleteTodo(_x4) {
    return _deleteTodo.apply(this, arguments);
  }
  function _deleteTodo() {
    _deleteTodo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(id) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.n = 1;
            return __jacSpawn("delete_todo", id, {});
          case 1:
            setTodos(todos.filter(function (todo) {
              return todo._jac_id !== id;
            }));
          case 2:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return _deleteTodo.apply(this, arguments);
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
  if (loading) {
    return __jacJsx("div", {
      "style": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "height": "100vh"
      }
    }, [__jacJsx("h2", {}, ["Loading todos..."])]);
  }
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
      "key": todo._jac_id,
      "id": todo._jac_id,
      "text": todo.text,
      "done": todo.done,
      "toggleTodo": toggleTodo,
      "deleteTodo": deleteTodo
    }, []);
  })])]);
}
function app() {
  return __jacJsx(Router, {}, [__jacJsx("div", {
    "style": {
      "fontFamily": "system-ui, sans-serif"
    }
  }, [__jacJsx(Navigation, {}, []), __jacJsx(Routes, {}, [__jacJsx(Route, {
    "path": "/",
    "element": __jacJsx(HomePage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/login",
    "element": __jacJsx(LoginPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/signup",
    "element": __jacJsx(SignupPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/todos",
    "element": __jacJsx(TodosPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "*",
    "element": __jacJsx(NotFoundPage, {}, [])
  }, [])])])]);
}
export { HomePage, LoginPage, Navigation, NotFoundPage, SignupPage, TodoFilters, TodoInput, TodoItem, TodoList, TodosPage, app };