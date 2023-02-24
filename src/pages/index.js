
import styled from 'styled-components';
import UserList from '@/components/userList';
import Card from '@/components/Card';

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
      <h1>Welcome to My Website!</h1>
      <UserList />
    {/* </Container> */}
    </>
  );
};

export default Home;
