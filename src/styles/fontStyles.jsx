import { createGlobalStyle } from "styled-components";
import JoseRegular from "./fonts/JosefinSans-Regular";
import JoseNegrita from "./fonts/JosefinSans-Bold";
import JoseSemibold from "./fonts/JosefinSans-SemiBold";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'JosefinSans';
  src: url(${JoseRegular}) format('JR'),
       url(${JoseNegrita}) format('JN'),
       url(${JoseSemibold}) format('JS');
}
`;

export default FontStyles;