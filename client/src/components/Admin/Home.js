import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = ({ prodlist }) => {
  return (
    <Carousel>
      {prodlist.map((prod) => {
        return (
          <div
            style={{ width: "100%", height: "100%", backgroundColor: "#FFF" }}
          >
            <img
              alt=""
              className="img-fluid"
              style={{ width: "40%" }}
              src={prod.product_image_url}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Home;
