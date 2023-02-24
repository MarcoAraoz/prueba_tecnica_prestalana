import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";
import Sidebar from "./Sidebar";

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleCardSelect = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  return (
    <Container>
      {users.map((user) => (
        <CardContainer key={user.id}>
          <Card
            user={user}
            selected={user.id === selectedUser?.id}
            onClick={() => setSelectedUser(user)}
          />
        </CardContainer>
      ))}
      <Sidebar
        selectedUser={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </Container>
  );
};

export default UserList;
