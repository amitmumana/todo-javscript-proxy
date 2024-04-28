const store = {
  todos: [],
};

const storeHandler = {
  get(target, property) {
    return target[property];
  },
  set(target, property, value) {
    console.log(target, property, value);
    target[property] = value;
    if (property == "todos") {
      window.dispatchEvent(new Event("todoChange"));
    }
    return true;
  },
};

// traps

const storeProxy = new Proxy(store, storeHandler);

export function addTodo(newTodo) {
  storeProxy.todos = [...storeProxy.todos, newTodo];
}

export function deleteTodo(id) {
  storeProxy.todos = storeProxy.todos.filter((i) => i.id !== id);
}

export function checkMark(id) {
  storeProxy.todos = storeProxy.todos.map((i) => {
    if (i.id == id) {
      return { ...i, completed: !i.completed };
    }
  });
}

export default storeProxy;
