import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../public/logo.svg";

const Navbar = () => {
  const [index, setIndex] = useState(0);

  return (
    <NavbarContainer>
      <Link href="/" passHref>
        <Image src={logo} width={225} height={48} alt="outerbase-logo" />
      </Link>
      <LinksContainer>
        <AboutLink index={index} onClick={() => setIndex(0)}>
          <Link href="/" passHref>
            <ALink>About</ALink>
          </Link>
        </AboutLink>
        <ContactLink index={index} onClick={() => setIndex(1)}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </ContactLink>
      </LinksContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 96px;
  margin-top: 33px;
`;

const AboutLink = styled.div`
  border-bottom: ${({ index }) => (index === 0 ? "4px solid #000000" : "none")};
  margin-right: 96px;
`;
const ALink = styled.a`
  cursor: pointer;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactLink = styled.div`
  border-bottom: ${({ index }) => (index === 1 ? "4px solid #000000" : "none")};
`;
export default Navbar;
