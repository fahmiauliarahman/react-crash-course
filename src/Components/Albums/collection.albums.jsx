import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const Collection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASE_URL}/photos?_limit=3`,
    }).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Carousel>
        {data.map((item) => (
          <Carousel.Item>
            <img className="d-block w-100" src={item.url} alt="First slide" />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.title}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Collection;
