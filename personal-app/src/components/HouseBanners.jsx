import gryffindor from "../images/houses/gryffindor.png";
import slytherin from "../images/houses/slytherin.jpg";
import hufflepuff from "../images/houses/hufflepuff.jpg";
import ravenclaw from "../images/houses/ravenclaw.png";

function HouseBanners() {
  const bannerImages = [gryffindor, slytherin, hufflepuff, ravenclaw];

  return (
    <div id="house-banner-section">
      {bannerImages.map((image) => {
        return <img className="banner-img" src={image} alt="house banner" />;
      })}
    </div>
  );
}

export default HouseBanners;
