import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../public/logo.svg";
import { IoIosMenu } from "react-icons/io";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [index, setIndex] = useState(0);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo>
          <Link href="/" passHref>
            <Image src={logo} width={225} height={48} alt="outerbase-logo" />
          </Link>
        </Logo>

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
        <ResponsiveButton onClick={handleClick}>
          {click ? <GrClose size={25} /> : <IoIosMenu size={25} />}
        </ResponsiveButton>
      </NavbarWrapper>
      {/*
       */}

      {click && (
        <>
          <ResLinksContainer>
            <ResAboutLink index={index} onClick={() => setIndex(0)}>
              <Link href="/" passHref>
                <ALink>About</ALink>
              </Link>
            </ResAboutLink>
            <ResContactLink index={index} onClick={() => setIndex(1)}>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </ResContactLink>
          </ResLinksContainer>
        </>
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  padding: 0px 96px;
  margin-top: 33px;

  @media screen and (max-width: 840px) {
    padding: 0px 35px;
  }
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  @media screen and (max-width: 350px) {
    width: 120px;
  }
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
  @media screen and (max-width: 1070px) {
    display: none;
  }
`;

const ContactLink = styled.div`
  border-bottom: ${({ index }) => (index === 1 ? "4px solid #000000" : "none")};
`;
const ResponsiveButton = styled.div`
  cursor: pointer;
  @media screen and (min-width: 1071px) {
    display: none;
  }
`;

const ResLinksContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100vw;

  @media screen and (min-width: 1070px) {
    display: none;
  }
`;

const ResAboutLink = styled.div`
  border-bottom: ${({ index }) => (index === 0 ? "4px solid #000000" : "none")};
  margin-bottom: 2rem;
`;
const ResContactLink = styled.div`
  border-bottom: ${({ index }) => (index === 1 ? "4px solid #000000" : "none")};
`;
export default Navbar;
