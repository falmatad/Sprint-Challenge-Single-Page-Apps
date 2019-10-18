import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  const Pulse = styled.div`
  transition: transform 0.2s ease-in;
  background: cyan;
  width: 280px;
  height: 350px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;
  margin-top: 10px;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`;
const Name = styled.h2`
  font-size: 35px;
  color: navy;
`;
  return (
    <Pulse>
      <Name>{props.character.name}</Name>
    </Pulse>
  )
}
