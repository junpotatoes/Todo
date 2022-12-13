import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";

const TodoInputWrapper = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 360px;
  height: 60px;
  top: 638px;

  border-top: 1px solid #000000;
`;

const TodoInput = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 298px;
  height: 40px;

  margin-top: 5px;
  margin-left: 10px;

  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const CheckButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  margin-left: 320px;
  margin-top: 10px;
`;

export default function Todos() {
  const [todos, setTodos] = useState(null);
  const [value, setValue] = useState("");

  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/todos");
    const data = await res.json();
    console.log(data);
    setTodos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleOnchnage(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = e.target.elements.todo.value;

    setTodos([...todos, newTodo]);

    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: newTodo,
      }),
    });
    fetchData();
    setValue("");
  }

  return (
    <div className="Container">
      <TodoInputWrapper>
        <form onSubmit={handleSubmit}>
          <TodoInput
            value={value}
            onChange={handleOnchnage}
            type={"text"}
            name={"todo"}
          />

          <CheckButton>+</CheckButton>
        </form>
      </TodoInputWrapper>
      <ul>
        {todos
          ? todos.map((todo) => (
              <Todo key={todo.id} todo={todo} fetchData={fetchData} />
            ))
          : ""}
      </ul>
    </div>
  );
}
