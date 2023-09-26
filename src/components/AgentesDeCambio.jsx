import React, { useState, useEffect } from "react";
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

  const sensitivity =
    window.innerWidth > 1000 ? { x: 10, y: 10 } : { x: 50, y: 50 };

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleOrientation = (event) => {
    setPosition({
      x: event.gamma * 50,
      y: (event.beta - 20) * 50,
    });
  };

  useEffect(() => {
    if (window.innerWidth > 700) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      window.addEventListener("deviceorientation", handleOrientation);
      return () => {
        window.removeEventListener("deviceorientation", handleOrientation);
      };
    }
  }, []);

  let x = 0;
  let y = 0;
  let limitedX = 0;
  let limitedY = 0;
  x = (position.x - window.innerWidth / 2) / sensitivity.x;
  y = (position.y - window.innerHeight / 2) / sensitivity.y;
  limitedX = Math.min(Math.max(x, -25), 25);
  limitedY = Math.min(Math.max(y, -25), 25);

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
        speed={700}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <h2>AGENTES DE CAMBIO</h2>
            <p>Hacia una Organización Sostenible</p>
          </div>

          <LandImages>
            <img
              style={
                innerWidth > 1000
                  ? {
                      transform: `translate(${-limitedX}%, ${limitedY}%)`,
                      transition: "transform .5s ease-out",
                    }
                  : {
                      transform: `translate(${-limitedX}%, ${limitedY}%)`,
                      transition: "transform .5s ease-out",
                    }
              }
              src="https://appentropia.s3.amazonaws.com/agentesCambio/1.png"
              alt=""
            />
            <img
              style={
                innerWidth > 1000
                  ? {
                      transform: `translate(${limitedX}%, ${-limitedY}%)`,
                      transition: "transform .1s ease-out",
                    }
                  : {
                      transform: `translate(${limitedX}%, ${-limitedY}%)`,
                      transition: "transform .1s ease-out",
                    }
              }
              src="https://appentropia.s3.amazonaws.com/agentesCambio/2.png"
              alt=""
            />
            <img
              style={
                innerWidth > 1000
                  ? {
                      transform: `translate($-limitedX}%, ${limitedY}%)`,
                      transition: "transform .5s ease-out",
                    }
                  : {
                      transform: `translate(${limitedX}%, ${limitedY}%)`,
                      transition: "transform .5s ease-out",
                    }
              }
              src="https://appentropia.s3.amazonaws.com/agentesCambio/3.png"
              alt=""
            />
            <img
              style={
                innerWidth > 1000
                  ? {
                      transform: `translate(${limitedX}%, ${limitedY}%)`,
                      transition: "transform .1s ease-out",
                    }
                  : {
                      transform: `translate(${limitedX}%, ${limitedY}%)`,
                      transition: "transform .1s ease-out",
                    }
              }
              src="https://appentropia.s3.amazonaws.com/agentesCambio/4.png"
              alt=""
            />
            <img
              style={
                innerWidth > 1000
                  ? {
                      transform: `translate(${-limitedX}%, ${-limitedY}%)`,
                      transition: "transform .1s ease-out",
                    }
                  : {
                      transform: `translate(${-limitedX}%, ${-limitedY}%)`,
                      transition: "transform .1s ease-out",
                    }
              }
              src="https://appentropia.s3.amazonaws.com/agentesCambio/personas.png"
              alt=""
            />
          </LandImages>
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
  background-image: radial-gradient(
    circle at 85.36% -11.24%,
    #f6fca9 0,
    #e1f5a0 16.67%,
    #c6e992 33.33%,
    #a4d880 50%,
    #80c770 66.67%,
    #5ebb69 83.33%,
    #3ab368 100%
  );
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  top: 0;
  left: 0;

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
    color: white;
  }

  .swiper-pagination {
    right: 1rem;
  }

  .swiper-pagination-bullet {
    background: white;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    transition: 0.5s;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 5rem;
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
    background: white;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  .botonNavegador .nav2 .btn2 {
    width: 50px;
    height: 3px;
    background: white;
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

const LandImages = styled.div`
  width: 70vw;
  height: 70vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
  }
`;
