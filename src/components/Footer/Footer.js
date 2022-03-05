import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {FaHandPeace  } from 'react-icons/fa';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+1-514-699-9571">tel:+1-514-699-9571</LinkItem>
      </LinkColumn>

      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:dharanthaker920@gmail.com">dharanthaker920@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>

    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Coding my way through Life <FaHandPeace/> .</Slogan>
      </CompanyContainer>

      <SocialIcons href="https://github.com/dharan1999">
       <AiFillGithub size="3rem" />
       </SocialIcons>

       <SocialIcons href="https://www.linkedin.com/in/dharan-thaker">
       <AiFillLinkedin size="3rem" />
       </SocialIcons>

       <SocialIcons href="https://www.instagram.com/dharan_12__/">
       <AiFillInstagram size="3rem" />
       </SocialIcons>
    </SocialIconsContainer>
  </FooterWrapper>
  );
};

export default Footer;
