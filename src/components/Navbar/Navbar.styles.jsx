import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ContainerNavbar = styled.div`
max-width: 100vw;
height: 80px;
box-shadow: ${colors.boxshadow};
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
background-color: ${colors.colorazulnavy};
`;


export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  h1,
  h2 {
    font-weight: 700;
    color: ${colors.black};
    margin: 0;
  }
  h1 {
    font-size: 2rem;
    color: white;
  }
  h2 {
    background: linear-gradient(135deg, #cb5eee 0%, #4be1ec 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ImageLogo = styled.img`
  width: 150px;
  padding-right: 20px;
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  p {
    cursor: pointer;
    padding: 0 20px;
    text-decoration: none;
    color: ${colors.colorblancoenlace};
    font-weight: 500;
    font-family: 'Arial';
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.showMenuBurguer ? "inline-grid" : "none")};
    position: absolute;
    top: 100px;
    background: ${colors.white};
    box-shadow: ${colors.boxshadow};
    padding: 10px 0 20px 0;
    width: 100%;
    left: 0;
    text-align:center;
    a {
      padding: 10px 20px;
    }
    p {
      color: ${colors.colorverdeenlace};
     
    }
  }
`;

export const Button = styled.button`
  color: ${colors.white};
  background: ${colors.colorverdeenlace};
  padding: 12px 20px;
  border-radius: 10px;
  border: none;
  margin: 10px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 40%;
    align:center;
    margin: 10px 140px;
  }
`;

export const ContainerBurguer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const BurguerMenu = styled.div`
  width: 35px;
  height: 2px;
  background-color: ${colors.white};
  margin: 6px 0;
`;