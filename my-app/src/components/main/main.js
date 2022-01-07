import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./maincss.module.css";

export default function MyMain() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src="/vleague_poster/vlposter3.png" alt="First slide" />
        <Carousel.Caption />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/vleague_poster/poster1.jpg" alt="Second slide" />

        <Carousel.Caption />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/vleague_poster/poster2.jpg" alt="Third slide" />

        <Carousel.Caption />
      </Carousel.Item>
    </Carousel>
  );
}
