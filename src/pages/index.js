import styled from "styled-components";
import UserList from "@/components/UserList";
import Card from "@/components/Card";
import { useState } from "react";
import axios from "axios";
import Login from "@/components/Login";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f5f5f5;
//   color: black;
// `;

const Home = () => {
  return (
    <>
      {/* <Container> */}
      
      <Login />
      {/* <UserList /> */}
      {/* </Container> */}
    </>
  );
};

export default Home;
