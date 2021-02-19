// Write your Character component here

import React from 'react';
import styled from 'styled-components';

const CharacterDiv = styled.div`
  width: 80%;
  background: hsla(0, 0%, 0%, 0.5);
  border-radius: 8px;
  margin-top: 10px;
  padding: 0 25px;
  text-align: left;
`;

const Name = styled.h2`
  color: #22eeff;
`;

const ContentDiv = styled.div`
`;

const Character = (props) => {
  const { character: { name, birth_year } } = props;



  return (
    <CharacterDiv>
      
      <Name>{name}</Name>

      <ContentDiv>
        <h3>{`Born: ${birth_year}`}</h3>
      </ContentDiv>

    </CharacterDiv>
  )
}

export default Character;