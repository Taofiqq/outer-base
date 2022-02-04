import styled from "styled-components";
// import message from "/message.svg";
import Image from "next/image";

const About = () => {
  return (
    <ContactContainer>
      <Header>Get in Touch</Header>

      <ContactOne>
        <Phone>
          <MessageButton>
            <svg
              width="21"
              height="26"
              viewBox="0 0 21 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.17915 0.305662C6.87928 0.094569 7.6306 0.129639 8.30802 0.405033C8.98544 0.680427 9.54811 1.17953 9.90235 1.81926L10.0208 2.05766L11.08 4.41126C11.4014 5.12564 11.5058 5.91875 11.38 6.69196C11.2543 7.46517 10.904 8.18435 10.3728 8.76006L10.16 8.97126L8.49115 10.5281C8.19035 10.8129 8.41595 11.9153 9.50395 13.8001C10.4832 15.4961 11.28 16.2881 11.672 16.3313H11.7408L11.8256 16.3153L15.1056 15.3121C15.5464 15.1769 16.0168 15.1715 16.4606 15.2967C16.9044 15.4218 17.3027 15.6721 17.608 16.0177L17.7536 16.2017L19.9248 19.2097C20.3503 19.7992 20.5623 20.5162 20.526 21.2424C20.4896 21.9686 20.207 22.6607 19.7248 23.2049L19.5296 23.4065L18.6624 24.2289C17.8836 24.9663 16.9095 25.4647 15.8558 25.6646C14.8021 25.8646 13.7131 25.7578 12.7184 25.3569C9.62235 24.1089 6.80955 21.2577 4.25435 16.8321C1.69435 12.3953 0.630353 8.52806 1.10555 5.21606C1.24935 4.21489 1.66162 3.27135 2.29857 2.48566C2.93552 1.69996 3.77338 1.10144 4.72315 0.753662L5.03195 0.651262L6.17915 0.305662Z"
                fill="black"
              />
            </svg>
          </MessageButton>
          <Number>+234 808 123 4567</Number>
        </Phone>
        <Email>
          <MessageButton>
            <svg
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3333 0.333252H4.66663C3.60576 0.333252 2.58834 0.754679 1.8382 1.50482C1.08805 2.25497 0.666626 3.27239 0.666626 4.33325V17.6666C0.666626 18.7275 1.08805 19.7449 1.8382 20.495C2.58834 21.2452 3.60576 21.6666 4.66663 21.6666H23.3333C24.3942 21.6666 25.4116 21.2452 26.1617 20.495C26.9119 19.7449 27.3333 18.7275 27.3333 17.6666V4.33325C27.3333 3.27239 26.9119 2.25497 26.1617 1.50482C25.4116 0.754679 24.3942 0.333252 23.3333 0.333252ZM23.3333 2.99992L14.6666 8.95992C14.4639 9.07694 14.234 9.13855 14 9.13855C13.7659 9.13855 13.536 9.07694 13.3333 8.95992L4.66663 2.99992H23.3333Z"
                fill="black"
              />
            </svg>
          </MessageButton>
          <EmailAddress>ADMIN@MARBLEPOINTS.COM</EmailAddress>
        </Email>
      </ContactOne>
      <ContactTwo>
        <Address>
          <MessageButton>
            <svg
              width="22"
              height="28"
              viewBox="0 0 22 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 0.666748C5.11869 0.666748 0.333361 5.45208 0.333361 11.3267C0.294694 19.9201 10.5947 27.0454 11 27.3334C11 27.3334 21.7054 19.9201 21.6667 11.3334C21.6667 5.45208 16.8814 0.666748 11 0.666748ZM11 16.6667C8.05336 16.6667 5.66669 14.2801 5.66669 11.3334C5.66669 8.38675 8.05336 6.00008 11 6.00008C13.9467 6.00008 16.3334 8.38675 16.3334 11.3334C16.3334 14.2801 13.9467 16.6667 11 16.6667Z"
                fill="black"
              />
            </svg>
          </MessageButton>
          <AddressLine>
            10, HUGHES AVENUE, <br /> ALAGOMEJI, YABA, LAGOS, <br /> LAGOS
            STATE, NIGERIA
          </AddressLine>
        </Address>
      </ContactTwo>

      <FooterContainer>© 2022, Outerbase, All rights reserved.</FooterContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  margin-top: 119px;
  margin-bottom: 64px;
`;
const ContactOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
  }
`;
const Phone = styled.div`
  width: 367px;
  height: 112px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 840px) {
    margin-right: 56px;
  }
  @media screen and (max-width: 840px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 400px) {
    width: 263px;
    height: 80px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 6.86649px;
  }
`;
const Number = styled.p`
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const Email = styled.div`
  width: 367px;
  height: 112px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    width: 263px;
    height: 80px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 6.86649px;
  }
`;
const EmailAddress = styled.p`
  text-transform: lowercase;
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
const MessageButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-right: 56px;
  width: 21px;
  height: 26px;
`;
const ContactTwo = styled.div`
  width: 367px;
  height: 112px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    width: 263px;
    height: 80px;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 6.86649px;
  }
`;

const Address = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddressLine = styled.p`
  text-transform: capitalize;
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const FooterContainer = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.246165px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 110px;
`;
export default About;
