import { __jacJsx, __jacSpawn } from "@jac-client/utils";
import { useState, useEffect } from "react";
function TodoItem(props) {
  return __jacJsx("div", {}, [__jacJsx("input", {
    "type": "checkbox",
    "checked": props.done
  }, []), __jacJsx("span", {}, [props.text]), __jacJsx("button", {}, ["Delete"])]);
}
function app() {
  return __jacJsx("div", {}, [__jacJsx("h1", {}, ["My Todos"]), __jacJsx(TodoItem, {
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
export { TodoItem, app };