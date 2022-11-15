import React, { useState } from 'react';
import styled from "styled-components";
import Button from '../../UI/Button/Button';
import './CourseInput.css';


const FormControl = styled.div`  
    margin: 0.5rem 0;
  
  
  & label {
    color: ${props => !props.isValid ? "red" : "black"};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => !props.isValid ? "red" : "#ccc" };
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  `;

const CourseInput = props => {
  const [isValid, setIsValid] = useState(true);
  const [enteredValue, setEnteredValue] = useState('');
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };
  const formSubmitHandler = event => {
    event.preventDefault();
    // console.log(enteredValue.trim());
    if (enteredValue.trim() === "") {
      setIsValid(false);
      return;
    };
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>

      <FormControl isValid={isValid}>
        <label>Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
      </FormControl>

      {/* <div className={`form-control ${!isValid ? "wronginput" : ""}`}>
        <label>Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
      </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
