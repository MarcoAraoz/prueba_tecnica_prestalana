import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-320px')};
  width: 320px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  z-index: 1;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const SidebarTitle = styled.h2`
  margin: 0;
`;

const SidebarCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

const SidebarContent = styled.div`
  padding: 1rem;
`;

const SidebarName = styled.p`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const SidebarEmail = styled.p`
  font-size: 0.9rem;
  margin: 0;
  margin-bottom: 1rem;
`;

const SidebarButton = styled.button`
  background-color: #007aff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0069d9;
  }
`;

const Sidebar = ({ selectedUser, onClose }) => {
  return (
    <Container open={Boolean(selectedUser)}>
      {selectedUser && (
        <>
          <SidebarHeader>
            <SidebarTitle>User Details</SidebarTitle>
            <SidebarCloseButton onClick={onClose}>&times;</SidebarCloseButton>
          </SidebarHeader>
          <SidebarContent>
            <img src={selectedUser.avatar} alt={`${selectedUser.first_name} ${selectedUser.last_name}`} />
            <SidebarName>{selectedUser.first_name} {selectedUser.last_name}</SidebarName>
            <SidebarEmail>{selectedUser.email}</SidebarEmail>
            <SidebarButton onClick={onClose}>Close</SidebarButton>
          </SidebarContent>
        </>
      )}
    </Container>
  );
};

export default Sidebar;