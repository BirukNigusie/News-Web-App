import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Styled_Sidebar = styled.div`
  width: 18rem;
  height: 100vh;
  background-color: #121621;
  padding: 10px 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Styled_NavLink = styled(NavLink)`
  border-radius: 5px;
  margin: 20px 0;
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  text-align: center;
  width: 90%;
  padding: 15px 0;
  &:hover {
    background-color: #305240;
  }
`;

function Sidebar() {
  return (
    <div>
      <Styled_Sidebar>
        <Styled_NavLink to="/home">Home</Styled_NavLink>
        <Styled_NavLink to="/home">About</Styled_NavLink>
        <Styled_NavLink to="/home">Contact</Styled_NavLink>
        <Styled_NavLink to="/home">Login</Styled_NavLink>
        <Styled_NavLink to="/home">Logout</Styled_NavLink>
      </Styled_Sidebar>
    </div>
  );
}

export default Sidebar;
