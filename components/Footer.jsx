import Image from "next/image";
import styled from "styled-components";
import logo2 from "../public/logo.svg";

const Footer = () => {
  return (
    <FooterComponent>
      <Image src={logo2} width={226} height={48} alt="outerbase-img" />
      {/* <Image src="/logo.png" width={226} height={48} alt="outerbase-img" /> */}
      <CopyRight>© 2022, Outerbase, All rights reserved.</CopyRight>
    </FooterComponent>
  );
};

const FooterComponent = styled.div`
  width: 1728px;
  height: 209px;
  background: #ededed;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CopyRight = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.25px;
  text-align: center;
`;
export default Footer;
