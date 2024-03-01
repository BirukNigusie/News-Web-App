import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Styled_AppLayout = styled.div`
  display: flex;
  height: 100vh;
`;
const Styled_Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  display: flex;
`;

const Styled_Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 3.2 rem;
`;

const Styled_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

function AppLayout() {
  return (
    <Styled_AppLayout>
      <Sidebar />
      <Styled_Wrapper>
        <Header />
        <Styled_Main>
          <Styled_Container>
            <Outlet />
          </Styled_Container>
        </Styled_Main>
      </Styled_Wrapper>
    </Styled_AppLayout>
  );
}

export default AppLayout;
