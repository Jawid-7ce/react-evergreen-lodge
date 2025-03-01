import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background: var(--color-grey-100);
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.05);
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 5rem 6.4rem;
  border-radius: 8px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
`;

const Container = styled.div`
  max-width: 118rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  padding: 2rem;
  background: var(--color-grey-50);
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
`;


function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
      <Container>
        <Outlet />
      </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
