import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  // componentDidUpdate(prevProps, prevState) {//컴포넌트가 업데이트 될때마다 호출됨

  // }

  HandleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  HandleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };
  HandleDelete = (habit) => {
    this.props.onDelete(habit);
  };
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    console.log("habits");
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.HandleIncrement}
              onDecrement={this.HandleDecrement}
              onDelete={this.HandleDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}
export default Habits;
