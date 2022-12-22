import React from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends React.Component {
  render() {
    const { todoList, checkTodo, deleteTodo } = this.props;
    return (
      <ul className="w-5/6 px-6 mx-auto my-4">
        {todoList.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              checkTodo={checkTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
