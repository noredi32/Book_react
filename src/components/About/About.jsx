import React from "react";
import * as S from "./About.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";
import logoWebsite from "../../svg/website.svg";


const About = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/noredi32",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/norma-edith-b-636a6930/",
      logo: logoLinkedin,
    },
    {
      name: "Website",
      link: "https://www.normabadillo.com.mx",
      logo: logoWebsite,
    },
  ];

  return (
    <S.ContainerAbout id="about" className="bodyfont" >
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>Norma Badillo</p>
            <p>Diseñadora gráfica en camino a UX </p>
          </S.Title>
          <S.DescriptionText>
            Me llamo Norma Badillo, soy
            diseñadora gráfica egresada de la
            Facultad de Estudios Superiores
            Acatlán [UNAM], me especializo en
            diseño web y digital.
            Me encantan las computadoras y los
            gadgets, conozco el html desde los
            12 años y aprendí con el fabuloso
            bloc de notas.
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="__blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src="/img/me.jpg" alt="Norma Badillo" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAbout>
  );
};

export default About;