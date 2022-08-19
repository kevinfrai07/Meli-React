import React, { Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel';

function ImgCarousel({ imgs }) {
  console.log(imgs)
  return (
    <Fragment>
      {
        imgs == null ? "" :
          (imgs.length > 1
            ?
            <Fragment>
              <Carousel variant="dark">
                {imgs.map(img =>
                  <Carousel.Item key={img.id}>
                    <img className="d-block card-img-top product" src={img.secure_url} alt="First slide" />
                  </Carousel.Item>
                )}
              </Carousel>
            </Fragment>
            :
            <Fragment>
              <img className="d-block card-img-top product" src={imgs[0].secure_url} alt="First slide" />
            </Fragment>
          )
      }
    </Fragment>
  )
}
export default ImgCarousel;


