import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { constants } from '../../global-styles';

export default styled(Link)`
  font-family: 'Playfair Display', serif;
  display: inline-flex;
  padding: 0.25em 2em;
  letter-spacing: 0.2em;
  margin: 1em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 1.25em;
  color: black;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${constants.color.$fontActive};
  }
  &:active {
    color: ${constants.color.$fontActive};
  }
`;
