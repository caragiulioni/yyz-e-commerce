import React from "react";
import styled from "styled-components";

const Input = ({ name, type, placeholder, setValue, value }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{placeholder}</label>
      <input 
        type={type}
        name={name}
        placeholder={placeholder}
        required
        onChange={(e) => setValue({...value, [name]: e.target.value})}
    />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 6px;
  width: 100%;
  position: relative;

  label {
    display: none;
  }

  input {
    border-radius: 3px;
    border: 1px solid #e4e8eb;
    box-sizing: border-box;
    color: #464a5c;
    font-size: 15px;
    font-weight: 300;
    height: 36px;
    padding: 8px 12px 10px 12px;
    width: 100%;

    &::placeholder {
      color: #999;
    }
  }
`;

export default Input;
