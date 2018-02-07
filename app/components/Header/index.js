import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { constants } from '../../global-styles';

import A from './A';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

const HomeLink = styled(Link)`
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.1em;
  font-weight: 500;
  font-family: 'Great Vibes', cursive;
  font-size: 1.8em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  color: ${constants.color.$font};
`;

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <HomeLink to="/">Ocean Gallery</HomeLink>
        <NavBar>
          <HeaderLink to="/">Work</HeaderLink>
          <HeaderLink to="/store">Store</HeaderLink>
          <HeaderLink to="/info">Info</HeaderLink>
        </NavBar>
      </HeaderWrapper>
    );
  }
}

export default Header;
