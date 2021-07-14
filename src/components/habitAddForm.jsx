import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef(); //react에서 다른 dom에 접근하고싶을때 사용됨
  const formRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault(); //브라우저의 기본기능 못하게함 새로고침
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = "";
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
