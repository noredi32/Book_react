import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ContainerFooter = styled.div`
max-width: 100vw;
height: 80px;
box-shadow: ${colors.boxshadow};
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
background-color: ${colors.colorgrisfuerte};
p {
    text-align:center;
    padding: 0;
    margin: auto;
    color: ${colors.colorblancoenlace};
    font-weight: 500;
    font-family: 'Arial';
  }
`;
