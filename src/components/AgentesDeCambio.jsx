import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

const AgentesDeCambio = () => {
  const [isFirstSlider, setIsFirstSlider] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  const sensitivity =
    window.innerWidth > 1000 ? { x: 10, y: 10 } : { x: 100, y: 300 };

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleOrientation = (event) => {
    setPosition({
      x: event.gamma * 5,
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
        onSlideChange={(swiper) => {
          setIsFirstSlider(swiper.activeIndex === 0);
        }}
      >
        <SwiperSlide>
          <LandPage>
            <LandImages isFirstSlider={isFirstSlider}>
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
            <Titulo isFirstSlider={isFirstSlider}>
              <h2>AGENTES DE CAMBIO</h2>
              <p>Hacia una organización sostenible</p>
            </Titulo>
            <Desliza isFirstSlider={isFirstSlider}>
              DESLIZA
              <div className="desliza"></div>
            </Desliza>
          </LandPage>
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
  /* background-image: radial-gradient(
    circle at 0% 0%,
    #ffe7d1 0,
    #ffe7ce 4.55%,
    #ffe8ca 9.09%,
    #fee7c6 13.64%,
    #f7e6c1 18.18%,
    #efe5bc 22.73%,
    #e5e3b7 27.27%,
    #dae0b1 31.82%,
    #cdddac 36.36%,
    #bed9a7 40.91%,
    #add5a3 45.45%,
    #99d09f 50%,
    #84cb9d 54.55%,
    #6dc69e 59.09%,
    #53c2a1 63.64%,
    #32bea6 68.18%,
    #00bbac 72.73%,
    #00b7b4 77.27%,
    #00b4bd 81.82%,
    #00b1c5 86.36%,
    #00afce 90.91%,
    #00add6 95.45%,
    #00abde 100%
  ); */
  background: #e9f5ee;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  top: 0;
  left: 0;

  .mySwiper {
    width: 100%;
    height: 100vh;
  }

  .swiper-slide {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    gap: 2rem;
  }

  .swiper-pagination {
    right: 1rem;
  }

  .swiper-pagination-bullet {
    background: var(--green);
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
    width: 40px;
    height: 3px;
    background: var(--green);
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  .botonNavegador .nav2 .btn2 {
    width: 40px;
    height: 3px;
    background: var(--green);
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

const LandPage = styled.div`
  width: 100%;
  height: 80vh;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TitleAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ImagesAnimation = keyframes`
  from {
    transform: translateX(40px);
    opacity: 0;
  }
  to {
    transform:  translateX(0);
    opacity: 1;
  }
`;

const DeslizaAnimation = keyframes`
  from {
    transform: translateY(80px);
    opacity: 0;
  }
  to {
    transform:  translateY(0);
    opacity: 1;
  }
`;

// Estilos condicionales para LandImages y Titulo
const LandImages = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
  }

  ${(props) =>
    props.isFirstSlider &&
    css`
      animation: ${ImagesAnimation} 0.8s ease-in-out;
    `}
`;

const Titulo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 15px 1rem;
  h2 {
    font-size: 12vw;
    margin: 0;
    color: var(--green);
  }

  p {
    font-size: 4.5vw;
    font-weight: 500;
    margin: 0;
    color: var(--color2);
  }

  ${(props) =>
    props.isFirstSlider &&
    css`
      animation: ${TitleAnimation} 0.8s ease-in-out;
    `}
`;

const Desliza = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 1rem;
  height: 7rem;
  font-weight: 500;
  bottom: 0;
  right: 1rem;
  writing-mode: vertical-lr;
  font-size: 8px;
  color: var(--color2);

  .desliza {
    width: 1px;
    opacity: 0.5;
    height: 4rem;
    background: var(--color2);
  }

  ${(props) =>
    props.isFirstSlider &&
    css`
      animation: ${DeslizaAnimation} 0.8s ease-in-out;
    `}
`;