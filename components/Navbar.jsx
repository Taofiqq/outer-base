import Link from "next/Link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../public/logo.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Image src={logo} width={225} height={48} alt="outerbase-logo" />
      <LinksContainer>
        <Link href="/">
          <ALink>About</ALink>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </LinksContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 96px;
  margin-top: 33px;
`;
const ALink = styled.a`
  margin-right: 96px;
  cursor: pointer;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export default Navbar;
