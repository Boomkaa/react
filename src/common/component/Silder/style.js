import styled from 'styled-components';
import LogoPic from '@/assets/logo.svg';

export const Logo = styled.a.attrs({
  href: '#/'
})`
display: block;
width: 100%;
height: 64px;
background-image: url(${LogoPic});
background-repeat: no-repeat;
background-position: center;
`
