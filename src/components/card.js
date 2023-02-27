import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const CardImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const CardName = styled.h3`
  margin: 0;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardButton = styled.button`
  background-color: #007aff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #0069d9;
  }
`;

const Card = ({ user, selected, onClick }) => {
  const handleSelect = () => {
    onClick(user);
  };
  

  return (
    <Container>
      <CardHeader>
        <CardImage
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
        />
        <CardName>
          {user.first_name} {user.last_name}
        </CardName>
      </CardHeader>
      <CardContent>
        <CardButton onClick={handleSelect}>View Details</CardButton>
      </CardContent>
    </Container>
  );
};

export default Card;
