import Carousel from "react-bootstrap/Carousel";

function HealthCrousal() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: "50vh",maxHeight:"18em", width: "100%" }}
          className="d-block "
          src="https://png.pngtree.com/png-clipart/20220508/original/pngtree-design-cosmetics-product-advertising-for-catalog-poster-png-image_7657439.png"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ height: "50vh",maxHeight:"18em", width: "100%" }}
          className="d-block"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/beauty-product-ads-design-template-d71fcb2e949ddab2b7f16373ae4db3ec_screen.jpg?ts=1645416538"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "50vh",maxHeight:"18em", width: "100%" }}
          className="d-block "
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_07/3451045/210218-product-of-the-year-2x1-cs.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ height: "50vh",maxHeight:"18em", width: "100%" }}
          className="d-block "
          src="https://i.pinimg.com/736x/b6/89/96/b68996b0aeb13339740f961ada455a77.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ height: "50vh",maxHeight:"18em", width: "100%" }}
          className="d-block "
          src="https://ecom.newtongroup.us/assets/images/homepage/newton-banner-01.jpeg"
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HealthCrousal;
