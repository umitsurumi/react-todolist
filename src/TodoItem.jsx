import React from "react";

export default class TodoItem extends React.Component {
  render() {
    const { id, detail, done, checkTodo, deleteTodo } = this.props;
    return (
      <li className="flex items-center justify-between h-12 border-b-2 border-dashed">
        <div className="flex">
          <input
            className="mr-2 cursor-pointer"
            type="checkbox"
            //defaultChecked={done}
            checked={done}
            //onClick={() => checkTodo(id)}
            onChange={() => checkTodo(id)}
          />
          <p>{detail}</p>
        </div>
        <div className="text-zinc-50">
          <button className="mr-2 p-1 rounded-lg bg-blue-400">编辑</button>
          <button
            className="p-1 rounded-lg bg-red-400"
            onClick={() =>
              window.confirm("是否确认删除？") ? deleteTodo(id) : false
            }
          >
            删除
          </button>
        </div>
      </li>
    );
  }
}
