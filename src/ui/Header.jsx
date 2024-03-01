import { NavLink } from "react-router-dom";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import styled from "styled-components";

const Styled_Header = styled.div`
  width: 100%;
  height: 9%;
  background-color: #011627;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

const Styled_SearchFiled = styled.input`
  background-color: #3c4043;
  width: 60rem;
  color: #ccc;
  font-weight: bold;
  height: 3rem;
  outline: none;
  font-size: 16px;
  text-align: center;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
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
  margin: 8px 30% 0;
`;

const Styled_SearchBtn = styled.button`
  background-color: #3c4043;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  color: #ccc;
  border: none;
  outline: none;
  font-size: 20px;
  padding: 8px;
  font-weight: bold;
  &:hover {
    color: white;
    background-color: #494d51;
  }
`;

const Styled_MenuBtn = styled.button`
  color: #ccc;
  font-size: 30px;
  background-color: #011627;
  border: none;
  position: fixed;
  top: 35px;
  left: 30px;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

function Header() {
  return (
    <Styled_Header>
      <Styled_Container>
        <Styled_MenuBtn>
          <IoIosMenu />
        </Styled_MenuBtn>
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
        <Styled_NavLink>For You</Styled_NavLink>
        <Styled_NavLink>Following</Styled_NavLink>
      </Styled_Nav>
    </Styled_Header>
  );
}

export default Header;
