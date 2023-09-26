import React, { useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

const AgentesDeCambio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };
  return (
    <Container>
      <Header>
        <div className="logo">
          <img src="https://app-valdi.s3.amazonaws.com/logosence.png" alt="" />
        </div>

        <div className="botonNavegador">
          <div
            className={`nav2 ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="btn1"></div>
            <div className="btn2"></div>
          </div>
        </div>
      </Header>
      <Swiper
        direction={"vertical"}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h2>AGENTES DE CAMBIO</h2>
          <p>Hacia una Organización Sostenible</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            Es por todos conocido que estamos viviendo una etapa crítica en el
            desarrollo de nuestro planeta, nos encontramos en una etapa de
            Cambio Climático Innegable, con temperatura media de 1,1°C más
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            Es por ello por lo que proponemos la creación de un programa de
            Agentes de Cambio en el SENCE el cual permitirá no solo difundir
            información sobre la importancia de cuidar los recursos naturales,
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h2>Metodología del Programa</h2>
          <ul>
            <li>Capacitación</li>
            <li>Red de Agentes de Cambio</li>
            <li>Campañas de Concienciación</li>
            <li>Proyectos de Impacto</li>
            <li>Plataforma de Información</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default AgentesDeCambio;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #ebf2ec;
  position: fixed;
  overflow: hidden;
  z-index: 9999;

  .mySwiper {
    width: 100%;
    height: 100vh;
    padding: 2rem;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #73a157;
  }

  .swiper-pagination-bullet {
    background: #73a157;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 5rem;
  background: #ebf2ec;
  box-shadow: 0 1px 5px -4px black;
  display: flex;
  top: 0;
  left: 0;
  z-index: 9999;
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .botonNavegador {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .botonNavegador .nav2 {
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }

  .botonNavegador .nav2 .btn1 {
    width: 50px;
    height: 3px;
    background: #73a157;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  .botonNavegador .nav2 .btn2 {
    width: 50px;
    height: 3px;
    background: #73a157;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  /* animacion btn */

  .nav2.open .btn1 {
    transform: rotate(45deg) translate(6px, 7px);
  }

  .nav2.open .btn2 {
    transform: rotate(-45deg) translate(6px, -7px);
  }
`;
