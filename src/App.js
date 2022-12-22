import React from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoCounter from "./TodoCounter";

export default class App extends React.Component {
  id = 0;
  state = {
    todoList: [
      { id: this.id++, detail: "吃饭", done: false },
      { id: this.id++, detail: "睡觉", done: false },
      { id: this.id++, detail: "打豆豆", done: false },
    ],
  };

  addTodo = (value) => {
    this.setState((state) => {
      const newTodo = { id: this.id++, detail: value, done: false };
      return { todoList: [newTodo, ...state.todoList] };
    });
  };

  checkTodo = (id) => {
    this.setState((state) => {
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        ),
      };
    });
  };

  deleteTodo = (id) => {
    this.setState((state) => {
      return { todoList: state.todoList.filter((todo) => todo.id !== id) };
    });
  };

  checkAll = () => {
    const count = this.state.todoList.reduce(
      (pre, cur) => (cur.done ? pre + 1 : pre),
      0
    );
    this.setState((state) => {
      return {
        todoList: state.todoList.map((todo) =>
          count < this.state.todoList.length
            ? { ...todo, done: true }
            : { ...todo, done: false }
        ),
      };
    });
  };

  clearTodo = () => {
    this.setState((state) => {
      return { todoList: state.todoList.filter((todo) => !todo.done) };
    });
  };

  render() {
    return (
      <div className="w-screen">
        <div className="w-3/5 mt-4 mx-auto p-4 rounded shadow bg-gradient-to-b from-emerald-300 to-blue-400">
          <TodoAdd addTodo={this.addTodo} />
          <TodoList
            todoList={this.state.todoList}
            checkTodo={this.checkTodo}
            deleteTodo={this.deleteTodo}
          />
          <TodoCounter
            todoList={this.state.todoList}
            checkAll={this.checkAll}
            clearTodo={this.clearTodo}
          />
        </div>
      </div>
    );
  }
}
