import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../public/logo.svg";
import { IoIosMenu, IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [index, setIndex] = useState(0);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
      <ResponsiveButton onClick={handleClick}>
        {click ? (
          <IoIosCloseCircleOutline size={25} />
        ) : (
          <IoIosMenu size={25} />
        )}
      </ResponsiveButton>

      {click && (
        <>
          <ResLinksContainer>
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
          </ResLinksContainer>
        </>
      )}
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
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1070px) {
    display: none;
  }
`;
export default Navbar;
