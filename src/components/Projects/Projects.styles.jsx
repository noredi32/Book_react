import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerProjects = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding-top: 50px;
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

export const Title = styled.h2`
  margin-top: 50px;
  text-align: center;
  font-size: 10px;
  span {
    font-size: 30px;
    color: ${colors.colorverdeenlace};
  }
`;

export const ContentProject = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectContent = styled.div`
  border-color: ${colors.grey};
  box-sizing: border-box;
  color: #a2a2a2; 
  font-weight: bold; 
  padding: 40px; 
  border: 2px solid #d8d8d8; 
  border-radius: 6px;
  box-shadow: ${colors.boxshadow};
  background: ${colors.white}; 
  padding: 0 10px;
`;

export const TitleProject = styled.h3`
  padding: 8px 15px;
  font-weight: 200;
  font-size: 15px;
  text-align: center;
  margin-bottom: 10px;
  color: ${colors.white};
  background:  ${colors.colorazulnavy};
  border-radius: 10px;
  );
  box-shadow: ${colors.boxshadow};
  text-decoration: none;
`;

export const ContainerImage = styled.div`
  text-align: center;
  img {
    width: 100%;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    img {
      max-width: 250px;
    }
  }
`;

export const ContainerTechs = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  justify-content: space-evenly;
  div {
    text-align: center;
    font-size: 5px;
  }
  img {
    width: 35px;
    height: auto;
    margin: 0 5px;
  }
  p {
    margin-top: 2px;
    font-size: 13px;
    color: ${colors.grey};
  }
`;

export const Description = styled.div`
  margin: 10px 10px 10px 10px;
  font-weight: 100;
  text-align:justify;
`;

export const ContainerFooter = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom:10px;
  img {
    width: 30px;
  }
  a:first-of-type {
    padding: 0 10px;
  }
`;