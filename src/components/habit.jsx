import React, { PureComponent } from "react";

class Habit extends PureComponent {
  componentDidMount() {
    //사용자에게 보여질때 호출이됨
    console.log(`habit: ${this.props.habit.name} mounted`);
  }
  componentWillUnmount() {
    //
    console.log(`habit: ${this.props.habit.name} will unmount`);
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  HandleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  HandleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;

    console.log(`habit: ${name}`);
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.HandleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.HandleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
