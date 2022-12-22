import React from "react";

export default class TodoCounter extends React.Component {
  render() {
    const { todoList, checkAll, clearTodo } = this.props;
    const doneCount = todoList.reduce(
      (pre, cur) => (cur.done ? pre + 1 : pre),
      0
    );
    return (
      todoList.length !== 0 && (
        <div className="flex justify-between items-center w-5/6 h-10 m-auto">
          <div className="flex">
            <input
              className="mr-4 cursor-pointer"
              type="checkbox"
              //onClick={checkAll}
              onChange={checkAll}
              checked={
                doneCount === todoList.length && doneCount !== 0 ? true : false
              }
            />
            <p>
              已完成
              <span>{doneCount}</span>
              /全部<span>{todoList.length}</span>
            </p>
          </div>
          <button
            className="h-8 px-2 rounded-xl text-zinc-50 bg-red-400"
            onClick={clearTodo}
          >
            清除已完成任务
          </button>
        </div>
      )
    );
  }
}
