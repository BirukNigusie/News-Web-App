import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import styled from "styled-components";

const Styled_Header = styled.div`
  width: 100%;
  height: 10%;
  background-color: #121621;
  display: flex;
  flex-direction: column;
`;

const Styled_SearchFiled = styled.input`
  background-color: #3c4043;
  width: 60%;
  color: #fff;
  font-weight: bold;
  height: 3rem;
  outline: none;
  font-size: 16px;
  text-align: center;
  border: none;
`;

const Styled_Nav = styled.nav`
  margin: 4px;
  width: 90%;
  height: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Styled_NavLink = styled(NavLink)`
  color: #ccc;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

const Styled_Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Styled_SearchBtn = styled.button`
  background-color: #3c4043;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  color: #ccc;
  border: none;
  outline: none;
  font-size: 20px;
  margin-right: 0;
`;

function Header() {
  return (
    <Styled_Header>
      <Styled_Container>
        <Styled_SearchBtn>
          <IoIosSearch />
        </Styled_SearchBtn>
        <form>
          <Styled_SearchFiled
            type="text"
            placeholder="Search for locations,topics & sources"
          />
        </form>
      </Styled_Container>
      <Styled_Nav>
        <Styled_NavLink>Home</Styled_NavLink>
        <Styled_NavLink>Home</Styled_NavLink>
        <Styled_NavLink>Home</Styled_NavLink>
        <Styled_NavLink>Home</Styled_NavLink>
      </Styled_Nav>
    </Styled_Header>
  );
}

export default Header;
