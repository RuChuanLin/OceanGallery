import React, { Component } from 'react';
import styled from 'styled-components';

import Img from './Img';
import cart from './img/shopping-cart.svg';
const Wrapper = styled.aside`
  position: fixed;
  right: 3%;
  display: flex;
  height: 60vh;
  flex-direction: column;
  justify-content: space-around;
`;
const CartNumber = styled.span`
  margin: 0.3em;
`;

class Aside extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <Img src={cart} alt="cart" />
          <CartNumber>100</CartNumber>
        </div>
      </Wrapper>
    );
  }
}

export default Aside;
