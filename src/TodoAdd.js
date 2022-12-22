import React from "react";

export default class TodoAdd extends React.Component {
  state = { newTodo: "" };

  handleChange = (e) => {
    this.setState((state) => {
      return { newTodo: e.target.value };
    });
  };

  handleKeyUp = (e) => {
    if (e.key === "Enter") {
      const { addTodo } = this.props;
      addTodo(this.state.newTodo);
      this.setState(() => {
        return { newTodo: "" };
      });
    }
  };

  handleClick = () => {
    const { addTodo } = this.props;
    addTodo(this.state.newTodo);
    this.setState(() => {
      return { newTodo: "" };
    });
  };

  render() {
    return (
      <div className="flex w-5/6 mx-auto">
        <input
          className="w-full px-2 py-1 focus:outline-none focus:ring-2 ring-purple-400"
          placeholder="输入待办内容，回车键确认"
          onKeyUp={this.handleKeyUp}
          onChange={this.handleChange}
          value={this.state.newTodo}
        />
        <button
          className="w-24 -ml-24 text-zinc-50 bg-red-400"
          onClick={this.handleClick}
        >
          确认
        </button>
      </div>
    );
  }
}
