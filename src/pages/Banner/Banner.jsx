import banner from "../../assets/banner/banner.png";
const Banner = () => {
  return (
    <div className="mx-auto container">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={banner} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
