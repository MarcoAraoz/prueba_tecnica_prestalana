import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

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

/* */

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  flex-grow: 1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0069d9;
  color: white;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
    height: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LogoutButton = styled.button`
  background-color: white;
  color: #222;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const router = useRouter();

  const handleCardSelect = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <Container>
      <TopBar>
        <Title>Prueba Tecnica</Title>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </TopBar>
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
        // key={user.id}
        // user={user}
        selectedUser={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </Container>
  );
};

export default UserList;
