import React, {useState } from 'react';
import * as S from './Navbar.styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const Navbar = () => {
        const [showMenuBurguer, setShowMenuBurguer] = useState(false);
      
        const clickItemNav = (item) => {
          console.log(item);
          document.getElementById(item).scrollIntoView({ behavior: "smooth" });
        };
      
    return (
        <S.ContainerNavbar>
            <S.ContainerLogo>
                <S.ImageLogo src="./img/logomin.png" alt="Logo Norma Badillo"/>
              
            </S.ContainerLogo>

            <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
               <S.BurguerMenu />
               <S.BurguerMenu />
               <S.BurguerMenu />
            </S.ContainerBurguer>


            <S.ContainerItems showMenuBurguer={showMenuBurguer}>
               <p onClick={() => clickItemNav("about")}> <ArrowDropDownIcon />  Sobre mi</p>
               <p onClick={() => clickItemNav("projects")}><ArrowDropDownIcon /> Proyectos</p>
               <p onClick={() => window.open("https://www.normabadillo.com.mx/web1/reinaroja/", "_blank")}><ArrowDropDownIcon /> Tienda</p> 
            <S.Button onClick={() => clickItemNav("contact")}>
            <AssignmentIndIcon fontSize="small" />  Escríbeme
            </S.Button>
              </S.ContainerItems>
        </S.ContainerNavbar>
    );
  };
  
  export default Navbar;