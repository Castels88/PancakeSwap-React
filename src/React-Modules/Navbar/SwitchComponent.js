/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
export default function SwitchComponent() {
  const [Switch, SetSwitch] = useState(false);
  const InputWrapper = styled.label`
    position: relative;
  `;
  const Input = styled.input`
    position: absolute;
    left: -9999px;
    top: -9999px;

    &:checked + span {
      background-color: #31d0aa;
      &:before {
        left: calc(100% - 2px);
        transform: translateX(-100%);
      }
    }
  `;
  const Slider = styled.span`
    display: flex;
    cursor: pointer;
    width: 50px;
    height: 25px;
    border-radius: 100px;
    background-color: #bfbfbf;
    position: relative;
    transition: background-color 0.2;

    &:before {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 21px;
      height: 21px;
      border-radius: 21px;
      transition: 0.2s;
      background: #fff;
      box-shadow: 0 2px 4px;
    }

    &:active:before {
      width: 28px;
    }
  `;
  return (
    <InputWrapper>
      <Input
        type="checkbox"
        onChange={(event) => {
          SetSwitch(event.target.checked);
        }}
        value={"checked"}
      />
      <Slider />
    </InputWrapper>
  );
}
